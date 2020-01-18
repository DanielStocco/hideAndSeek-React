import React, { Fragment, useEffect } from 'react';
import { Header, Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';


import Square from '../square/Square.jsx';
import './board.scss'
import squares from './board-config';

const Board = (props) => {
  console.log(props);

  const drawSquare = (row, rowIndex) => {
    return row.map((square, index) => {
      const position = { row: rowIndex, column: index };
      return (
        <Fragment key={JSON.stringify(position)} >
          <Square type={square.type}
                  walls={square.walls}
                  position={position}/>
        </Fragment>
      )
    })
  };

  const drawBord = () => {
    return squares.map((row, index) => {
      return (
        <div className="square-container" key={index}>
          {drawSquare(row, index) }
        </div>
      )
    })
  };

  return (
    <Fragment>
      <Header as="h1">Board</Header>
      { drawBord() }
    </Fragment>
  )
};

const mapStateToProps = (state) => {
  return {
    players: state.players
  };
};

export default connect(mapStateToProps)(Board);