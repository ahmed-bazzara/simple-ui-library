/* eslint-disable no-redeclare */

import { useContext, useEffect } from 'react';
import { ReactEventHandlers, ReactEventHandler } from './EventPortal';
import EventPortalContext from './EventPortalContext';

function useEventPortal(
  handlers: Partial<ReactEventHandlers>,
  condition?: boolean
): void;

function useEventPortal<Name extends keyof ReactEventHandlers>(
  name: Name,
  handler: ReactEventHandlers[Name],
  condition?: boolean
): void;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function useEventPortal(arg1: any, arg2?: any, arg3?: any): void {
  const { addEventListener, removeEventListener } =
    useContext(EventPortalContext);

  useEffect(() => {
    if (typeof arg1 === 'string') {
      if (arg3 ?? true) {
        addEventListener(arg1, arg2);

        return (): void => removeEventListener(arg1, arg2);
      }
    } else if (arg2 ?? true) {
      for (const [name, handler] of Object.entries<ReactEventHandler>(arg1))
        addEventListener(name, handler);

      return (): void =>
        Object.entries<ReactEventHandler>(arg1).forEach(([name, handler]) =>
          removeEventListener(name, handler),
        );
    }

    return (): void =>
      Object.entries<ReactEventHandler>(arg1).forEach(([name, handler]) =>
        removeEventListener(name, handler),
      );
  }, [addEventListener, removeEventListener, arg1, arg2, arg3]);
}

export default useEventPortal;
