import React from 'react';

const TableSort: React.FC<React.SVGAttributes<SVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24">
    <path d="M6 8.414l-2.293 2.293a1 1 0 01-1.414-1.415l4-4a1 1 0 011.414 0l4 4a1.001 1.001 0 01-1.414 1.415L8 8.414v8.662c0 .51-.447.924-1 .924-.552 0-1-.414-1-.924V8.414zm10 7.171V6.923c0-.51.448-.923 1-.923s1 .413 1 .923v8.662l2.293-2.293a1 1 0 011.414 1.415l-4 4a1 1 0 01-1.414 0l-4-4a1.002 1.002 0 011.414-1.415L16 15.585z" />
  </svg>
);

export default TableSort;
