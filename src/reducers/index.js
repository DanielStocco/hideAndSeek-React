import { combineReducers } from 'redux';

import playersReducer from './players.reducer';
import playerSelectedReducer from './playerSelected.reducer';


export default combineReducers({
  players: playersReducer,
  playerSelected: playerSelectedReducer
})