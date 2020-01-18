export const changePlayers = players => {
  return {
    type: 'PLAYERS_CHANGED',
    payload: players
  }
};