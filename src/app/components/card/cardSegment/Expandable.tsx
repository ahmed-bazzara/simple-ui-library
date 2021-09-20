import React, { useState, useEffect } from 'react';
import { Paragraph, ICON_NAME, ContextMenuOption } from 'app/components';
import { StyledExpandedStatusIndicator } from '../styles';
import Row from './Row';

export interface ExpandableCardSegmentProps {
  title: string;
  onClick?: () => void;
  className?: string;
  expanded?: boolean;
  meta?: React.ReactNode;
  options?: ContextMenuOption[];
  children?: React.ReactNode;
  isDisabled?: boolean;
}

const Expandable = (props: ExpandableCardSegmentProps): JSX.Element => {
  const {
    title,
    expanded: externalExpanded = false,
    onClick,
    children,
    meta,
    options,
    isDisabled = false,
  } = props;
  const [internalExpanded, setInternalExpanded] = useState(externalExpanded);

  const handleClick = () => {
    setInternalExpanded((prev) => !prev);
    onClick?.();
  };

  useEffect(() => {
    setInternalExpanded(externalExpanded);
  }, [setInternalExpanded, externalExpanded]);

  return (
    <Row
      iconLeft={
        <StyledExpandedStatusIndicator
          expanded={internalExpanded}
          icon={ICON_NAME.ARROW_RIGHT}
        />
      }
      onClick={handleClick}
      header={
        <Paragraph
          color={isDisabled ? 'textDisabled' : 'secondary'}
          noBottomMargin
          variant="NORMAL"
          lineClamp={1}
        >
          {title}
        </Paragraph>
      }
      isDisabled={isDisabled}
      meta={meta}
      options={options}
    >
      {internalExpanded && children}
    </Row>
  );
};

Expandable.displayName = 'CardSegment.Expandable';

export default Expandable;
