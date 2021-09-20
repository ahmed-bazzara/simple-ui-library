import React from 'react';
import NotificationsContext from './notifications.context';
import { NotificationOptions } from './Notifications';

export default (): ((notification: NotificationOptions) => void) => {
  return React.useContext(NotificationsContext).notify;
};
