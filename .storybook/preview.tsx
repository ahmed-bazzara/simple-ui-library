// import {
//   StrictStory,
//   NotificationsStory,
//   EventPortalStory,
//   FullscreenStory,
// } from '../src/app/storybook/decorators';
import { COLOR } from '../src/app/constants';
import 'sanitize.css';

export const parameters = {
  backgrounds: {
    default: 'neutralGrey5',
    values: Object.entries(COLOR).map(([name, value]) => ({ name, value })),
  },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
};

// export const decorators = [
//   FullscreenStory,
//   StrictStory,
//   NotificationsStory,
//   EventPortalStory,
// ];
