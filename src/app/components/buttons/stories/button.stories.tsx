import React from 'react';
import { Button } from 'app/components';
import { text, boolean, select } from '@storybook/addon-knobs';
import {
  THEME_MODES,
  APPEARANCE_MODES,
  THEMES,
  APPEARANCES,
} from 'app/constants';
import ButtonPresets from './button.presets';

export default {
  title: 'Buttons/Button',
  component: Button,
  parameters: {
    design: {
      type: 'link',
    },
  },
};

export const Presets = (): JSX.Element => <ButtonPresets />;

export const Interactive = (): JSX.Element => (
  <Button
    appearance={select('Appearance', APPEARANCE_MODES, APPEARANCES.REGULAR)}
    // icon={icons[text('Icon', 'download')]}
    isDisabled={boolean('disabled', false)}
    label={text('Label', 'Hello Button')}
    theme={select('Theme', THEME_MODES, THEMES.PRIMARY)}
  />
);
