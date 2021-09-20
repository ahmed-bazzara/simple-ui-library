import styled from '@emotion/styled';
import { COLOR } from 'app/constants';
import { rem } from 'utilities';

export const StyledContextMenuOption = styled.li<{ isSelected: boolean }>(
  {
    padding: rem(16),
    height: rem(56),
    cursor: 'pointer',
    borderBottom: `${rem(1)} solid ${COLOR.neutralGrey28}`,
    display: 'flex',
    '&:last-child': { borderBottom: 0 },
    '&:hover': { backgroundColor: COLOR.primary5 },
  },
  ({ isSelected }) => isSelected && { fontWeight: 600 },
);
