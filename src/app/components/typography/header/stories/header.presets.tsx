import React from 'react';
import { LoremIpsum } from 'lorem-ipsum';
import styled from '@emotion/styled';

import { Header, HEADER_VARIANT, HeaderProps } from 'app/components';
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

const types: { [name: string]: HeaderProps } = {
  'H1 (weight: 600 / size: 40px / line height: 64px / margin: 24px)': {
    variant: HEADER_VARIANT.H1,
    children: loremIpsum.generateSentences(1),
  },
  'H2 (weight: 600 / size: 32px / line height: 48px / margin: 20px)': {
    variant: HEADER_VARIANT.H2,
    children: loremIpsum.generateSentences(1),
  },
  'H3 (weight: 600 / size: 24px / line height: 40px / margin: 16px)': {
    variant: HEADER_VARIANT.H3,
    children: loremIpsum.generateSentences(1),
  },
  'H4 (weight: 600 / size: 20px / line height: 32px / margin: 12px)': {
    variant: HEADER_VARIANT.H4,
    children: loremIpsum.generateSentences(1),
  },
  'H5 (weight: 600 / size: 16px / line height: 28px / margin: 8px)': {
    variant: HEADER_VARIANT.H5,
    children: loremIpsum.generateSentences(1),
  },
  'H6 (weight: 600 / size: 13px / line height: 16px / margin: 4px)': {
    variant: HEADER_VARIANT.H6,
    children: loremIpsum.generateSentences(1),
  },
};

const StyledPresets = styled.div({ padding: rem(12, 0) });

const StyledPreset = styled.div({ padding: rem(12, 0) });

const StyledNameHeaderWrapper = styled.div({ padding: rem(0, 24) });

const StyledHeaderWrapper = styled.div({
  backgroundColor: COLOR.neutralGrey10,
  overflow: 'auto',
  padding: rem(12, 24),
});

const TypographyPresets: React.FC = () => (
  <StyledPresets>
    {Object.entries(types).map(([name, props]) => (
      <StyledPreset key={name}>
        <StyledNameHeaderWrapper>
          <Header variant={HEADER_VARIANT.H6}>{name}</Header>
        </StyledNameHeaderWrapper>
        <StyledHeaderWrapper>
          <Header {...props} />
        </StyledHeaderWrapper>
      </StyledPreset>
    ))}
  </StyledPresets>
);

export default TypographyPresets;
