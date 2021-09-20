/* eslint-disable max-len */

import React from 'react';

const CirclePlus: React.FC<React.SVGAttributes<SVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24">
    <path
      clipRule="evenodd"
      d="M12 2c2.768 0 5.127.975 7.076 2.924C21.026 6.874 22 9.232 22 12s-.975 5.127-2.924 7.076C17.126 21.026 14.768 22 12 22s-5.126-.975-7.076-2.924C2.974 17.126 2 14.768 2 12s.975-5.126 2.924-7.076C6.874 2.974 9.232 2 12 2zm5.714 9.286h-5v-5h-1.428v5h-5v1.428h5v5h1.428v-5h5v-1.428z"
      fillRule="evenodd"
    />
  </svg>
);

export default CirclePlus;
