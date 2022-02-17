import React, { memo } from "react";
import classNames from "classnames";
import { Button } from "app/components";
import { APPEARANCES } from "app/constants";
import { ButtonProps } from "app/components/buttons/Button";
import { SNACKBAR_TYPES, SnackbarType } from "./snackbar.constants";

export interface SnackbarProps {
  type?: SnackbarType;
  title?: string;
  message: string;
  multiLine?: boolean;
  buttonProps?: ButtonProps[];
  className?: string;
}

const defaultButtonProps: ButtonProps[] = [];

export const Snackbar: React.FC<SnackbarProps> = memo(props => {
  const {
    type = SNACKBAR_TYPES.DEFAULT,
    buttonProps = defaultButtonProps,
    className,
    title,
    message,
    multiLine,
  } = props;

  const classname = classNames("cmn-snackbar", className, {
    default: type === SNACKBAR_TYPES.DEFAULT,
    warning: type === SNACKBAR_TYPES.WARNING,
    "single-line": !multiLine,
    "multi-line": multiLine,
  });

  return (
    <div className={classname}>
      {multiLine && title && <div className='title'>{title}</div>}
      <div className='message'>{message}</div>
      {buttonProps.length > 0 && (
        <div className='buttons'>
          {buttonProps.map((props, index) => (
            <Button
              key={index}
              appearance={APPEARANCES.LINK_SMALL}
              {...props}
            />
          ))}
        </div>
      )}
    </div>
  );
});
