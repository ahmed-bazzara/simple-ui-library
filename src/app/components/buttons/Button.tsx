/* eslint-disable no-fallthrough */
/* eslint-disable no-duplicate-case */
import React, { useMemo } from 'react';
import { pointerHandlers, rem, shadow, transition } from 'utilities';
import classnames from 'classnames';
import { Theme, AppearanceType, THEMES, APPEARANCES, COLOR } from 'app/constants';
import { Text } from 'app/components';
import styled, { CSSObject } from '@emotion/styled';
import { Icon, IconName } from 'npm_index';

const BUTTON_HIGHT = 56;

const StyledButton = styled.button({
  transition: transition('background-color'),
  boxShadow: shadow(1, 3, 2, 1, 1, 1),
  cursor: 'pointer',
  display: 'block',
  height: rem(BUTTON_HIGHT),
  maxWidth: '100%',
  fontSize: rem(18),
  padding: rem(0, 26),
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  background: 'none',
  backgroundColor: COLOR.primary,
  fill: COLOR.neutralWhite,
  border: 'none',
  borderRadius: rem(8),
  outline: 'none',
  touchAction: 'manipulation',
  
  ':hover': {
    boxShadow: shadow(1, 5, 3, 1, 2, 2),
  },
  ':focus': {
    boxShadow: shadow(1, 5, 3, 1, 2, 2),
  },
  ':active': { boxShadow: 'none' },
});

export interface ButtonProps {
  appearance?: AppearanceType;
  children?: React.ReactNode;
  className?: string;
  icon?: IconName;
  isAvailable?: boolean;
  isDisabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  label?: string;
  onAnimationEnd?(): void;
  onClick?(event: React.FormEvent<HTMLButtonElement>): void;
  onMouseDown?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  onConfirm?(): boolean;
  theme?: Theme;
  validate?(): boolean;
}

const defaultProps = {
  appearance: APPEARANCES.REGULAR,
  isAvailable: true,
  theme: THEMES.PRIMARY,
  isDisabled: false,
  label: '',
};

const Button: React.FC<ButtonProps> = (props): JSX.Element | null => {
  // const {
  //   internalValidationResults,
  //   disableSubmitOnValidationError,
  // } = useContext(FormContext);
  const {
    appearance,
    className,
    label,
    isAvailable,
    isDisabled,
    children,
    icon,
    type = 'button',
    onAnimationEnd,
    onMouseDown,
    onClick: clickHandler,
    onConfirm,
    theme,
    validate,
  } = {
    ...defaultProps,
    ...props,
  };

  const disableButton = isDisabled;
  // const isSubmitButton = type === 'submit';
  // const disableButton = isDisabled
  //   || (Object.values(internalValidationResults).some((result) => result.hasError())
  //     && disableSubmitOnValidationError
  //     && isSubmitButton);
  const classNames = classnames('cmn-button', className, appearance, {
    disabled: disableButton,
    'with-icon': icon,
    [theme]:
      appearance !== APPEARANCES.LINK && appearance !== APPEARANCES.LINK_SMALL,
  });

  const handleClick = (
    event:
    | React.MouseEvent<HTMLButtonElement>
    | React.TouchEvent<HTMLButtonElement>,
  ): void => {
    if (disableButton) {
      return;
    }

    if (validate?.() ?? true) {
      onConfirm?.();
    }

    clickHandler?.(event);
  };

  const customStyles = useMemo(() => {
    const appearanceStyles: CSSObject = {};
    switch (appearance) {
      case 'regular':
      case 'link':
      case 'link-small':
        appearanceStyles.fontWeight = 400;
      case 'circular':
      case 'square':
        appearanceStyles.width = rem(BUTTON_HIGHT);
        appearanceStyles.padding = 0;
        appearanceStyles.alignItems = 'center';
        appearanceStyles.justifyContent = 'center';
        appearanceStyles.display = 'flex';
        
      case 'circular':
        appearanceStyles.boxShadow = shadow(3, 5, 1, 18, 2, 2);
        appearanceStyles.borderRadius = rem(BUTTON_HIGHT / 2);
        appearanceStyles[':hover'] = { boxShadow: shadow(3, 5, 1, 18, 2, 2) };
        appearanceStyles[':focus'] = { boxShadow: shadow(3, 5, 1, 18, 2, 2) };
        
      case 'link':
      case 'link-small':
        appearanceStyles.border = 'none';
        appearanceStyles.boxShadow = 'none';
        appearanceStyles[':hover'] = { backgroundColor: `transparentize(${COLOR.primary}, 0.2)` };
        appearanceStyles[':not(.disabled):active'] = { backgroundColor: COLOR.primary };

      case 'link-small':
        appearanceStyles.paddingLeft = rem(8);
        appearanceStyles.paddingRight = rem(8);

      default:
        break;
    }

    return ({ appearanceStyles });
  }, [appearance]);

  console.log(customStyles);
  
  return isAvailable ? (
    <StyledButton
      {...pointerHandlers(handleClick)}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      css={{ ...customStyles.appearanceStyles as any }}
      // css={{ backgroundColor: 'red', fontsize: '26px' }}
      className={classNames}
      disabled={disableButton}
      onAnimationEnd={onAnimationEnd}
      onMouseDown={onMouseDown}
      type={type}
    >
      {icon && <Icon icon={icon}/>}
      {label && <Text>{label}</Text>}
      {children}
    </StyledButton>
  ) : null;
};

export default Button;
