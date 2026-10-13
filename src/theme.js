// Palette unique, partagée par le CSS (variables) et les canvas tramés.
export const palette = {
  ink: '#0c0c0b',
  bone: '#ece6d6',
  ash: '#6b675d',
  // test : vert au même contraste que l'orange sur l'encre (5,9:1).
  // Pour revenir à l'orange : '#ff4b1f'
  signal: '#00a336'
};

export const cssVars = {
  '--ink': palette.ink,
  '--bone': palette.bone,
  '--ash': palette.ash,
  '--signal': palette.signal
};
