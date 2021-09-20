import React from 'react';

const Notes: React.FC<React.SVGAttributes<SVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24">
    <path
      clipRule="evenodd"
      d="M20.76 2.286a1.007 1.007 0 00-1.407 0L18.31 3.314H4a2 2 0 00-2 2v14.398a2 2 0 002 2h14.661a2 2 0 002-2V5.642L21.71 4.61a.972.972 0 000-1.387l-.95-.937zM8.68 14.074l1.073 1.058-1.475.397.402-1.455zm10.67-8.067l-1.415-1.393.472-.465 1.414 1.394-.472.464zm-.472.465l-8.483 8.363-1.414-1.393 8.483-8.364 1.414 1.394zm2.36-2.327l-.946.933-1.414-1.394.946-.933a.332.332 0 01.464 0l.95.937a.32.32 0 010 .457z"
      fillRule="evenodd"
    />
  </svg>
);

export default Notes;
