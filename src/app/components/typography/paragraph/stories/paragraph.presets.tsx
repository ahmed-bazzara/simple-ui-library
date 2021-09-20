import React from 'react';
import { LoremIpsum } from 'lorem-ipsum';
import styled from '@emotion/styled';

import {
  Header,
  HEADER_VARIANT,
  Paragraph,
  PARAGRAPH_VARIANT,
  ParagraphProps,
} from 'app/components';
import { COLOR } from 'app/constants';
import { rem } from 'utilities';

const loremIpsum = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

const types: { [name: string]: ParagraphProps } = {
  'Large (weight: 400 / size: 20px / line height: 32px / bottom margin: 12px)': {
    variant: PARAGRAPH_VARIANT.LARGE,
    children: loremIpsum.generateParagraphs(2),
  },
  'Normal (weight: 400 / size: 16px / line height: 24px / bottom margin: 8px)': {
    variant: PARAGRAPH_VARIANT.NORMAL,
    children: loremIpsum.generateParagraphs(2),
  },
  'Small (weight: 400 / size: 12px / line height: 16px / bottom margin: 8px)': {
    variant: PARAGRAPH_VARIANT.SMALL,
    children: loremIpsum.generateParagraphs(2),
  },
};

const StyledPresets = styled.div({ padding: rem(12, 0) });
const StyledPreset = styled.div({ padding: rem(12, 0) });
const StyledHeaderWrapper = styled.div({ padding: rem(0, 24) });
const StyledParagraphWrapper = styled.div({
  backgroundColor: COLOR.neutralGrey10,
  overflow: 'auto',
  padding: rem(12, 24),
});

const TypographyPresets: React.FC = () => (
  <StyledPresets>
    {Object.entries(types).map(([name, props]) => (
      <StyledPreset key={name}>
        <StyledHeaderWrapper>
          <Header variant={HEADER_VARIANT.H6}>{name}</Header>
        </StyledHeaderWrapper>
        <StyledParagraphWrapper>
          <Paragraph {...props} />
        </StyledParagraphWrapper>
      </StyledPreset>
    ))}
  </StyledPresets>
);

export default TypographyPresets;
