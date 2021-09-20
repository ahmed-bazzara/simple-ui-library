import styled from '@emotion/styled';
import { COLOR, ELEVATION, Z_INDEX } from 'app/constants';
import { rem, transition } from 'utilities';

export const StyledContextMenu = styled.ul<{ isOpen: boolean }>(
  {
    backgroundColor: COLOR.neutralWhite,
    color: COLOR.secondary,
    width: rem(280),
    boxShadow: ELEVATION[16],
    borderRadius: rem(8),
    maxHeight: rem(224),
    overflowX: 'auto',
    transformOrigin: '100% 0%',
    opacity: 0,
    transition: `${transition('transform', 160)}, ${transition(
      'opacity',
      160,
    )}, ${transition('visibility', 160, undefined, 160)}`,
    transform: 'scale(0.5)',
    visibility: 'hidden',
    zIndex: Z_INDEX.TOP,
  },
  ({ isOpen }) =>
    isOpen && {
      transition: `${transition('transform', 160)}, ${transition(
        'opacity',
        160,
      )}, ${transition('visibility', 160)}`,
      transform: 'scale(1)',
      opacity: 1,
      visibility: 'visible',
    },
);
