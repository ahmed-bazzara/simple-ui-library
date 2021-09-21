import React from 'react';
import { Icon, IconProps } from 'app/components';
import { transition } from 'utilities';
import { css } from '@emotion/css';

// export const StyledExpandedStatusIndicatorT = styled<
// React.FC<IconProps>,
// { expanded?: boolean }
// >(Icon)(
//   {
//     transition: transition('transform'),
//   },
//   ({ expanded }) =>
//     expanded && {
//       transform: 'rotate(90deg)',
//     },
// );

export const StyledExpandedStatusIndicator: React.FC<IconProps & { expanded?: boolean }> = ({ expanded, ...props }) => (
  <Icon
    className={css({
      transition: transition('transform'),
      ...expanded && {
        transform: 'rotate(90deg)',
      },
    })}
    
    {...props}
  />
);
