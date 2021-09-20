import React, { useState, useCallback } from 'react';
import { pointerHandlers } from 'utilities';
import { ICON_NAME, Icon, ContextMenuProps } from 'app/components';
import {
  StyledKebabMenuButton,
  StyledKebabMenuDropdown,
  StyledKebabMenuWrapper,
} from './styles';

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
      <StyledKebabMenuDropdown
        isOpen={isOpen && !isDisabled}
        onClose={handleContextMenuClose}
        {...restProps}
      />
    </StyledKebabMenuWrapper>
  );
};
