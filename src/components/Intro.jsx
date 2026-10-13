import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';

const EASE = [0.76, 0, 0.24, 1];

export default function Intro({ text, total, onClose }) {
  const enterRef = useRef(null);
  const paragraphs = text.split(/\n\s*\n/);

  useEffect(() => {
    enterRef.current?.focus({ preventScroll: true });
    const onKey = e => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <motion.div
      className="intro"
      role="dialog"
      aria-modal="true"
      aria-labelledby="intro-title"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: EASE }}
      onClick={e => e.target === e.currentTarget && onClose()}
    >
      <motion.section
        className="intro-box"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
      >
        <p className="detail-id">{String(total).padStart(2, '0')} inspirations</p>
        <h1 id="intro-title" className="intro-title">
          Prélude
        </h1>
        <div className="detail-text intro-text">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <button ref={enterRef} type="button" className="intro-enter" onClick={onClose}>
          entrer <span aria-hidden="true">→</span>
        </button>
      </motion.section>
    </motion.div>
  );
}
