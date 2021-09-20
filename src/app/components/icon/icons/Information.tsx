/* eslint-disable max-len */

import React from 'react';

const Information: React.FC<React.SVGAttributes<SVGElement>> = (props) => (
  <svg
    {...props}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.1875 9.375C12.7053 9.375 13.125 8.9553 13.125 8.4375C13.125 7.9197 12.7053 7.5 12.1875 7.5C11.6697 7.5 11.25 7.9197 11.25 8.4375C11.25 8.9553 11.6697 9.375 12.1875 9.375ZM13.125 11.25C13.125 10.7322 12.7053 10.3125 12.1875 10.3125C11.6697 10.3125 11.25 10.7322 11.25 11.25V15.75C11.25 16.2678 11.6697 16.6875 12.1875 16.6875C12.7053 16.6875 13.125 16.2678 13.125 15.75V11.25Z"
      fill="white"
    />
  </svg>
);

export default Information;
