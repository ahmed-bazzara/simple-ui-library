import React from 'react';
import { Global } from '@emotion/core';

const FullscreenStory = (Story: React.ComponentType): JSX.Element => (
  <>
    <Global
      styles={{
        '#root': {
          height: '100%',
          width: '100%',
        },
      }}
    />
    <Story />
  </>
);

export default FullscreenStory;
