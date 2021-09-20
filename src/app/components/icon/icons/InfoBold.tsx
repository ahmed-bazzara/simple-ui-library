/* eslint-disable max-len */

import React from 'react';

const InfoBold: React.FC<React.SVGAttributes<SVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 28 28">
    <path
      className="base"
      d="m14.03447,27.42625c-7.1825,0 -13,-6.03779 -13,-13.41732c0,-7.37952 5.85,-13.41732 13,-13.41732c7.1825,0 13,6.0378 13,13.41732c0,7.37953 -5.8175,13.41732 -13,13.41732z"
    />
    <rect fill="#fff" height="14" rx="1" width="3" x="12.53447" y="10" />
    <circle cx="14.03447" cy="5" fill="#fff" r="1.5" />
  </svg>
);

export default InfoBold;
