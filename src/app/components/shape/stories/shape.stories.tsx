import { text, boolean, select } from '@storybook/addon-knobs';
import { Shape, ICON_NAME } from 'app/components';
import { FIGMA_URLS, ColorName, COLOR } from 'app/constants';
import { IconName } from 'app/components/icon';
import ShapePresets from './shape.presets';

export default {
  title: 'Indicators/Shape',
  component: Shape,
  parameters: {
    design: {
      type: 'link',
      url: FIGMA_URLS.shape,
    },
  },
};

export const Presets = (): JSX.Element => <ShapePresets />;

export const Interactive = (): JSX.Element => {
  const hasIcon = boolean('Has Icon?', false);

  return (
    <div className="shape-preset-page">
      <div className="item">
        <Shape
          circular={boolean('Circular', true)}
          className="shape-preset"
          color={select('Color', Object.keys(COLOR), 'text') as ColorName}
          icon={
            hasIcon
              ? (select(
                'Icon',
                Object.keys(ICON_NAME),
                Object.keys(ICON_NAME)[0],
              ) as IconName)
              : undefined
          }
        />
        <span className="label">{text('Label', 'Label')}</span>
      </div>
    </div>
  );
};
