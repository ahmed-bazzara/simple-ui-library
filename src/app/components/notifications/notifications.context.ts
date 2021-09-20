import React from 'react';
import { NotificationOptions } from './Notifications';

interface NotificationsContextType {
  notify: (notification: NotificationOptions) => void;
}

const NotificationsContext = React.createContext<NotificationsContextType>({
  notify: () => {},
});

export default NotificationsContext;
