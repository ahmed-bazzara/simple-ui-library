import React from 'react';
import { ContextMenuOption, KebabMenu } from 'app/components';
import { AnimatePresence } from 'framer-motion';
import { pointerHandlers } from 'utilities';
import Base from './Base';
import {
  StyledSections,
  StyledSection,
  StyledHeaderSection,
  StyledClickableSection,
  StyledIconLeftSection,
  StyledKebabMenuSection,
  StyledRow,
} from '../styles';

export interface RowCardSegmentProps {
  onClick?: () => void;
  className?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  header?: React.ReactNode;
  meta?: React.ReactNode;
  options?: ContextMenuOption[];
  children?: React.ReactNode;
  isDisabled?: boolean;
}

const Row = (props: RowCardSegmentProps): JSX.Element => {
  const {
    className,
    onClick,
    children,
    meta,
    iconLeft,
    iconRight,
    header,
    options,
    isDisabled = false,
  } = props;

  const content = (
    <>
      {iconLeft && (
        <StyledIconLeftSection isDisabled={isDisabled}>
          {iconLeft}
        </StyledIconLeftSection>
      )}
      <StyledHeaderSection>{header}</StyledHeaderSection>
      {meta && <StyledSection isDisabled={isDisabled}>{meta}</StyledSection>}
      {iconRight && (
        <StyledSection isDisabled={isDisabled}>{iconRight}</StyledSection>
      )}
    </>
  );

  const isHoverable = !!onClick && !isDisabled && !children;
  const isClickable = !!onClick && !isDisabled;

  return (
    <StyledRow className={className} hoverable={isHoverable}>
      <StyledSections layout>
        {onClick ? (
          <StyledClickableSection
            {...(isClickable && pointerHandlers<HTMLDivElement>(onClick))}
          >
            {content}
          </StyledClickableSection>
        ) : (
          content
        )}
        {options && options.length > 0 && (
          <StyledKebabMenuSection>
            <KebabMenu isDisabled={isDisabled} options={options} />
          </StyledKebabMenuSection>
        )}
      </StyledSections>
      <AnimatePresence initial={false}>
        {children && <Base>{children}</Base>}
      </AnimatePresence>
    </StyledRow>
  );
};

export default Row;
