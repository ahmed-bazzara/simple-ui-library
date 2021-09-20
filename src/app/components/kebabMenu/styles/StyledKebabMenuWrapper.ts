import styled from '@emotion/styled';
import { COLOR } from 'app/constants';

export const StyledKebabMenuWrapper = styled.div<{ isDisabled: boolean }>(
  ({ isDisabled }) => ({
    position: 'relative',
    color: isDisabled ? COLOR.textDisabled : 'unset',
  }),
);
