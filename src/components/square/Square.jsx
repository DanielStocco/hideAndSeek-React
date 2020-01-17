import React, { useState } from 'react';

import Checker from '../checker/Checker';

import './square.scss'

const Square = ({ type, position, walls }) => {

  const [hasChecker, setHasChecker] = useState(false);

  const onSquareClick = () => {
    setHasChecker(!hasChecker);
    console.log(walls);
    console.log(position);
  };

  const drawChecker = () => {
    if(hasChecker) return <Checker/>
  };

  const buildSquareStyle = () => {
    if (!type) return;
    let className = `square ${type}`;
    if (!walls) return className;
    className = walls.top ? `${className} wall-top` : className;
    className = walls.left ? `${className} wall-left` : className;
    className = walls.bottom ? `${className} wall-bottom` : className;
    className = walls.right ? `${className} wall-right` : className;
    return className
  };
  return (
    <div onClick={onSquareClick} className={buildSquareStyle()}>
      { drawChecker() }
    </div>
  );
};

export default Square;