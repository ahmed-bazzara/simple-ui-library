import React from 'react';
import { pointerHandlers } from 'utilities';
import classnames from 'classnames';
import { Theme, AppearanceType, THEMES, APPEARANCES } from 'app/constants';
import './styles/button.scss';

export interface ButtonProps {
  appearance?: AppearanceType;
  children?: React.ReactNode;
  className?: string;
  icon?: SVGElement | null;
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
  icon: null,
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

  return isAvailable ? (
    <button
      {...pointerHandlers(handleClick)}
      className={classNames}
      disabled={disableButton}
      onAnimationEnd={onAnimationEnd}
      onMouseDown={onMouseDown}
      type={type}
    >
      {/* {icon && <InlineSVG src={icon} />} */}
      {label && <span className="label">{label}</span>}
      {children}
    </button>
  ) : null;
};

export default Button;
