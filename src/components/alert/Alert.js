import React from 'react';
import AlertBox from './AlertStyled';

const Alert = ({ msg }) => {
  return (
    <AlertBox>
      <p className="alertText">{msg}</p>
    </AlertBox>
  );
};

export default Alert;
