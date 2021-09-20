import styled from '@emotion/styled';
import { rem, transition } from 'utilities';
import { COLOR } from 'app/constants';
import BaseCardSegment, { BaseCardSegmentProps } from '../cardSegment/Base';

export const StyledRow = styled<
React.FC<BaseCardSegmentProps>,
{ hoverable?: boolean }
>(BaseCardSegment)(
  {
    transition: transition('background-color'),
    ':not(:last-child)': {
      borderBottom: `${rem(1)} solid ${COLOR.neutralGrey28}`,
    },
  },
  ({ hoverable }) =>
    hoverable && {
      '&:hover': {
        backgroundColor: COLOR.primary5,
      },
    },
);
