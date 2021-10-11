/* eslint-disable no-fallthrough */
/* eslint-disable no-duplicate-case */
import React, { useMemo } from 'react';
import { pointerHandlers, rem, shadow, transition } from 'utilities';
import { Theme, AppearanceType, COLOR } from 'app/constants';
import { Text, Icon, IconName } from 'app/components';
import { cx, css, CSSInterpolation } from '@emotion/css';

const BUTTON_HEIGHT = {
  NORMAL: 56,
  SMALL: 32,
  TINY: 18,
};
type ButtonHieght = keyof typeof BUTTON_HEIGHT;
// const StyledButton = styled.button({
const buttonStyles = css`
  transition: ${transition('background-color')};
  box-shadow: ${shadow(1, 3, 2, 1, 1, 1)};
  cursor: pointer;
  display: block;
  height: ${rem(BUTTON_HEIGHT.NORMAL)};
  max-width: 100%;
  font-size: ${rem(18)};
  padding: ${rem(0, 26)};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  background: none;
  background-color: ${COLOR.primary};
  fill: ${COLOR.neutralWhite};
  border: none;
  border-radius: ${rem(4)};
  outline: none;
  touch-action: manipulation;
  
  &:hover {
    box-shadow: ${shadow(1, 5, 3, 1, 2, 2)};
  };
  &:focus {
    box-shadow: ${shadow(1, 5, 3, 1, 2, 2)};
  };
  /* :active { box-shadow: 'none' }; */
`;

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
  // const {
  //   internalValidationResults,
  //   disableSubmitOnValidationError,
  // } = useContext(FormContext);
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
    // theme = 'primary',
    validate,
    size = 'NORMAL',
  } = props;

  const disableButton = isDisabled;
  // const isSubmitButton = type === 'submit';
  // const disableButton = isDisabled
  //   || (Object.values(internalValidationResults).some((result) => result.hasError())
  //     && disableSubmitOnValidationError
  //     && isSubmitButton);
  // const classNames = classnames('cmn-button', className, appearance, {
  //   disabled: disableButton,
  //   'with-icon': icon,
  //   [theme]:
  //     appearance !== APPEARANCES.LINK && appearance !== APPEARANCES.LINK_SMALL,
  // });

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
    // const appearanceStyles = '';
    // const appearanceStyles = {};
    const appearanceStyles: CSSInterpolation = {};
    
    switch (appearance) {
      case 'link':
      case 'link-small':
        appearanceStyles.border = 'none';
        appearanceStyles.boxShadow = 'none';
        appearanceStyles['&:hover'] = { backgroundColor: `transparentize(${COLOR.primary}, 0.2)` };
        appearanceStyles[':not(.disabled):active'] = { backgroundColor: COLOR.primary };
        appearanceStyles.paddingLeft = rem(8);
        appearanceStyles.paddingRight = rem(8);
        break;

      case 'circular':
      case 'square':
        appearanceStyles.width = rem(BUTTON_HEIGHT[size]);
        appearanceStyles.padding = 0;
        appearanceStyles.alignItems = 'center';
        appearanceStyles.justifyContent = 'center';
        appearanceStyles.display = 'flex';
        break;

      case 'circular':
        appearanceStyles.width = rem(BUTTON_HEIGHT[size]);
        appearanceStyles.padding = 0;
        appearanceStyles.alignItems = 'center';
        appearanceStyles.justifyContent = 'center';
        appearanceStyles.display = 'flex';
        appearanceStyles.boxShadow = shadow(3, 5, 1, 18, 2, 2);
        appearanceStyles.borderRadius = rem(BUTTON_HEIGHT[size] / 2);
        appearanceStyles['&:hover'] = { boxShadow: shadow(3, 5, 1, 18, 2, 2) };
        appearanceStyles['&:focus'] = { boxShadow: shadow(3, 5, 1, 18, 2, 2) };

      default:
        break;
    }

    return ({ appearance: css(appearanceStyles) });
    // return ({ appearanceStyles });
  }, [appearance, size]);

  return isAvailable ? (
    <button
      {...pointerHandlers(handleClick)}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      // css={{ ...customStyles.appearanceStyles }}
      // css={{ backgroundColor: 'red', fontsize: '26px' }}
      className={cx(buttonStyles, customStyles.appearance, className, css`height: ${rem(BUTTON_HEIGHT[size])}`)}
      // className={classNames}
      disabled={disableButton}
      onAnimationEnd={onAnimationEnd}
      onMouseDown={onMouseDown}
      type={type}
    >
      {icon && <Icon icon={icon} />}
      {label && <Text>{label}</Text>}
      {children}
    </button>
  ) : null;
};

export default Button;
