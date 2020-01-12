import React, { Fragment } from 'react';
import { Header, Grid } from 'semantic-ui-react';

import Square from '../square/Square.jsx';
import './board.scss'
import squares from './board-config';

const Board = (props) => {

  const drawSquare = (row, rowIndex) => {
    return row.map((square, index) => {
      const position = { row: rowIndex, column: index };
      return (
        <Fragment key={JSON.stringify(position)}>
          <Grid.Column className="square-container">
            <Square type={square.type}
                    walls={square.walls}
                    position={position}/>
          </Grid.Column>
        </Fragment>
      )
    })
  };

  const drawBord = () => {
    return squares.map((row, index) => {
      return (
        <Grid key={index}>
          {drawSquare(row, index) }
        </Grid>
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

export default Board;