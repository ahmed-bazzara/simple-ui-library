import { useState, useCallback } from 'react';
import { pointerHandlers, rem } from 'utilities';
import { ICON_NAME, Icon, ContextMenuProps, ContextMenu } from 'app/components';
import {
  StyledKebabMenuButton,
  StyledKebabMenuWrapper,
} from './styles';
import { Z_INDEX } from 'app/constants';

export type KebabMenuProps = Omit<ContextMenuProps, 'isOpen' | 'onClose'> & {
  isDisabled?: boolean;
};

export const KebabMenu = ({
  className,
  isDisabled = false,
  ...restProps
}: KebabMenuProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const handleContextMenuToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleContextMenuClose = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  return (
    <StyledKebabMenuWrapper className={className} isDisabled={isDisabled}>
      <StyledKebabMenuButton
        {...pointerHandlers(handleContextMenuToggle)}
        type="button"
      >
        <Icon icon={ICON_NAME.KEBAB_MENU} />
      </StyledKebabMenuButton>
      <ContextMenu
        css={{
          maxHeight: rem(230),
          zIndex: Z_INDEX.ABOVE,
          position: 'absolute',
          top: rem(32),
          right: 0,
        }}
        isOpen={isOpen && !isDisabled}
        onClose={handleContextMenuClose}
        {...restProps}
      />
      {/* <StyledKebabMenuDropdown
        isOpen={isOpen && !isDisabled}
        onClose={handleContextMenuClose}
        {...restProps}
      /> */}
    </StyledKebabMenuWrapper>
  );
};
