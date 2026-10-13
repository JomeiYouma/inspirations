import { useEffect, useRef, useState } from 'react';

const BARS = 72;

function fmt(t) {
  if (!Number.isFinite(t)) return '--:--';
  const m = Math.floor(t / 60);
  const s = Math.floor(t % 60);
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

// Crêtes de la forme d'onde, normalisées entre 0 et 1 ; null tant qu'elles ne sont pas prêtes.
function usePeaks(src) {
  const [peaks, setPeaks] = useState(null);

  useEffect(() => {
    let cancelled = false;
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return;
    const ctx = new Ctx();
    fetch(src)
      .then(r => r.arrayBuffer())
      .then(buf => ctx.decodeAudioData(buf))
      .then(audio => {
        const data = audio.getChannelData(0);
        const step = Math.floor(data.length / BARS);
        const out = [];
        for (let i = 0; i < BARS; i++) {
          let max = 0;
          for (let j = i * step; j < (i + 1) * step; j += 16) max = Math.max(max, Math.abs(data[j]));
          out.push(max);
        }
        const top = Math.max(...out) || 1;
        if (!cancelled) setPeaks(out.map(v => v / top));
      })
      .catch(() => {})
      .finally(() => ctx.close());
    return () => {
      cancelled = true;
    };
  }, [src]);

  return peaks;
}

export default function AudioPlayer({ src, title }) {
  const audioRef = useRef(null);
  const trackRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(NaN);
  const peaks = usePeaks(src);
  const progress = duration ? time / duration : 0;

  const toggle = () => {
    const a = audioRef.current;
    if (a.paused) a.play();
    else a.pause();
  };

  const seekTo = ratio => {
    const a = audioRef.current;
    if (!Number.isFinite(a.duration)) return;
    a.currentTime = Math.min(Math.max(ratio, 0), 1) * a.duration;
    setTime(a.currentTime);
  };

  const seekFromPointer = e => {
    const r = trackRef.current.getBoundingClientRect();
    seekTo((e.clientX - r.left) / r.width);
  };

  const onPointerDown = e => {
    e.currentTarget.setPointerCapture(e.pointerId);
    seekFromPointer(e);
  };

  const onPointerMove = e => {
    if (e.currentTarget.hasPointerCapture(e.pointerId)) seekFromPointer(e);
  };

  const onKeyDown = e => {
    const a = audioRef.current;
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      e.preventDefault();
      e.stopPropagation(); // ne pas changer de fiche
      a.currentTime += e.key === 'ArrowRight' ? 5 : -5;
    } else if (e.key === 'Home') {
      e.preventDefault();
      a.currentTime = 0;
    } else if (e.key === 'End') {
      e.preventDefault();
      a.currentTime = a.duration;
    }
  };

  return (
    <div className={`player${playing ? ' is-playing' : ''}`}>
      <audio
        ref={audioRef}
        src={src}
        preload="metadata"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
        onTimeUpdate={e => setTime(e.currentTarget.currentTime)}
        onLoadedMetadata={e => setDuration(e.currentTarget.duration)}
      />

      <button type="button" className="player-toggle" onClick={toggle} aria-label={playing ? 'Pause' : 'Lecture'}>
        <span className="player-icon" aria-hidden="true">
          {playing ? '❚❚' : '▶'}
        </span>
        <span className="player-state">{playing ? 'pause' : 'lecture'}</span>
      </button>

      <div className="player-body">
        {title && <p className="player-title">{title}</p>}
        <div
          ref={trackRef}
          className="player-track"
          role="slider"
          tabIndex={0}
          aria-label="Position de lecture"
          aria-valuemin={0}
          aria-valuemax={Math.round(duration) || 0}
          aria-valuenow={Math.round(time)}
          aria-valuetext={`${fmt(time)} sur ${fmt(duration)}`}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onKeyDown={onKeyDown}
        >
          {Array.from({ length: BARS }, (_, i) => (
            <span
              key={i}
              className={`player-bar${i / BARS < progress ? ' is-played' : ''}${peaks ? '' : ' is-idle'}`}
              style={{ height: `${peaks ? Math.max(8, peaks[i] * 100) : 18}%` }}
            />
          ))}
        </div>
        <p className="player-time">
          <span>{fmt(time)}</span>
          <span>{fmt(duration)}</span>
        </p>
      </div>
    </div>
  );
}
