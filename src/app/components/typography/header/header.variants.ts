import { rem } from 'utilities';

const baseHeaderStyle = { fontWeight: 600 };

const headerVariants = {
  H1: {
    element: 'h1',
    style: {
      ...baseHeaderStyle,
      fontSize: rem(40),
      lineHeight: rem(64),
      marginTop: rem(24),
      marginBottom: rem(24),
    },
  },
  H2: {
    element: 'h2',
    style: {
      ...baseHeaderStyle,
      fontSize: rem(32),
      lineHeight: rem(48),
      marginTop: rem(20),
      marginBottom: rem(20),
    },
  },
  H3: {
    element: 'h3',
    style: {
      ...baseHeaderStyle,
      fontSize: rem(24),
      lineHeight: rem(40),
      marginTop: rem(16),
      marginBottom: rem(16),
    },
  },
  H4: {
    element: 'h4',
    style: {
      ...baseHeaderStyle,
      fontSize: rem(20),
      lineHeight: rem(32),
      marginTop: rem(12),
      marginBottom: rem(12),
    },
  },
  H5: {
    element: 'h5',
    style: {
      ...baseHeaderStyle,
      fontSize: rem(16),
      lineHeight: rem(24),
      marginTop: rem(8),
      marginBottom: rem(8),
    },
  },
  H6: {
    element: 'h6',
    style: {
      ...baseHeaderStyle,
      fontSize: rem(13),
      lineHeight: rem(16),
      marginTop: rem(4),
      marginBottom: rem(4),
    },
  },
};

export default headerVariants;
