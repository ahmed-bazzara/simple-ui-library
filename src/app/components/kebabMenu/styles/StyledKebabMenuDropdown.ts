import styled from '@emotion/styled';
import { rem } from 'utilities';
import { ContextMenu } from 'app/components';
import { Z_INDEX } from 'app/constants';

export const StyledKebabMenuDropdown = styled(ContextMenu)({
  maxHeight: rem(230),
  zIndex: Z_INDEX.ABOVE,
  position: 'absolute',
  top: rem(32),
  right: 0,
});
