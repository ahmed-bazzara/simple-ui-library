import React, { StrictMode } from 'react';

const StrictStory = (Story: React.ComponentType): JSX.Element => (
  <StrictMode>
    <Story />
  </StrictMode>
);

export default StrictStory;
