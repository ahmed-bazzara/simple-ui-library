import React from 'react';

const MenuAlt: React.FC<React.SVGAttributes<SVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24">
    <path
      clipRule="evenodd"
      d="M7 8.46a.77.77 0 01.77-.77h8.46a.77.77 0 010 1.54H7.77A.77.77 0 017 8.46zM7 12a.77.77 0 01.77-.77h8.46a.77.77 0 010 1.54H7.77A.77.77 0 017 12zm.77 2.77a.77.77 0 000 1.54h8.46a.77.77 0 100-1.54H7.77z"
      fillRule="evenodd"
    />
  </svg>
);

export default MenuAlt;
