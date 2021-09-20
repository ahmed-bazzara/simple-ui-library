const withDefaultUnit = (value: number | string, unit: string): string => {
  if (typeof value === 'number') {
    return value + unit;
  }

  return value;
};

export default withDefaultUnit;
