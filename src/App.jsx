import { lazy, Suspense, useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence } from 'motion/react';
import Graph from './components/Graph.jsx';
import Detail from './components/Detail.jsx';
import Intro from './components/Intro.jsx';
import { axes, inspirations, prelude } from './data/inspirations2.js';
import { cssVars } from './theme.js';

const Dither = lazy(() => import('./components/reactbits/Dither.jsx'));

const reducedMotion =
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function App() {
  const [open, setOpen] = useState(null); // { id, origin }
  const [intro, setIntro] = useState(true);
  const closeIntro = useCallback(() => setIntro(false), []);
  const lastFocus = useRef(null);
  const index = open ? inspirations.findIndex(e => e.id === open.id) : -1;

  const handleOpen = useCallback((id, origin) => {
    lastFocus.current = document.activeElement;
    setOpen({ id, origin });
  }, []);

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    dir =>
      setOpen(o => {
        const i = inspirations.findIndex(e => e.id === o.id);
        const next = inspirations[(i + dir + inspirations.length) % inspirations.length];
        return { ...o, id: next.id };
      }),
    []
  );
  const prev = useCallback(() => step(-1), [step]);
  const next = useCallback(() => step(1), [step]);

  useEffect(() => {
    if (!open && lastFocus.current) {
      lastFocus.current.focus?.({ preventScroll: true });
      lastFocus.current = null;
    }
  }, [open]);

  return (
    <div className="app" style={cssVars}>
      <div className="bg" aria-hidden="true">
        <Suspense fallback={null}>
          <Dither
            waveColor={[0.42, 0.42, 0.42]}
            backgroundColor={[0, 0, 0]}
            colorNum={4}
            pixelSize={3}
            waveSpeed={0.03}
            waveFrequency={3}
            waveAmplitude={0.32}
            mouseRadius={0.35}
            disableAnimation={reducedMotion || !!open || intro}
            eventSource={typeof document !== 'undefined' ? document.getElementById('root') : undefined}
          />
        </Suspense>
      </div>

      <main inert={intro || undefined}>
        <Graph axes={axes} entries={inspirations} onOpen={handleOpen} />
      </main>

      {!intro && !open && (
        <button type="button" className="intro-reopen" onClick={() => setIntro(true)}>
          prélude
        </button>
      )}

      <AnimatePresence>
        {intro && <Intro key="intro" text={prelude} total={inspirations.length} onClose={closeIntro} />}
      </AnimatePresence>

      <AnimatePresence>
        {open && index > -1 && (
          <Detail
            key="detail"
            entry={inspirations[index]}
            index={index}
            total={inspirations.length}
            axes={axes}
            origin={open.origin}
            onClose={close}
            onPrev={prev}
            onNext={next}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
