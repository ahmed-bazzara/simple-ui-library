/* eslint-disable max-len */

import React from 'react';

const Calendar: React.FC<React.SVGAttributes<SVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24">
    <path
      clipRule="evenodd"
      d="M17.833 12.833v5h-5v-5h5zM16.167 2h2.5v1.667h1.25c.555 0 1.041.208 1.458.625.417.416.625.902.625 1.458v14.167c0 .555-.208 1.041-.625 1.458-.417.417-.903.625-1.458.625H4.083c-.555 0-1.041-.208-1.458-.625-.417-.417-.625-.903-.625-1.458V5.75c0-.556.208-1.042.625-1.458.417-.417.903-.625 1.458-.625h1.25V2h2.5v1.667h8.334V2zm3.75 17.917V8.875H4.083v11.042h15.834z"
      fillRule="evenodd"
    />
  </svg>
);

export default Calendar;
