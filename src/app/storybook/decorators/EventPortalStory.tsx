import React from 'react';
import styled from '@emotion/styled';
import { EventPortal } from 'app/components';

const EventTarget = styled.div({
  width: '100%',
  height: '100%',
});

const EventPortalComponent: React.FC = ({ children }) => (
  <EventPortal>
    {(handlers) => <EventTarget {...handlers}>{children}</EventTarget>}
  </EventPortal>
);

const EventPortalStory = (Story: React.ComponentType): JSX.Element => (
  <EventPortalComponent>
    <Story />
  </EventPortalComponent>
);

export default EventPortalStory;
