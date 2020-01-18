import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { isEqual } from 'lodash';

import Checker from '../checker/Checker';
import './square.scss'

import { selectPlayer } from '../../actions/selectPlayer.action';
import { changePlayers } from '../../actions/changePlayers.action';




const Square = ({ type, position, walls, players, playerSelected, selectPlayer, changePlayers }) => {

  const [hasChecker, setHasChecker] = useState(false);
  const [checkerColor, setCheckerColor] = useState('');
  const [hostedPlayer, setHostedPlayer] = useState();

  useEffect(() => {
    // eslint-disable-next-line array-callback-return
    setHasChecker(false);
    setHostedPlayer(null);
    players.map((player) => {
      if (isEqual(player.position, position)) {
        setHasChecker(true);
        setCheckerColor(player.checkerColor);
        setHostedPlayer(player);
      }
    })
  }, [players]);

  const onSquareClick = () => {
    console.log(players);
    console.log(walls);
    console.log(position);
    if (hasChecker) {
      console.log('PLAYER SELECTED');
      selectPlayer(hostedPlayer);
      return;
    }
    if (playerSelected) {
      console.log('EL OTRO');
      const clonedPlayer = {...playerSelected};
      const statePlayers = players.filter(player => player.name !== playerSelected.name);
      clonedPlayer.position = position;
      statePlayers.push(clonedPlayer);
      selectPlayer(null);
      changePlayers(statePlayers);
    }
  };

  const drawChecker = () => {
    if(hasChecker) return <Checker checkerColor={checkerColor}/>
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

const mapStateToProps = (state) => {
  return {
    players: state.players,
    playerSelected: state.playerSelected,
  };
};

export default connect(mapStateToProps, { selectPlayer, changePlayers })(Square);