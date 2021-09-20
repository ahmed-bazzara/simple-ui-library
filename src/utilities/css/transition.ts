import withDefaultUnit from './withDefaultUnit';

const transition = (
  property: string,
  duration: string | number = '200ms',
  timingFunction = 'cubic-bezier(0.55, 0, 0.1, 1)',
  delay: string | number = '0ms',
): string => {
  return `${property} ${withDefaultUnit(
    duration,
    'ms',
  )} ${timingFunction} ${withDefaultUnit(delay, 'ms')}`;
};

export default transition;
