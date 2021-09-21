import { useState } from 'react';
import { ContextMenu, ICON_NAME, Icon } from 'app/components';
import { loremIpsum } from 'lorem-ipsum';
import { ContextMenuProps } from '../../ContextMenu';

export default {
  title: 'Menus/Context Menu',
  component: ContextMenu,
  args: {
    options: Array.from(Array(5)).map(() =>
      loremIpsum({ units: 'sentences', count: 1 }),
    ),
    isOpen: true,
    showIcons: false,
  },
  argTypes: {
    onClose: {
      table: {
        disable: true,
      },
    },
    onOptionClick: {
      table: {
        disable: true,
      },
    },
    isOpen: {
      control: {
        type: 'boolean',
      },
    },
    showIcons: {
      control: {
        type: 'boolean',
      },
    },
    options: {
      control: {
        type: 'array',
      },
    },
  },
};

type Args = Omit<ContextMenuProps, 'options'> & {
  showIcons?: boolean;
  onOptionClick: (title: string) => void;
  options: string[];
};

const Template: {
  (args: Args): JSX.Element;
  args?: Args;
} = (args: Args): JSX.Element => {
  const {
    options,
    onClose,
    isOpen,
    showIcons,
    onOptionClick,
    highlightedText,
  } = args;
  const [selectedOption, setSelectedOption] = useState<number>();

  return (
    <ContextMenu
      highlightedText={highlightedText}
      isOpen={isOpen}
      onClose={onClose}
      options={options.map((title, index) => ({
        title,
        icon: showIcons ? <Icon icon={ICON_NAME.CAKE} /> : undefined,
        onClick: (): void => {
          setSelectedOption(index);
          onOptionClick(title);
        },
        isSelected: index === selectedOption,
      }))}
    />
  );
};

export const Interactive = Template.bind({});
