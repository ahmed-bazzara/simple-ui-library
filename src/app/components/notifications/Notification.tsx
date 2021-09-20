import React, { memo, useState, useEffect, useCallback } from 'react';
import { Snackbar } from 'app/components';
import classNames from 'classnames';
import { NotificationOptions } from './Notifications';

interface NotificationProps {
  onExit: () => void;
  defaultTimeout: number;
  options: NotificationOptions;
}

const Notification: React.FC<NotificationProps> = (props) => {
  const { options, onExit, defaultTimeout } = props;
  const {
    type,
    multiLine,
    buttonProps = [],
    title,
    message,
    timeout = defaultTimeout,
    dismissLabel,
  } = options;
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (!isExiting) {
      const interval = setInterval(() => setIsExiting(true), timeout);

      return (): void => clearInterval(interval);
    }

    const exitInterval = setInterval(onExit, 120);

    return (): void => clearInterval(exitInterval);
  }, [onExit, timeout, isExiting]);

  const exit = useCallback(() => setIsExiting(true), [setIsExiting]);

  const buttonPropsWithDismiss = dismissLabel
    ? [...buttonProps, { onClick: exit, label: dismissLabel }]
    : buttonProps;

  const classnames = classNames('cmn-notification', { exiting: isExiting });

  return (
    <Snackbar
      buttonProps={buttonPropsWithDismiss}
      className={classnames}
      message={message}
      multiLine={multiLine}
      title={title}
      type={type}
    />
  );
};

export default memo(Notification);
