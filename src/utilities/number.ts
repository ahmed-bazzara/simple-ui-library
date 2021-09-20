export const getNumberOfDecimals = (value: number | string): number => {
  const parts = value.toString().split('.');

  return parts.length > 1 ? parts[1].length : 0;
};

export const roundToNearestThreshold = (
  value: number,
  nearestThreshold: number = 50,
) => {
  return Math.ceil(value / nearestThreshold) * nearestThreshold;
};
