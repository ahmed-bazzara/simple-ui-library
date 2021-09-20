import React from 'react';
import { select, text, boolean, number } from '@storybook/addon-knobs';
import styled from '@emotion/styled';

import {
  Paragraph,
  PARAGRAPH_VARIANT,
  TYPOGRAPHY_ALIGNMENT,
  ParagraphVariant,
} from 'app/components';
import { FIGMA_URLS, COLOR, ColorName } from 'app/constants';
import { rem } from 'utilities';
import Presets from './paragraph.presets';

export default {
  title: 'Typography/Paragraph',
  component: Paragraph,
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

const StyledParagraphWrapper = styled.div({
  backgroundColor: COLOR.neutralGrey10,
  width: '80%',
});

export const Interactive: React.FC = () => (
  <StyledInteractiveStory>
    <StyledParagraphWrapper>
      <Paragraph
        align={
          TYPOGRAPHY_ALIGNMENT[
            select(
              'Alignment',
              Object.keys(TYPOGRAPHY_ALIGNMENT),
              TYPOGRAPHY_ALIGNMENT.LEFT,
            )
          ]
        }
        color={select('Color', Object.keys(COLOR), 'text') as ColorName}
        lineClamp={number('Line clamp', 0)}
        noBottomMargin={boolean('No bottom margin', false)}
        variant={
          PARAGRAPH_VARIANT[
            select(
              'Variant',
              Object.keys(PARAGRAPH_VARIANT),
              PARAGRAPH_VARIANT.NORMAL,
            ) as ParagraphVariant
          ]
        }
      >
        {text('Text', 'The quick brown fox jumps over the lazy dog')}
      </Paragraph>
    </StyledParagraphWrapper>
  </StyledInteractiveStory>
);
