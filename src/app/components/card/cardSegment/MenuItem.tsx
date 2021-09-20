import React from 'react';
import { Header, Paragraph, Icon, ICON_NAME } from 'app/components';
import Row from './Row';

export interface MenuItemCardSegmentProps {
  title: string;
  subtitle?: string;
  onClick?: () => void;
  className?: string;
  meta?: React.ReactNode;
  isDisabled?: boolean;
}

const MenuItem = (props: MenuItemCardSegmentProps): JSX.Element => {
  const {
    className,
    onClick,
    title,
    subtitle,
    meta,
    isDisabled = false,
  } = props;

  return (
    <Row
      className={className}
      onClick={onClick}
      header={
        <>
          <Header
            color={isDisabled ? 'textDisabled' : 'secondary'}
            noBottomMargin
            noTopMargin
            variant="H4"
            key="title"
            lineClamp={1}
          >
            {title}
          </Header>
          {subtitle && (
            <Paragraph
              color={isDisabled ? 'textDisabled' : 'secondary'}
              noBottomMargin
              variant="SMALL"
              key="subtitle"
              lineClamp={1}
            >
              {subtitle}
            </Paragraph>
          )}
        </>
      }
      meta={meta}
      iconRight={<Icon icon={ICON_NAME.ARROW_RIGHT} key="arrow-right-icon" />}
      isDisabled={isDisabled}
    />
  );
};

MenuItem.displayName = 'CardSegment.MenuItem';

export default MenuItem;
