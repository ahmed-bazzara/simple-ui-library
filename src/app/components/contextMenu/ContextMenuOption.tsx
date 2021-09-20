import React from 'react';
import { pointerHandlers } from 'utilities';
import { HighlightedText } from 'app/components';
import {
  StyledContextMenuOption,
  StyledContextMenuOptionIconWrapper,
  StyledContextMenuOptionLabel,
} from './styles';

export interface ContextMenuOptionProps {
  menuRef: React.MutableRefObject<HTMLUListElement | null>;
  icon?: JSX.Element;
  onClose?: () => void;
  onClick: () => void;
  title: string;
  isSelected?: boolean;
  highlightedText?: string;
}

export const ContextMenuOption: React.FC<ContextMenuOptionProps> = (props) => {
  const {
    menuRef,
    title,
    onClick,
    isSelected = false,
    onClose,
    icon,
    highlightedText,
  } = props;

  const handleClick = (
    event: React.MouseEvent<HTMLLIElement> | React.TouchEvent<HTMLLIElement>,
  ): void => {
    if (menuRef.current && menuRef.current.contains(event.target as Node)) {
      onClick();
      onClose?.();
    }
  };

  return (
    <StyledContextMenuOption
      {...pointerHandlers(handleClick)}
      isSelected={isSelected}
      onMouseDown={(event) => {
        event.preventDefault();
        event.stopPropagation();
      }}
      tabIndex={0}
    >
      {icon && (
        <StyledContextMenuOptionIconWrapper>
          {icon}
        </StyledContextMenuOptionIconWrapper>
      )}
      <StyledContextMenuOptionLabel size="normal" lineClamp={1}>
        <HighlightedText color="primaryText" highlightedText={highlightedText}>
          {title}
        </HighlightedText>
      </StyledContextMenuOptionLabel>
    </StyledContextMenuOption>
  );
};
