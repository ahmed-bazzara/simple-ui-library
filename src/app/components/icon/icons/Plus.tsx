import React from 'react';

const Plus: React.FC<React.SVGAttributes<SVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24">
    <path d="M11 19a1 1 0 102 0v-6h6a1 1 0 100-2h-6V5a1 1 0 10-2 0v6H5a1 1 0 100 2h6v6z" />
  </svg>
);

export default Plus;
