export const selectPlayer = (player) => {
  return {
    type: 'PLAYER_SELECTED',
    payload: player,
  }
};