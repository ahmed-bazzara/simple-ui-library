import { rem, transition } from 'utilities';
import { COLOR } from 'app/constants';
import BaseCardSegment, { BaseCardSegmentProps } from '../cardSegment/Base';
import { css } from '@emotion/css';

// export const StyledRow = ({ hoverable }: { hoverable?: boolean  } & BaseCardSegmentProps) => styled<{ hoverable?: boolean }>(BaseCardSegment)(
//   {
//     transition: transition('background-color'),
//     ':not(:last-child)': {
//       borderBottom: `${rem(1)} solid ${COLOR.neutralGrey28}`,
//     },
//     '&:hover' : {
//       backgroundColor: hoverable ? COLOR.primary5 : 'inherit',
//     },
//   },
// );
type StyledRowProps = BaseCardSegmentProps & {
  hoverable?: boolean;
};

// export const StyledRow = ({ hoverable }: BaseCardSegmentProps & { hoverable?: boolean  }) => styled(BaseCardSegment)`
//   transition: ${transition('background-color')};
//   :not(:last-child) {
//     border-bottom: ${rem(1)} solid ${COLOR.neutralGrey28};
//   };
//   &:hover {
//     background-color: ${hoverable ? COLOR.primary5 : 'inherit'},
//   }
// `;

export const StyledRow: React.FC<StyledRowProps> = ({ hoverable, ...props }) => (
  <BaseCardSegment
    className={css({
      transition: transition('background-color'),
      ':not(:last-child)': {
        borderBottom: `${rem(1)} solid ${COLOR.neutralGrey28}`,
      },
      '&:hover' : {
        backgroundColor: hoverable ? COLOR.primary5 : 'inherit',
      },
    })}
    {...props}
  />
);
// ({ hoverable }) =>
// hoverable && {
//   '&:hover': {
//     backgroundColor: COLOR.primary5,
//   },
// },