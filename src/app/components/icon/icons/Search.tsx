import React from 'react';

const Search: React.FC<React.SVGAttributes<SVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24">
    <path
      clipRule="evenodd"
      d="M18.672 20L20 18.672l-4.219-4.258.156-.273c.626-.99.938-2.058.938-3.204 0-1.64-.58-3.04-1.738-4.199C13.977 5.58 12.578 5 10.937 5c-1.64 0-3.04.58-4.199 1.738C5.58 7.898 5 9.297 5 10.938c0 1.64.58 3.046 1.738 4.218 1.16 1.172 2.559 1.758 4.2 1.758 1.12 0 2.2-.326 3.242-.977l.273-.195L18.672 20zm-7.735-4.375c-1.302 0-2.408-.456-3.32-1.367-.911-.912-1.367-2.018-1.367-3.32 0-1.303.456-2.41 1.367-3.32.912-.912 2.018-1.368 3.32-1.368 1.303 0 2.41.456 3.32 1.367.938.938 1.407 2.044 1.407 3.32 0 1.277-.469 2.383-1.406 3.32-.912.912-2.018 1.368-3.32 1.368z"
      fillRule="evenodd"
    />
  </svg>
);

export default Search;
