import React from 'react';
import './styles/button-panel.scss';

const ButtonPanel: React.FC = ({ children }) => {
  return <div className="cmn-button-panel">{children}</div>;
};

export default ButtonPanel;
