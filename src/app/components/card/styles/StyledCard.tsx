import styled from '@emotion/styled';
import { rem } from 'utilities';
import { COLOR } from 'app/constants';
import { motion } from 'framer-motion';

export const StyledCard = styled(motion.div)({
  backgroundColor: COLOR.neutralWhite,
  border: `${rem(1)} solid ${COLOR.neutralGrey28}`,
  borderRadius: rem(8),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
});
