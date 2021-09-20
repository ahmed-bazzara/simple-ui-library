import './styles/snackbar.scss';
import React from 'react';
import { Snackbar, SNACKBAR_TYPES } from 'app/components';
import {
  withKnobs,
  text,
  select,
  array,
  boolean,
} from '@storybook/addon-knobs';
import { FIGMA_URLS } from 'app/constants';
import Presets from './snackbar.presets';

export default {
  title: 'Popups/Snackbar',
  component: Snackbar,
  decorators: [withKnobs({ escapeHTML: false })],
  parameters: {
    design: {
      type: 'link',
      url: FIGMA_URLS.snackbar,
    },
  },
};

export const Interactive: React.FC = () => (
  <div className="cmn-snackbar-stories interactive">
    <Snackbar
      buttonProps={array('Buttons', ['Action 1', 'Action 2']).map((label) => ({
        label,
        onClick: (): void => alert(`Clicked ${label}`),
      }))}
      message={text(
        'Message',
        'Press Ctrl+Alt+Del and select "Change a password" to set a new password. Make sure you enter your own account name.',
      )}
      multiLine={boolean('Multi-line', true)}
      title={text('Title', 'Your password will expire on XX/XX/XXXX')}
      type={select('Type', SNACKBAR_TYPES, SNACKBAR_TYPES.DEFAULT)}
    />
  </div>
);

export { Presets };
