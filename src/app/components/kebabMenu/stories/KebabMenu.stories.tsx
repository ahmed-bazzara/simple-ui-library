import { loremIpsum } from 'lorem-ipsum';
import { KebabMenu, KebabMenuProps } from '..';

export default {
  title: 'Menus/KebabMenu',
  component: KebabMenu,
  args: {
    options: Array.from(Array(5)).map(() => ({
      title: loremIpsum({ units: 'sentences', count: 1 }),
      onClick: (): void => {},
    })),
  },
};

type Args = KebabMenuProps;

const Template: {
  (args: Args): JSX.Element;
  args?: Args;
} = (args: Args): JSX.Element => {
  return <KebabMenu {...args} />;
};

export const Interactive = Template.bind({});
