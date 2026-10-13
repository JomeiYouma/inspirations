import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import AudioPlayer from './AudioPlayer.jsx';
import DitherImage from './DitherImage.jsx';
import DecryptedText from './reactbits/DecryptedText.jsx';
import { palette } from '../theme.js';

const EASE = [0.76, 0, 0.24, 1];

function coverRadius({ x, y }) {
  const w = window.innerWidth;
  const h = window.innerHeight;
  return Math.hypot(Math.max(x, w - x), Math.max(y, h - y)) + 20;
}

function MediaItem({ item, index }) {
  const [clear, setClear] = useState(false);

  let body = null;
  if (item.type === 'image') {
    body = (
      <button
        type="button"
        className={`media-image${clear ? ' is-clear' : ''}`}
        onMouseEnter={() => setClear(true)}
        onMouseLeave={() => setClear(false)}
        onClick={() => setClear(c => !c)}
        aria-label={clear ? 'Afficher la version tramée' : "Afficher l'image d'origine"}
      >
        <DitherImage src={item.src} res={260} square={false} fg={palette.bone} bg={palette.ink} delay={200} />
        <img src={item.src} alt={item.caption || ''} loading="lazy" />
      </button>
    );
  } else if (item.type === 'video') {
    body = <video src={item.src} controls playsInline preload="metadata" poster={item.poster} />;
  } else if (item.type === 'embed') {
    body = (
      <div className="media-embed">
        <iframe
          src={item.src}
          title={item.caption || 'vidéo'}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
          loading="lazy"
        />
      </div>
    );
  } else if (item.type === 'audio') {
    body = <AudioPlayer src={item.src} title={item.title} />;
  }

  return (
    <motion.figure
      className={`media media-${item.type}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, ease: EASE, delay: 0.1 * (index % 2) }}
    >
      {body}
      {item.caption && <figcaption>{item.caption}</figcaption>}
    </motion.figure>
  );
}

export default function Detail({ entry, index, total, axes, origin, onClose, onPrev, onNext }) {
  const closeRef = useRef(null);
  const scrollRef = useRef(null);
  const R = coverRadius(origin);
  const r0 = origin.r ?? 30;
  const at = `${origin.x}px ${origin.y}px`;

  useEffect(() => {
    closeRef.current?.focus({ preventScroll: true });
    const onKey = e => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose, onPrev, onNext]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0 });
  }, [entry.id]);

  const paragraphs = entry.text.split(/\n\s*\n/);
  // les audios passent au-dessus des images et vidéos
  const sounds = entry.media?.filter(m => m.type === 'audio') ?? [];
  const visuals = entry.media?.filter(m => m.type !== 'audio') ?? [];

  return (
    <motion.div
      className="detail"
      role="dialog"
      aria-modal="true"
      aria-label={entry.title}
      initial={{ clipPath: `circle(${r0}px at ${at})` }}
      animate={{ clipPath: `circle(${R}px at ${at})` }}
      exit={{ clipPath: `circle(0px at ${at})` }}
      transition={{ duration: 0.9, ease: EASE }}
    >
      <div className="detail-bar">
        <div className="detail-nav">
          <button type="button" onClick={onPrev} aria-label="Précédent">
            ←
          </button>
          <span>
            {String(index + 1).padStart(2, '0')}/{String(total).padStart(2, '0')}
          </span>
          <button type="button" onClick={onNext} aria-label="Suivant">
            →
          </button>
        </div>
        <button ref={closeRef} type="button" className="detail-close" onClick={onClose}>
          fermer ✕
        </button>
      </div>

      <div className="detail-scroll" ref={scrollRef}>
        <AnimatePresence mode="wait">
          <motion.article
            key={entry.id}
            className="detail-inner"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <aside className="detail-side">
              <motion.div
                className="detail-disc"
                initial={{ scale: 0.6, rotate: -8 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 1.1, ease: EASE, delay: 0.25 }}
              >
                <DitherImage src={entry.image} res={200} fg={palette.bone} bg={palette.ink} delay={350} duration={1100} />
              </motion.div>
              <dl className="detail-coords">
                <div>
                  <dt>{axes.x.short}</dt>
                  <dd>
                    {entry.x} <span className="detail-coords-label">{axes.x.label}</span>
                  </dd>
                </div>
                <div>
                  <dt>{axes.y.short}</dt>
                  <dd>
                    {entry.y} <span className="detail-coords-label">{axes.y.label}</span>
                  </dd>
                </div>
              </dl>
            </aside>

            <div className="detail-main">
              <p className="detail-id">{entry.id}</p>
              <h2 className="detail-title">
                <DecryptedText text={entry.title} animateOn="view" speed={35} maxIterations={14} sequential />
              </h2>

              <div className="detail-text">
                {paragraphs.map((p, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 0.9, ease: EASE, delay: 0.55 + i * 0.12 }}
                  >
                    {p}
                  </motion.p>
                ))}
              </div>

              {entry.links?.length > 0 && (
                <motion.ul
                  className="detail-links"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.9, ease: EASE, delay: 0.55 + paragraphs.length * 0.12 }}
                >
                  {entry.links.map(l => (
                    <li key={l.href}>
                      <a href={l.href} target="_blank" rel="noopener noreferrer">
                        {l.label} <span aria-hidden="true">↗</span>
                      </a>
                    </li>
                  ))}
                </motion.ul>
              )}

              {sounds.length > 0 && (
                <div className="detail-audio">
                  {sounds.map((m, i) => (
                    <MediaItem key={`${entry.id}-a${i}`} item={m} index={i} />
                  ))}
                </div>
              )}

              {visuals.length > 0 && (
                <div className="detail-media">
                  {visuals.map((m, i) => (
                    <MediaItem key={`${entry.id}-${i}`} item={m} index={i} />
                  ))}
                </div>
              )}
            </div>
          </motion.article>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
