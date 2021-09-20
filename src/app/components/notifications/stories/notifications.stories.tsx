import React from 'react';
import {
  Notifications,
  SNACKBAR_TYPES,
  useNotifications,
} from 'app/components';
import {
  number,
  button,
  array,
  text,
  boolean,
  select,
  withKnobs,
} from '@storybook/addon-knobs';

export default {
  title: 'Popups/Notifications',
  component: Notifications,
  decorators: [withKnobs({ escapeHTML: false })],
  parameters: {
    design: {
      type: 'link',
    },
  },
};

export const Interactive: React.FC = () => {
  const notify = useNotifications();
  const notification = {
    dismissLabel: text('Dismiss label', 'Dismiss'),
    title: text('Title', 'Your password will expire on XX/XX/XXXX'),
    type: select('Type', SNACKBAR_TYPES, SNACKBAR_TYPES.DEFAULT),
    message: text(
      'Message',
      'Press Ctrl+Alt+Del and select "Change a password" to set a new password. Make sure you enter your own account name.',
    ),
    timeout: number('Timeout', 5000),
    buttonProps: array('Other buttons', ['Action 1', 'Action 2']).map(
      (label) => ({
        label,
        onClick: (): void => alert(`Clicked ${label}`),
      }),
    ),
    multiLine: boolean('Multi-line', true),
  };

  button('Create notification', () => notify(notification));

  return null;
};
