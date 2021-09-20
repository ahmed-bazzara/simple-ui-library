import React, { memo } from 'react';
import { rem } from 'utilities';
import styled from '@emotion/styled';
import { ICON_SIZE, IconName, IconSize, sizes } from './icon.constants';
import * as icons from './icons';

export interface IconProps {
  icon: IconName;
  size?: IconSize;
  className?: string;
}

const style = ({ size }: { size: number }) => ({
  display: 'inline-block',
  fill: 'currentColor',
  width: rem(size),
  height: rem(size),
});

const styledIcons = Object.entries(icons).reduce<
Record<
string,
(props: { size: number; className?: string }) => JSX.Element | null
>
>(
  (acc, [name, icon]) => ({
    ...acc,
    [name]: styled(icon)(style),
  }),
  {},
  );

export const Icon: React.FC<IconProps> = (props) => {
  const { size = ICON_SIZE.NORMAL, className, icon } = props;
  const SVG = styledIcons[icon];

  return <SVG className={className} size={sizes[size]} />;
};

export default memo(Icon);
