const defaultPlayers = [
  {  name: 'Cazador', isHunter: true, checkerColor: 'black', position: {row: 11, column: 4} },
  {  name: 'Jugador 1', isHunter: false, checkerColor: 'orange', position: {row: 10, column: 3} },
  {  name: 'Jugador 2', isHunter: false, checkerColor: 'red', position: {row: 10, column: 4} },
  {  name: 'Jugador 3', isHunter: false, checkerColor: 'yellow', position: {row: 10, column: 5} },
  {  name: 'Jugador 4', isHunter: false, checkerColor: 'blue', position: {row: 10, column: 6} },
];

const playersReducer = (players = defaultPlayers, actions ) => {
  console.log(actions);
  if (actions.type === 'PLAYERS_CHANGED') return actions.payload;
  return players;
};

export default playersReducer;