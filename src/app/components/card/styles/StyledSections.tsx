import styled from '@emotion/styled';
import { rem } from 'utilities';
import { COLOR } from 'app/constants';
import { motion } from 'framer-motion';

export const StyledSections = styled(motion.div)({
  display: 'flex',
  padding: rem(0, 16),
  alignItems: 'center',
  color: COLOR.secondary,
});
