import React from 'react';
import styled from '@emotion/styled';
import { loremIpsum } from 'lorem-ipsum';
import { rem } from 'utilities';
import { COLOR } from 'app/constants';
import { Shape, Header, Card, CardProps } from 'app/components';

export default {
  title: 'Card/Card',
  component: Card,
};

const StoryWrapper = styled.div({
  maxWidth: rem(722),
});

const StyledMetaHeader = styled(Header)({
  marginRight: rem(8),
});

const StyledMeta = styled.div({
  display: 'flex',
  alignItems: 'center',
});

const StyledPlaceholderContent = styled.div({
  borderRadius: rem(8),
  backgroundColor: COLOR.neutralGrey10,
  lineHeight: rem(200),
  textAlign: 'center',
  color: COLOR.neutralWhite,
  margin: rem(24),
});

const placeholderContent = (
  <StyledPlaceholderContent>Content</StyledPlaceholderContent>
);

const mockTitle = () =>
  loremIpsum({ units: 'sentences', count: 1 }).slice(0, -1);

type Args = CardProps;

const Template: {
  (args: Args): JSX.Element;
  args?: Args;
} = (): JSX.Element => {
  return (
    <StoryWrapper>
      <Card
        title={mockTitle()}
        meta={
          <StyledMeta>
            <StyledMetaHeader
              color="secondary"
              noBottomMargin
              noTopMargin
              variant="H5"
              key="label"
              lineClamp={1}
            >
              52
            </StyledMetaHeader>
            <Shape color="caution80" />
          </StyledMeta>
        }
      >
        {placeholderContent}
      </Card>
    </StoryWrapper>
  );
};

export const Basic = Template.bind({});
