/* eslint-disable max-len */

import React from 'react';

const Checkmark: React.FC<React.SVGAttributes<SVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24">
    <path d="M9.879 16.364a1 1 0 001.414 0l7.071-7.071a1 1 0 00-1.414-1.414l-6.364 6.364-3.536-3.536a1 1 0 00-1.414 1.414l4.243 4.243z" />
  </svg>
);

export default Checkmark;
