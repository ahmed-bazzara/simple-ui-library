import React from 'react';
import { motion } from 'framer-motion';

export interface BaseCardSegmentProps {
  className?: string;
  children?: React.ReactNode;
}

const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const Base = (props: BaseCardSegmentProps): JSX.Element => {
  const { className, children } = props;

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      layout
    >
      {children}
    </motion.div>
  );
};

Base.displayName = 'CardSegment.Base';

export default Base;
