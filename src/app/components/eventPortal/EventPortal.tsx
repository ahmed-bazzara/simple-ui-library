import React, { useState, useMemo, useRef, DOMAttributes } from 'react';
import EventPortalContext from './EventPortalContext';

export type ReactEventHandlers = Required<
Omit<
DOMAttributes<HTMLElement>,
'css' | 'dangerouslySetInnerHTML' | 'children'
>
>;
export type ReactEventHandler = ReactEventHandlers[keyof ReactEventHandlers];

export interface EventPortalProps {
  children: (handlers: Partial<ReactEventHandlers>) => JSX.Element;
}

const EventPortal: React.FC<EventPortalProps> = (props) => {
  const { children } = props;
  const [listeners, setListeners] = useState<
  Record<string, ReactEventHandler[]>
  >({});

  const addEventListener = useRef(
    (name: string, listener: ReactEventHandler): void =>
      setListeners((prevListeners) => ({
        ...prevListeners,
        [name]: [...(prevListeners[name] ?? []), listener],
      })),
  ).current;

  const removeEventListener = useRef(
    (name: string, listener: ReactEventHandler): void =>
      setListeners((prevListeners) => ({
        ...prevListeners,
        [name]: (prevListeners[name] ?? []).filter(
          (current) => current !== listener,
        ),
      })),
  ).current;

  const handlers = useMemo(
    () =>
      Object.entries(listeners)
        .filter(([, listenersForEvent]) => listenersForEvent.length !== 0)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .reduce<Record<any, (event: any) => void>>(
        (handlers, [name, listenersForEvent]) => {
          handlers[name] = (event): void =>
            listenersForEvent.forEach((listener) => listener(event));

          return handlers;
        },
      {},
      ),
    [listeners],
  );

  return (
    <EventPortalContext.Provider
      value={{ addEventListener, removeEventListener }}
    >
      {children(handlers)}
    </EventPortalContext.Provider>
  );
};

export default EventPortal;
