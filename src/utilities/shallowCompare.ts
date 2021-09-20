const { hasOwnProperty } = Object.prototype;

export const shallowCompare = (
  a?: Record<string, unknown>,
  b?: Record<string, unknown>,
): boolean => {
  if (a === undefined) return b === undefined;
  if (b === undefined) return a === undefined;
  if (Object.is(a, b)) return true;

  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);

  if (aKeys.length !== bKeys.length) return false;

  for (const key of aKeys) {
    if (!hasOwnProperty.call(b, key) || !Object.is(a[key], b[key])) {
      return false;
    }
  }

  return true;
};

export default shallowCompare;
