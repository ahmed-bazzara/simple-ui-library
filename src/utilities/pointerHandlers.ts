const MOTION_DEVIATION_THRESHOLD = 30;

const hasTouchSupport = 'ontouchstart' in window;

export const pointerHandlers = <Element>(
  callback: (
    event: React.MouseEvent<Element> | React.TouchEvent<Element>
  ) => void,
  options?: { allowSwipe?: boolean },
): {
    onClick: (event: React.MouseEvent<Element>) => void;
    onTouchStart: (event: React.TouchEvent<Element>) => void;
    onTouchMove: (event: React.TouchEvent<Element>) => void;
    onTouchEnd: (event: React.TouchEvent<Element>) => void;
  } => {
  let startPos: { x: number; y: number } | null = null;
  let pos: { x: number; y: number } | null = null;

  return {
    onClick: (event) => {
      if (!hasTouchSupport) {
        callback(event);
      }
    },
    onTouchStart: (event) => {
      const { clientX: x, clientY: y } = event.touches[0];

      startPos = { x, y };
    },
    onTouchMove: (event) => {
      const { clientX: x, clientY: y } = event.touches[0];

      pos = { x, y };
    },
    onTouchEnd: (event) => {
      if (
        options?.allowSwipe ||
        !pos ||
        Math.hypot(pos.x - startPos!.x, pos.y - startPos!.y) <
          MOTION_DEVIATION_THRESHOLD
      ) {
        callback(event);
      }

      pos = null;
      startPos = null;
    },
  };
};
