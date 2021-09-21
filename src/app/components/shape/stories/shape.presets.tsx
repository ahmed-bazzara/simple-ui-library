import React from 'react';
import { Shape, ICON_NAME, ShapeProps } from 'app/components';

const Presets: React.FC = (): JSX.Element => {
  const shapeProps: (ShapeProps & { label: string })[] = [
    {
      label: 'With Primary color',
      color: 'primary',
    },
    {
      label: 'With Warning color',
      color: 'caution',
    },
    {
      label: 'With Negative color',
      color: 'negative',
    },
    {
      label: 'With Static color',
      color: 'neutralGrey10',
    },
    { label: 'With Icon', icon: ICON_NAME.INFO_BOLD },
    {
      label: 'With Icon and Negative',
      color: 'negative',
      icon: ICON_NAME.INFO_BOLD,
    },
  ];

  return (
    <div className="shape-preset-page">
      {shapeProps.map(({ label, ...props }, index) => (
        <div key={index} className="item">
          <Shape {...props} className="shape-preset" />
          <span className="label">{label}</span>
        </div>
      ))}
    </div>
  );
};

export default Presets;
