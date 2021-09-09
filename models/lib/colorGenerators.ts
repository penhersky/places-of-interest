// eslint-disable-next-line import/prefer-default-export
export const generateHslColor = (test: string, s: number, l: number) => {
  let hash = 0;
  for (let i = 0; i < test.length; i += 1) {
    // eslint-disable-next-line no-bitwise
    hash = test.charCodeAt(i) + ((hash << 5) - hash);
  }
  const h = hash % 360;
  return `hsl(${h}, ${s}%, ${l}%)`;
};
