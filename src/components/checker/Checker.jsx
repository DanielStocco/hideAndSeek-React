import React from 'react';
import './checker.scss';

const Checker = ({ checkerColor }) => {
  return(
    <div className="checker" style={{backgroundColor: checkerColor}} />
  )
};

export default Checker;