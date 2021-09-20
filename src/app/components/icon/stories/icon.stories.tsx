import React from 'react';
import styled from '@emotion/styled';
import { Icon, ICON_NAME, ICON_SIZE, Text } from 'app/components';
import { withKnobs, select } from '@storybook/addon-knobs';
import { FIGMA_URLS, ColorName, COLOR } from 'app/constants';
import { IconName, IconSize } from '../icon.constants';

export { default as Presets } from './icon.presets';

export default {
  title: 'Icon',
  component: Icon,
  decorators: [withKnobs({ escapeHTML: false })],
  parameters: {
    design: {
      type: 'link',
      url: FIGMA_URLS.icons,
    },
  },
};

const StyledInteractiveStory = styled.div({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const Interactive: React.FC = () => {
  return (
    <StyledInteractiveStory>
      <Text
        color={select('Parent color', Object.keys(COLOR), 'text') as ColorName}
      >
        <Icon
          icon={
            select(
              'Icon',
              Object.keys(ICON_NAME),
              Object.keys(ICON_NAME)[0],
            ) as IconName
          }
          size={
            select(
              'Size',
              Object.keys(ICON_SIZE),
              Object.keys(ICON_SIZE)[0],
            ) as IconSize
          }
        />
      </Text>
    </StyledInteractiveStory>
  );
};
