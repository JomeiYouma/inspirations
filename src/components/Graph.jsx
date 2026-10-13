import { useState } from 'react';
import { motion } from 'motion/react';
import DitherImage from './DitherImage.jsx';
import DecryptedText from './reactbits/DecryptedText.jsx';
import { palette } from '../theme.js';
import { domain, frac, pos, ticks } from '../scale.js';

function Point({ entry, index, axes, px, py, fx, fy, active, onHover, onOpen }) {
  const hot = active === entry.id;
  const flipX = fx > 0.55;
  const flipY = fy > 0.8;

  return (
    <motion.button
      type="button"
      className={`point${hot ? ' is-hot' : ''}`}
      style={{ left: px, bottom: py, zIndex: hot ? 5 : 1 }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.25 + index * 0.05, type: 'spring', stiffness: 260, damping: 18 }}
      onMouseEnter={() => onHover(entry.id)}
      onMouseLeave={() => onHover(null)}
      onFocus={() => onHover(entry.id)}
      onBlur={() => onHover(null)}
      onClick={e => {
        const r = e.currentTarget.getBoundingClientRect();
        onOpen(entry.id, { x: r.left + r.width / 2, y: r.top + r.height / 2, r: r.width / 2 });
      }}
      aria-label={`${entry.id}. ${entry.title}`}
    >
      <span className="point-disc">
        <DitherImage
          src={entry.image}
          res={72}
          fg={hot ? palette.ink : palette.bone}
          bg={hot ? palette.signal : palette.ink}
          delay={250 + index * 50}
        />
      </span>

      {hot && (
        <span className={`point-label${flipX ? ' flip-x' : ''}${flipY ? ' flip-y' : ''}`} aria-hidden="true">
          <span className="point-label-id">{entry.id}</span>
          <DecryptedText text={entry.title} animateOn="view" speed={28} maxIterations={8} sequential />
          <span className="point-label-coords">
            {axes.x.short} {entry.x} · {axes.y.short} {entry.y}
          </span>
        </span>
      )}
    </motion.button>
  );
}

export default function Graph({ axes, entries, onOpen }) {
  const [active, setActive] = useState(null);
  const hot = entries.find(e => e.id === active);
  const dx = domain(entries, 'x');
  const dy = domain(entries, 'y');
  const tx = ticks(dx);
  const ty = ticks(dy);

  return (
    <div className="graph">
      <div className="plot">
        {/* grille */}
        {tx.map(t => (
          <span key={`gx${t}`} className="grid-x" style={{ left: pos(t, dx) }} />
        ))}
        {ty.map(t => (
          <span key={`gy${t}`} className="grid-y" style={{ bottom: `${pos(t, dy)}` }} />
        ))}

        {/* axes */}
        <span className="axis axis-x" />
        <span className="axis axis-y" />

        {/* graduations */}
        {tx.map(t => (
          <span key={t} className="tick tick-x" style={{ left: pos(t, dx) }}>
            {t}
          </span>
        ))}
        {ty.map(t => (
          <span key={t} className="tick tick-y" style={{ bottom: `${pos(t, dy)}` }}>
            {t}
          </span>
        ))}

        <span className="axis-title axis-title-x">{axes.x.label} →</span>
        <span className="axis-title axis-title-y">↑ {axes.y.label}</span>

        {/* repères du point survolé */}
        {hot && (
          <>
            <span className="guide guide-v" style={{ left: `${pos(hot.x, dx)}`, height: `${pos(hot.y, dy)}` }} />
            <span className="guide guide-h" style={{ bottom: `${pos(hot.y, dy)}`, width: `${pos(hot.x, dx)}` }} />
            <span className="guide-mark guide-mark-y" style={{ bottom: `${pos(hot.y, dy)}` }}>
              {hot.y}
            </span>
            <span className="guide-mark guide-mark-x" style={{ left: `${pos(hot.x, dx)}` }}>
              {hot.x}
            </span>
          </>
        )}

        {entries.map((entry, i) => (
          <Point
            key={entry.id}
            entry={entry}
            index={i}
            axes={axes}
            px={pos(entry.x, dx)}
            fx={frac(entry.x, dx)}
            py={pos(entry.y, dy)}
            fy={frac(entry.y, dy)}
            active={active}
            onHover={setActive}
            onOpen={onOpen}
          />
        ))}
      </div>
    </div>
  );
}
