import styled from '@emotion/styled';
import { Text } from 'app/components/typography';
import { rem } from 'utilities';

export const StyledContextMenuOptionLabel = styled(Text)({
  display: 'block',
  minWidth: 0,
  height: rem(24),
  flex: 1,
  lineHeight: rem(24),
});
