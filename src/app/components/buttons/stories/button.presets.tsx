import React from 'react';
import { Button } from 'app/components';
import {
  THEMES,
  THEME_MODES,
  Theme,
  AppearanceType,
  APPEARANCES,
} from 'app/constants';
import { ButtonProps } from 'app/components/buttons/Button';
import './styles/buttons.scss';

const Buttons = (): JSX.Element => {
  const getRegularButtonProps = (): ButtonProps[] => [
    {},
    { label: 'Test label' },
    {
      label:
        'This is a very long text that is not supposed to fit in the button displayed on this page',
    },
    { label: 'Disabled button', isDisabled: true },
    { label: 'Secondary', theme: THEMES.SECONDARY },
    { label: 'Negative', theme: THEMES.NEGATIVE },
    { label: 'Link', appearance: APPEARANCES.LINK },
    {
      label: 'Link with icon',
      // icon: icons.download,
      appearance: APPEARANCES.LINK,
    },
    { label: 'Link', appearance: APPEARANCES.LINK, isDisabled: true },
    {
      label: 'Link with icon',
      // icon: icons.download,
      appearance: APPEARANCES.LINK,
      isDisabled: true,
    },
  ];

  const getIconButtonPropsWithAppearance = (
    appearance: AppearanceType,
  ): ButtonProps[] =>
    [{ appearance }, { appearance }].reduce(
      (acc: ButtonProps[], buttonProps) => [
        ...acc,
        ...THEME_MODES.map((theme: Theme) => ({ ...buttonProps, theme })),
      ],
      [],
    );

  return (
    <div className="buttons-page">
      <div className="buttons">
        {getRegularButtonProps().map((props, index) => (
          <Button key={index} {...props} />
        ))}
      </div>
      <div className="shape-buttons">
        {getIconButtonPropsWithAppearance(APPEARANCES.CIRCULAR).map(
          (props, index) => (
            <Button key={index} {...props} />
          ),
        )}
      </div>
      <div className="shape-buttons">
        {getIconButtonPropsWithAppearance(APPEARANCES.SQUARE).map(
          (props, index) => (
            <Button key={index} {...props} />
          ),
        )}
      </div>
    </div>
  );
};

export default Buttons;
