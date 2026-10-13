// Chaque axe va de la plus petite valeur des données à 100.

export function domain(entries, key) {
  return [Math.min(...entries.map(e => e[key])), 100];
}

// Position relative (0 à 1) d'une valeur sur son axe.
export function frac(v, [lo, hi]) {
  return (v - lo) / (hi - lo);
}

// Position CSS dans le graphe. La marge --inset (voir styles.css) vaut un peu plus
// d'un rayon de disque, pour qu'aucun point ne morde sur un axe ni sur le bord.
export function pos(v, d) {
  return `calc(var(--inset) + (100% - 2 * var(--inset)) * ${frac(v, d)})`;
}

export function ticks([lo, hi], count = 5) {
  return Array.from({ length: count }, (_, i) => Math.round(lo + (i * (hi - lo)) / (count - 1)));
}
