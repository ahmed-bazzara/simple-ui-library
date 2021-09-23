import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {
  Button,
  Text,
  Card,
  CardSegment,
  MenuItemCardSegmentProps,
  Icon,
} from 'app/components';
import styled from '@emotion/styled';
import { loremIpsum } from 'lorem-ipsum';
import { rem } from 'utilities';
import { COLOR } from 'app/constants';

interface MenuOption extends MenuItemCardSegmentProps {
  key: string;
  content?: React.ReactNode;
  children?: MenuOption[];
}


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

const StyledWarningTriangle = styled(Icon)<{ isDisabled: boolean }>(
  ({ isDisabled }) => ({
    borderRadius: '50%',
    backgroundColor: isDisabled ? COLOR.textDisabled : COLOR.negative,
    color: COLOR.neutralWhite,
  }),
);

const mockTitle = () =>
  loremIpsum({ units: 'sentences', count: 1 }).slice(0, -1);
const multiLevelOptions: MenuOption[] = Array.from(Array(4)).map(
  (_, parentIndex) => {
    const isParentDisabled = Math.random() > 0.8;

    return {
      isDisabled: isParentDisabled,
      key: parentIndex.toString(),
      title: mockTitle(),
      subtitle: mockTitle(),
      meta:
        Math.random() > 0.8 ? (
          <StyledWarningTriangle icon="WARNING" isDisabled={isParentDisabled} />
        ) : undefined,
      children: Array.from(Array(7)).map((_, childIndex) => {
        const isChildDisabled = Math.random() > 0.6;

        return {
          isDisabled: isChildDisabled,
          key: `${parentIndex}-${childIndex}`,
          title: mockTitle(),
          subtitle: mockTitle(),
          content: placeholderContent,
          meta:
            Math.random() > 0.8 ? (
              <StyledWarningTriangle
                icon="WARNING"
                isDisabled={isChildDisabled}
              />
            ) : undefined,
        };
      }),
    };
  },
);

const App = () => {
  const [location, setLocation] = useState<string[]>([]);
  const selectedOption = location.reduce<MenuOption | undefined>(
    (result, optionKey) =>
      (result?.children ?? multiLevelOptions).find(
        ({ key }) => key === optionKey,
      ),
    undefined,
  );
  const currentOptions = selectedOption
    ? selectedOption.children ?? []
    : multiLevelOptions;

  const push = (key: string) => {
    setLocation((prev) => [...prev, key]);
  };

  const pop = () => {
    setLocation((prev) => prev.slice(0, -1));
  };

  return (
    <>
      <Button appearance="circular" label="App" />
      <Text>Test</Text>
      <Card>
        {selectedOption && (
          <CardSegment.BackButton
            key={`${selectedOption.key}-back-button`}
            title={selectedOption.title}
            subtitle={selectedOption.subtitle}
            onClick={pop}
          />
        )}
        {selectedOption?.content && (
          <CardSegment.Base key={`${selectedOption.key}-content`}>
            {selectedOption.content}
          </CardSegment.Base>
        )}
        {currentOptions.map(({ key, content, children, ...restProps }) => (
          <CardSegment.MenuItem
            onClick={() => push(key)}
            key={key}
            {...restProps}
          />
        ))}
      </Card>
    </>
  );
};

export default App;

if (process.env.NODE_ENV === 'development') {
  console.log('here');

  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root'),
  );
}
