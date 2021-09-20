import React from 'react';
import { select, text, boolean, number } from '@storybook/addon-knobs';
import styled from '@emotion/styled';

import { Header, HEADER_VARIANT, TYPOGRAPHY_ALIGNMENT } from 'app/components';
import { FIGMA_URLS, COLOR, ColorName } from 'app/constants';
import { rem } from 'utilities';
import Presets from './header.presets';
import { HeaderVariant } from '../header.constants';

export default {
  title: 'Typography/Header',
  component: Header,
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

const StyledHeaderWrapper = styled.div({
  backgroundColor: COLOR.neutralGrey10,
  width: '80%',
});

export const Interactive: React.FC = () => (
  <StyledInteractiveStory>
    <StyledHeaderWrapper>
      <Header
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
        noTopMargin={boolean('No top margin', false)}
        variant={
          HEADER_VARIANT[
            select(
              'Variant',
              Object.keys(HEADER_VARIANT),
              HEADER_VARIANT.H1,
            ) as HeaderVariant
          ]
        }
      >
        {text('Text', 'The quick brown fox jumps over the lazy dog')}
      </Header>
    </StyledHeaderWrapper>
  </StyledInteractiveStory>
);
