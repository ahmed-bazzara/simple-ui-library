import React from 'react';
import styled from '@emotion/styled';
import { select, text } from '@storybook/addon-knobs';

import { Text, TEXT_VARIANTS, TextVariant, TEXT_SIZES } from 'app/components';
import { FIGMA_URLS, COLOR, ColorName } from 'app/constants';
import { rem } from 'utilities';
import Presets from './text.presets';

export default {
  title: 'Typography/Text',
  component: Text,
  parameters: {
    design: {
      type: 'link',
      url: FIGMA_URLS.typography,
    },
  },
};

export { Presets };

const StyledInteractiveStory = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  padding: rem(24),
});

const StyledTextWrapper = styled.div({
  backgroundColor: COLOR.neutralGrey10,
  width: '80%',
});

export const Interactive: React.FC = () => (
  <StyledInteractiveStory>
    <StyledTextWrapper>
      <Text
        color={select('Color', Object.keys(COLOR), 'text') as ColorName}
        variant={
          select(
            'Variant',
            Object.keys(TEXT_VARIANTS),
            'regular',
          ) as TextVariant
        }
        size={
          select(
            'Size',
            Object.keys(TEXT_SIZES),
            'normal',
          ) as keyof typeof TEXT_SIZES
        }
      >
        {text('Text', 'The quick brown fox jumps over the lazy dog')}
      </Text>
    </StyledTextWrapper>
  </StyledInteractiveStory>
);
