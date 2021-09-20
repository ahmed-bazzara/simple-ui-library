import React from 'react';
import { Global, css, SerializedStyles } from '@emotion/core';

const fontFace = (
  fontFamily: string,
  fontStyle: string,
  fontWeight: number,
  ...sources: [string, string][]
): SerializedStyles =>
  css({
    '@fontFace': {
      fontFamily,
      fontStyle,
      fontWeight,
      src: sources
        .map(([fileName, format]) => `url("${fileName}") format("${format}")`)
        .join(', '),
    },
  });

interface GlobalTypographyProps {
  paths: {
    normalLight: string;
    normalRegular: string;
    normalBold: string;
    normalSemiBold: string;
    italicRegular: string;
    italicBold: string;
  };
}

const GlobalTypography: React.FC<GlobalTypographyProps> = (
  props: GlobalTypographyProps,
) => {
  const { paths } = props;

  return (
    <Global
      styles={css(
        fontFace('Open Sans', 'normal', 300, [paths.normalLight, 'woff2']),
        fontFace('Open Sans', 'normal', 400, [paths.normalRegular, 'woff2']),
        fontFace('Open Sans', 'normal', 600, [paths.normalSemiBold, 'woff2']),
        fontFace('Open Sans', 'normal', 700, [paths.normalBold, 'woff2']),
        fontFace('Open Sans', 'italic', 400, [paths.italicRegular, 'woff2']),
        fontFace('Open Sans', 'italic', 700, [paths.italicBold, 'woff2']),
      )}
    />
  );
};

export default GlobalTypography;
