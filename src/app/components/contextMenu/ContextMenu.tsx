import React, { useRef, useMemo } from 'react';
import { pointerHandlers } from 'utilities';
import { ContextMenuOption as ContextMenuOptionComponent } from './ContextMenuOption';
import { useEventPortal } from '../eventPortal';
import { StyledContextMenu } from './styles';

export interface ContextMenuOption {
  key?: string | number;
  icon?: JSX.Element;
  title: string;
  onClick: () => void;
  isSelected?: boolean;
}

export interface ContextMenuProps {
  options: ContextMenuOption[];
  onClose?: () => void;
  closeOnOptionClick?: boolean;
  isOpen?: boolean;
  className?: string;
  highlightedText?: string;
}

export const ContextMenu: React.FC<ContextMenuProps> = (props) => {
  const {
    options,
    onClose,
    className,
    isOpen = true,
    closeOnOptionClick = true,
    highlightedText,
  } = props;
  const menuRef = useRef<HTMLUListElement | null>(null);

  useEventPortal(
    useMemo(
      () =>
        pointerHandlers((event) => {
          if (
            menuRef.current &&
            !menuRef.current.contains(event.target as Node)
          ) {
            onClose?.();
          }
        }),
      [onClose],
    ),
    isOpen,
  );

  return (
    <StyledContextMenu
      ref={menuRef}
      className={className}
      isOpen={isOpen}
      tabIndex={0}
    >
      {options.map((option) => (
        <ContextMenuOptionComponent
          {...option}
          key={option.key ?? option.title}
          highlightedText={highlightedText}
          menuRef={menuRef}
          onClose={closeOnOptionClick ? onClose : undefined}
        />
      ))}
    </StyledContextMenu>
  );
};
