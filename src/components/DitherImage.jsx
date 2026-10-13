import { useEffect, useRef, useState } from 'react';

/*
 * Image tramée en 1 bit (diffusion d'erreur Atkinson), peinte dans un canvas
 * basse résolution agrandi en `pixelated`. Le masque est calculé une seule fois
 * par image ; les couleurs se repeignent instantanément (survol, etc.).
 * À l'apparition, les pixels se révèlent selon une matrice de Bayer 8×8.
 */

const BAYER = [
  0, 48, 12, 60, 3, 51, 15, 63, 32, 16, 44, 28, 35, 19, 47, 31, 8, 56, 4, 52, 11, 59, 7, 55, 40, 24, 36,
  20, 43, 27, 39, 23, 2, 50, 14, 62, 1, 49, 13, 61, 34, 18, 46, 30, 33, 17, 45, 29, 10, 58, 6, 54, 9, 57,
  5, 53, 42, 26, 38, 22, 41, 25, 37, 21
].map(v => (v + 0.5) / 64);

const cache = new Map();

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.decoding = 'async';
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

function luminanceFromImage(img, res, square) {
  const nw = img.naturalWidth || 1;
  const nh = img.naturalHeight || 1;
  const w = res;
  const h = square ? res : Math.max(1, Math.round((res * nh) / nw));
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  const ctx = c.getContext('2d', { willReadFrequently: true });
  // recadrage "cover"
  const scale = Math.max(w / nw, h / nh);
  const dw = nw * scale;
  const dh = nh * scale;
  ctx.drawImage(img, (w - dw) / 2, (h - dh) / 2, dw, dh);
  const { data } = ctx.getImageData(0, 0, w, h); // lève une erreur si CORS refusé
  const lum = new Float32Array(w * h);
  for (let i = 0; i < w * h; i++) {
    lum[i] = (0.2126 * data[i * 4] + 0.7152 * data[i * 4 + 1] + 0.0722 * data[i * 4 + 2]) / 255;
  }
  return { lum, w, h };
}

// Repli si l'image ne charge pas : un halo bruité, pour garder la matière.
function luminanceFallback(res, square, seed) {
  const w = res;
  const h = square ? res : Math.round(res * 0.66);
  const lum = new Float32Array(w * h);
  let s = 0;
  for (const ch of seed) s = (s * 31 + ch.charCodeAt(0)) >>> 0;
  const rand = () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
  const cx = 0.3 + rand() * 0.4;
  const cy = 0.3 + rand() * 0.4;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const d = Math.hypot(x / w - cx, y / h - cy);
      lum[y * w + x] = Math.max(0, 1 - d * 1.6) * 0.85 + rand() * 0.15;
    }
  }
  return { lum, w, h };
}

function normalize(lum) {
  // étirement des niveaux sur les percentiles 2–98 + léger contraste
  const sorted = Float32Array.from(lum).sort();
  const lo = sorted[Math.floor(sorted.length * 0.02)];
  const hi = sorted[Math.floor(sorted.length * 0.98)];
  const range = Math.max(0.05, hi - lo);
  for (let i = 0; i < lum.length; i++) {
    const v = (lum[i] - lo) / range;
    lum[i] = Math.min(1, Math.max(0, (v - 0.5) * 1.15 + 0.5));
  }
}

function atkinson(lum, w, h) {
  const mask = new Uint8Array(w * h);
  const buf = Float32Array.from(lum);
  const spread = (x, y, e) => {
    if (x >= 0 && x < w && y < h) buf[y * w + x] += e;
  };
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const i = y * w + x;
      const on = buf[i] > 0.5 ? 1 : 0;
      mask[i] = on;
      const e = (buf[i] - on) / 8;
      spread(x + 1, y, e);
      spread(x + 2, y, e);
      spread(x - 1, y + 1, e);
      spread(x, y + 1, e);
      spread(x + 1, y + 1, e);
      spread(x, y + 2, e);
    }
  }
  return mask;
}

function getMask(src, res, square) {
  const key = `${src}|${res}|${square}`;
  if (!cache.has(key)) {
    const job = (src ? loadImage(src) : Promise.reject(new Error('no src')))
      .then(img => luminanceFromImage(img, res, square))
      .catch(() => luminanceFallback(res, square, src || 'x'))
      .then(({ lum, w, h }) => {
        normalize(lum);
        return { mask: atkinson(lum, w, h), w, h };
      });
    cache.set(key, job);
  }
  return cache.get(key);
}

function hexToRgb(hex) {
  const n = parseInt(hex.replace('#', ''), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function DitherImage({
  src,
  res = 96,
  square = true,
  fg = '#ece6d6',
  bg = '#0c0c0b',
  delay = 0,
  duration = 700,
  className = '',
  alt = ''
}) {
  const canvasRef = useRef(null);
  const [result, setResult] = useState(null);
  const progress = useRef(0);

  useEffect(() => {
    let alive = true;
    getMask(src, res, square).then(r => alive && setResult(r));
    return () => {
      alive = false;
    };
  }, [src, res, square]);

  // Apparition (une fois par masque), puis repeinture à chaque changement de couleur.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!result || !canvas) return;
    const { mask, w, h } = result;
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d');
    const img = ctx.createImageData(w, h);
    const [fr, fgG, fb] = hexToRgb(fg);
    const [br, bgG, bb] = hexToRgb(bg);

    const paint = p => {
      const d = img.data;
      for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
          const i = y * w + x;
          const visible = BAYER[(y & 7) * 8 + (x & 7)] < p;
          const on = visible && mask[i];
          const o = i * 4;
          d[o] = on ? fr : br;
          d[o + 1] = on ? fgG : bgG;
          d[o + 2] = on ? fb : bb;
          d[o + 3] = 255;
        }
      }
      ctx.putImageData(img, 0, 0);
    };

    if (progress.current >= 1 || prefersReducedMotion()) {
      progress.current = 1;
      paint(1);
      return;
    }

    let raf;
    // reprend là où l'apparition s'était arrêtée si les couleurs changent en cours
    const start =
      progress.current > 0 ? performance.now() - progress.current * duration : performance.now() + delay;
    const tick = now => {
      const p = Math.min(1, Math.max(0, (now - start) / duration));
      progress.current = p;
      paint(p);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    paint(progress.current);
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [result, fg, bg, delay, duration]);

  return (
    <canvas
      ref={canvasRef}
      className={`dither-image ${className}`}
      role={alt ? 'img' : undefined}
      aria-label={alt || undefined}
      aria-hidden={alt ? undefined : true}
      width={res}
      height={square ? res : Math.round(res * 0.66)}
    />
  );
}
