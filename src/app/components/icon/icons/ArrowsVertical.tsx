/* eslint-disable max-len */

import React from 'react';

const ArrowVertical: React.FC<React.SVGAttributes<SVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24">
    <path
      clipRule="evenodd"
      d="M15.571 5.571a.72.72 0 01-.714.715H13.43v11.428h1.428a.72.72 0 01.714.715.71.71 0 01-.212.502l-2.857 2.857A.71.71 0 0112 22a.71.71 0 01-.502-.212L8.64 18.931a.71.71 0 01-.212-.502.72.72 0 01.714-.715h1.428V6.286H9.143a.72.72 0 01-.714-.715.71.71 0 01.212-.502l2.857-2.857A.71.71 0 0112 2a.71.71 0 01.502.212L15.36 5.07a.71.71 0 01.212.502z"
      fillRule="evenodd"
    />
  </svg>
);

export default ArrowVertical;
