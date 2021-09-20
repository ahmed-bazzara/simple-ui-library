import React from 'react';

const Reminder: React.FC<React.SVGAttributes<SVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24">
    <path
      d="M16.647 7.163H7.353v1.178h9.294V7.163zM7.353 9.677h9.294v1.178H7.353V9.677zM16.647 12.19H7.353v1.178h9.294V12.19z"
      fill="#445B66"
    />
    <path
      clipRule="evenodd"
      d="M19.25 3H4.75A2.76 2.76 0 002 5.765v8.922a2.76 2.76 0 002.74 2.764V21.5l5.787-4.049h8.723A2.76 2.76 0 0022 14.687V5.765A2.76 2.76 0 0019.25 3zm1.578 11.687c0 .874-.708 1.586-1.578 1.586h-9.09l-4.248 2.972v-2.972H4.75c-.87 0-1.578-.712-1.578-1.586V5.765c0-.875.708-1.587 1.578-1.587h14.5c.87 0 1.578.712 1.578 1.587v8.922z"
      fillRule="evenodd"
    />
  </svg>
);

export default Reminder;
