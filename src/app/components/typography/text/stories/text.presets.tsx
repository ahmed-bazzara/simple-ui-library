import React from 'react';
import { Paragraph, Header, HEADER_VARIANT, Text } from 'app/components';
import { LoremIpsum } from 'lorem-ipsum';
import styled from '@emotion/styled';
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

const types: { [name: string]: React.ReactNode } = {
  Bold: (
    <Text variant="bold">
      This sentence is bold.
      {loremIpsum.generateParagraphs(1)}
    </Text>
  ),
  Italic: (
    <Text variant="italic">
      This sentence is italic.
      {loremIpsum.generateParagraphs(1)}
    </Text>
  ),
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
    {Object.entries(types).map(([name, children]) => (
      <StyledPreset key={name}>
        <StyledHeaderWrapper>
          <Header variant={HEADER_VARIANT.H6}>{name}</Header>
        </StyledHeaderWrapper>
        <StyledParagraphWrapper>
          <Paragraph>
            {loremIpsum.generateParagraphs(1)}
            {children}
            {loremIpsum.generateParagraphs(1)}
          </Paragraph>
        </StyledParagraphWrapper>
      </StyledPreset>
    ))}
  </StyledPresets>
);

export default TypographyPresets;
