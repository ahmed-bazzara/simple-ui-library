import React from 'react';
import { Snackbar, SnackbarProps, SNACKBAR_TYPES } from 'app/components';

const title = 'Your password will expire on XX/XX/XXXX';
const message =
  'Press Ctrl+Alt+Del and select "Change a password" to set a new password. Make sure you enter your own account name.';
const buttonProps = ['Action 1', 'Action 2', 'Action 3'].map((label) => ({
  label,
  onClick: (): void => alert(`Clicked ${label}`),
}));
const multiLine = true;

const types: { [name: string]: SnackbarProps } = Object.entries({
  'snackbar/single-line/message/': { message },
  'snackbar/single-line/message + button/': {
    message,
    buttonProps: [buttonProps[0]],
  },
  'snackbar/multi-line/message/': { multiLine, message },
  'snackbar/multi-line/title + message/': { multiLine, title, message },
  'snackbar/multi-line/title + message + buttons/': {
    multiLine,
    title,
    message,
    buttonProps,
  },
}).reduce((result, [name, props]) => {
  return {
    ...result,
    ...Object.values(SNACKBAR_TYPES).reduce((result, type) => {
      return {
        ...result,
        [name + type.toLowerCase()]: {
          ...props,
          type,
        },
      };
    }, {}),
  };
}, {});

const SnackbarPresets: React.FC = () => {
  return (
    <div className="cmn-snackbar-stories">
      {Object.entries(types).map(([name, props]) => (
        <div key={name} className="preset">
          <div className="preset-title">{name}</div>
          <Snackbar {...props} />
        </div>
      ))}
    </div>
  );
};

export default SnackbarPresets;
