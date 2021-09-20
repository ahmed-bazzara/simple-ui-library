import React from 'react';
import { Notifications } from 'app/components';

const NotificationsStory = (Story: React.ComponentType): JSX.Element => (
  <Notifications>
    <Story />
  </Notifications>
);

export default NotificationsStory;
