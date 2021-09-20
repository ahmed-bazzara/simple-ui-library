import React from 'react';
import { Header, ICON_NAME, Icon, Paragraph } from 'app/components';
import Row from './Row';

export interface BackButtonCardSegmentProps {
  title: string;
  subtitle?: string;
  onClick?: () => void;
  className?: string;
}

const BackButton = (props: BackButtonCardSegmentProps): JSX.Element => {
  const { className, title, subtitle, onClick } = props;

  return (
    <Row
      iconLeft={<Icon icon={ICON_NAME.ARROW_LEFT} />}
      header={
        <>
          <Header
            color="secondary"
            noBottomMargin
            noTopMargin
            variant="H3"
            key="title"
            lineClamp={1}
          >
            {title}
          </Header>
          {subtitle && (
            <Paragraph
              color="secondary"
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
      onClick={onClick}
      className={className}
    />
  );
};

BackButton.displayName = 'CardSegment.BackButton';

export default BackButton;
