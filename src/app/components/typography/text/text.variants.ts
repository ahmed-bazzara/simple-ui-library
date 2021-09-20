import { COLOR, ELEVATION } from 'app/constants';
import { rem } from 'utilities';

const textVariants = {
  regular: {
    element: 'span',
    style: {},
  },
  bold: {
    element: 'strong',
    style: { fontWeight: 600 },
  },
  italic: {
    element: 'em',
    style: { fontStyle: 'italic' },
  },
  label: {
    element: 'label',
    style: {
      fontWeight: 600,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: rem(16, 24),
      borderRadius: rem(8),
      backgroundColor: COLOR.neutralGrey5,
      boxShadow: ELEVATION[1],
      cursor: 'pointer',
    },
  },
};

export default textVariants;
