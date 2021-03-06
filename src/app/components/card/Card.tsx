import React from 'react';
import { Header } from 'app/components';
import { AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import { StyledCard } from './styles';
import { CardSegment } from './cardSegment';

export interface CardProps {
  className?: string;
  title?: string;
  meta?: React.ReactNode;
  children?: React.ReactNode;
}

export const Card = (props: CardProps): JSX.Element => {
  const { className, title, meta, children } = props;

  return (
    <AnimateSharedLayout type="crossfade">
      <AnimatePresence exitBeforeEnter initial={false}>
        <StyledCard className={className} layout>
          {(title || meta) && (
            <CardSegment.Row
              header={
                <Header
                  color="secondary"
                  noBottomMargin
                  noTopMargin
                  variant="H5"
                  key="title"
                  lineClamp={1}
                >
                  {title}
                </Header>
              }
              meta={meta}
            />
          )}
          {children}
        </StyledCard>
      </AnimatePresence>
    </AnimateSharedLayout>
  );
};
