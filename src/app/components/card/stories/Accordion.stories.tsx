import styled from '@emotion/styled';
import { loremIpsum } from 'lorem-ipsum';
import { rem } from 'utilities';
import { COLOR } from 'app/constants';
import { Header, Shape, Card, CardSegment } from 'app/components';
import { ExpandableCardSegmentProps } from '..';

export default {
  title: 'Card/CardSegment/Expandable',
  component: CardSegment.Expandable,
};

const StoryWrapper = styled.div({
  maxWidth: rem(722),
});

const StyledPlaceholderContent = styled.div({
  borderRadius: rem(8),
  backgroundColor: COLOR.neutralGrey10,
  lineHeight: rem(200),
  textAlign: 'center',
  color: COLOR.neutralWhite,
  margin: rem(0, 24, 24, 24),
});

const StyledMetaHeader = styled(Header)({
  marginRight: rem(8),
});

const StyledMeta = styled.div({
  display: 'flex',
  alignItems: 'center',
});

const placeholderContent = (
  <StyledPlaceholderContent>Content</StyledPlaceholderContent>
);

const mockTitle = () =>
  loremIpsum({ units: 'sentences', count: 1 }).slice(0, -1);

const shapeColor = (value: number) => {
  if (value < 40) return 'negative';
  if (value > 70) return 'primary';
  return 'caution';
};

const contextMenuOptions = Array.from(Array(4)).map((_) => {
  return {
    title: mockTitle(),
    onClick: () => {},
  };
});

const accordionOptions = Array.from(Array(5)).map((_, index) => {
  const value = Math.round(Math.random() * 100);
  const isDisabled = Math.random() > 0.6;

  return {
    name: index.toString(),
    title: mockTitle(),
    options: contextMenuOptions,
    meta: (
      <StyledMeta>
        <StyledMetaHeader
          color={isDisabled ? 'textDisabled' : 'secondary'}
          noBottomMargin
          noTopMargin
          variant="H5"
          key="label"
          lineClamp={1}
        >
          {value}/100
        </StyledMetaHeader>
        <Shape
          color={isDisabled ? 'textDisabled' : shapeColor(value)}
          key="shape"
        />
      </StyledMeta>
    ),
    children: placeholderContent,
    isDisabled,
  };
});

type Args = ExpandableCardSegmentProps;

const Template: {
  (args: Args): JSX.Element;
  args?: Args;
} = (): JSX.Element => {
  return (
    <StoryWrapper>
      <Card>
        {accordionOptions.map((props) => (
          <CardSegment.Expandable key={props.name} {...props} />
        ))}
      </Card>
    </StoryWrapper>
  );
};

export const Basic = Template.bind({});
