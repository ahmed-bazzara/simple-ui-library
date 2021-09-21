import React from 'react';
import {
  Text,
  HighlightedText,
  TextVariant,
  TEXT_VARIANTS,
} from 'app/components';
import { text, boolean, select } from '@storybook/addon-knobs';
import { COLOR, ColorName } from 'app/constants';
import styled from '@emotion/styled';
import { rem } from 'utilities';
import { css } from '@emotion/css';

export default {
  title: 'Typography/HighlightedText',
  component: HighlightedText,
};

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
      <Text>
        <HighlightedText
          caseSensitive={boolean('Case sensitive', false)}
          color={
            select(
              'High-lighted text Color',
              Object.keys(COLOR),
              'text',
            ) as ColorName
          }
          className={css({
            backgroundColor: COLOR.secondary5,
            borderRadius: rem(2),
          })}
          highlightedText={text('High-lighted text', '')}
          variant={
            select(
              'High-lighted text Variant',
              Object.keys(TEXT_VARIANTS),
              'regular',
            ) as TextVariant
          }
        >
          {text('Text', 'The quick brown fox jumps over the lazy dog')}
        </HighlightedText>
      </Text>
    </StyledTextWrapper>
  </StyledInteractiveStory>
);
