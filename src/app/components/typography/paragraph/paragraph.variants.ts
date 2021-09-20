import { rem } from 'utilities';
import { TEXT_SIZES } from '../typography.constants';

const baseParagraphStyle = { fontWeight: 400 };

const paragraphVariants = {
  LARGE: {
    element: 'p',
    style: {
      ...baseParagraphStyle,
      fontSize: rem(TEXT_SIZES.large),
      lineHeight: rem(32),
      marginBottom: rem(24),
    },
  },
  NORMAL: {
    element: 'p',
    style: {
      ...baseParagraphStyle,
      fontSize: rem(TEXT_SIZES.normal),
      lineHeight: rem(24),
      marginBottom: rem(20),
    },
  },
  SMALL: {
    element: 'p',
    style: {
      ...baseParagraphStyle,
      fontSize: rem(TEXT_SIZES.small),
      lineHeight: rem(16),
      marginBottom: rem(20),
    },
  },
};

export default paragraphVariants;
