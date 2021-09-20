import React from 'react';

const ReminderAlt: React.FC<React.SVGAttributes<SVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24">
    <path
      d="M7.269 9.187c0-.484.392-.877.876-.877h7.354a.876.876 0 110 1.753H8.145a.876.876 0 01-.876-.876zM8.145 11.635a.876.876 0 000 1.752h4.894a.876.876 0 100-1.752H8.145z"
      fill="#445B66"
    />
    <path
      clipRule="evenodd"
      d="M5.929 4a3 3 0 00-3 3v8.131a3 3 0 002.977 3H5.76V21l4.553-2.869h7.829a3 3 0 003-3V7a3 3 0 00-3-3H5.929zm-.411 1.626a1 1 0 00-1 1v8.783a1 1 0 001 1h1.72v1.745l2.77-1.745h8.545a1 1 0 001-1V6.626a1 1 0 00-1-1H5.518z"
      fillRule="evenodd"
    />
  </svg>
);

export default ReminderAlt;
