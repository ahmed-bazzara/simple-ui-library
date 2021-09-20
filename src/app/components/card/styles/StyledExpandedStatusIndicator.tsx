import styled from '@emotion/styled';
import { Icon, IconProps } from 'app/components';
import { transition } from 'utilities';

export const StyledExpandedStatusIndicator = styled<
React.FC<IconProps>,
{ expanded?: boolean }
>(Icon)(
  {
    transition: transition('transform'),
  },
  ({ expanded }) =>
    expanded && {
      transform: 'rotate(90deg)',
    },
);
