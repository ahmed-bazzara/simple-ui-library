import React, { memo } from 'react';
import { Text, TextProps } from 'app/components';
import { generateId } from 'utilities';

export interface HighlightedTextProps extends Omit<TextProps, 'children'> {
  className?: string;
  caseSensitive?: boolean;
  highlightedText?: string;
  children: string;
}

const HighlightedText: React.FC<HighlightedTextProps> = (props): JSX.Element => {
  const { children, caseSensitive, highlightedText, ...textProps } = props;

  if (!highlightedText) {
    return <>{children}</>;
  }

  const pattern = new RegExp(
    `(${highlightedText.trim()})`,
    caseSensitive ? undefined : 'i',
  );
  const slices = children
    .trim()
    .split(pattern)
    .filter((slice) => !!slice);

  return (
      <>
        {slices.map((slice) =>
          slice.match(pattern) ? (
            <Text key={generateId()} {...textProps}>
              {slice}
            </Text>
          ) : (
            slice
          ),
        )}
      </>
  );
};

export default memo(HighlightedText);
