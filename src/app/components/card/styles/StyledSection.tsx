import styled from '@emotion/styled';
import { COLOR } from 'app/constants';
import { rem } from 'utilities';

export const StyledSection = styled.div<{ isDisabled?: boolean }>(
  ({ isDisabled }) => ({
    padding: rem(24, 8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    color: isDisabled ? COLOR.textDisabled : 'unset',
  }),
);
