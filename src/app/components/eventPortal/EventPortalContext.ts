import { createContext } from 'react';
import { ReactEventHandler } from './EventPortal';

interface EventPortalContextValue {
  addEventListener: (name: string, handler: ReactEventHandler) => void;
  removeEventListener: (name: string, handler: ReactEventHandler) => void;
}

const EventPortalContext = createContext<EventPortalContextValue>({
  addEventListener: () => {},
  removeEventListener: () => {},
});

export default EventPortalContext;
