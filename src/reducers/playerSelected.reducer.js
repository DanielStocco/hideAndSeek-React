const playerSelectedReducer = (playerSelected = null, actions) => {
  if (actions.type === 'PLAYER_SELECTED') return actions.payload;
  return playerSelected
};

export default playerSelectedReducer;