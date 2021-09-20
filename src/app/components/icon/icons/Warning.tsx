import React from 'react';

const Warning: React.FC<React.SVGAttributes<SVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24">
    <path
      clipRule="evenodd"
      d="M4 18.609L12 4l8 14.609H4zm8.857-2.248v-1.686h-1.714v1.686h1.714zm0-2.81v-3.37h-1.714v3.37h1.714z"
      fillRule="evenodd"
    />
  </svg>
);

export default Warning;
