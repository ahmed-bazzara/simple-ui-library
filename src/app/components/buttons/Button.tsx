import React, { useMemo } from 'react';
import { pointerHandlers, rem, shadow, transition } from 'utilities';
import { Theme, AppearanceType, COLOR, THEMES } from 'app/constants';
import { Text, Icon, IconName } from 'app/components';
import { cx, css, CSSInterpolation } from '@emotion/css';

const BUTTON_HEIGHT = {
  NORMAL: 56,
  SMALL: 32,
  TINY: 18,
};
type ButtonHieght = keyof typeof BUTTON_HEIGHT;
const buttonStyles = css({
  transition: transition('background-color'),
  boxShadow: shadow(1, 3, 2, 1, 1, 1),
  cursor: 'pointer',
  display: 'block',
  height: rem(BUTTON_HEIGHT.NORMAL),
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
  borderRadius: rem(4),
  outline: 'none',
  touchAction: 'manipulation',
  
  'hover': {
    boxShadow: shadow(1, 5, 3, 1, 2, 2),
  },
  'focus': {
    boxShadow: shadow(1, 5, 3, 1, 2, 2),
  },
});

const disabledStyles = css({
  backgroundColor: COLOR.text10,
  border: 'none',
  boxShadow: 'none',
  ':hover': { backgroundColor: COLOR.text10 },
  ':active': { backgroundColor: COLOR.text10 },
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
  size?: ButtonHieght;
}

const Button: React.FC<ButtonProps> = (props): JSX.Element | null => {
  const {
    appearance = 'regular',
    className,
    label = '',
    isAvailable = true,
    isDisabled,
    children,
    icon,
    type = 'button',
    onAnimationEnd,
    onMouseDown,
    onClick: clickHandler,
    onConfirm,
    theme = 'primary',
    validate,
    size = 'NORMAL',
  } = props;

  const disableButton = isDisabled;
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

  const appearanceStyles = useMemo(() => {
    // const appearanceStyles = '';
    // const appearanceStyles = {};
    const linkApearance: CSSInterpolation = {
      border: 'none',
      boxShadow: 'none',
      paddingLeft: rem(8),
      paddingRight: rem(8),
      '&:hover': { backgroundColor: `transparentize(${COLOR.primary}, 0.2)` },
      ':not(.disabled):active': { backgroundColor: COLOR.primary },
    };

    const circleOrSquarAppearance: CSSInterpolation = {
      width: rem(BUTTON_HEIGHT[size]),
      padding: 0,
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
    };

    const circleAppearance: CSSInterpolation = {
      width: rem(BUTTON_HEIGHT[size]),
      padding: 0,
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
      boxShadow: shadow(3, 5, 1, 18, 2, 2),
      borderRadius: rem(BUTTON_HEIGHT[size] / 2),
      '&:hover': { boxShadow: shadow(3, 5, 1, 18, 2, 2) },
      '&:focus': { boxShadow: shadow(3, 5, 1, 18, 2, 2) },
    };

    return css({
      ...((appearance === 'link' || appearance === 'link-small') ? linkApearance : {}),
      ...((appearance === 'circular' || appearance === 'square') ? circleOrSquarAppearance : {}),
      ...((appearance === 'circular') ? { ...circleOrSquarAppearance, ...circleAppearance } : {}),
    });
  }, [appearance, size]);


  const themeStyles = useMemo(() => {
    const themes = {
      [THEMES.PRIMARY]: {
        backgroundColor: COLOR.primary,
        ':hover': { opacity: 0.8 },
      },
      [THEMES.SECONDARY]: {
        backgroundColor: COLOR.neutralGrey5,
        border: `thin solid ${COLOR.neutralGrey28}`,
        ':hover' : { borderColor: COLOR.primary24 },
        ':active' : {
          borderColor: COLOR.primary,
          backgroundColor: COLOR.primary24,
        },
      },
      [THEMES.NEGATIVE]: {
        backgroundColor: COLOR.negative,
        ':hover': { opacity: 0.8 },
        ':active' : { backgroundColor: COLOR.negative },
      },
    };

    return css(themes[theme]);
  }, [theme]);

  const classNames = cx(
    buttonStyles,
    appearanceStyles, 
    themeStyles,
    css({ height: rem(BUTTON_HEIGHT[size]) }),
    isDisabled && disabledStyles,
    className,
  );
  return isAvailable ? (
    <button
      {...pointerHandlers(handleClick)}
      className={classNames}
      disabled={disableButton}
      onAnimationEnd={onAnimationEnd}
      onMouseDown={onMouseDown}
      type={type}
    >
      {icon && <Icon icon={icon} />}
      {label && <Text className={css({ opacity: isDisabled ? 0.64 : 1 })}>{label}</Text>}
      {children}
    </button>
  ) : null;
};

export default Button;
