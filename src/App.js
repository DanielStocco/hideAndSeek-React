import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Board from './components/board/Board';
import reducers from './reducers';


function App() {
  return (
    <Provider store={createStore(reducers)}>
      <div className="ui container">
        <Board/>
      </div>
    </Provider>
  );
}

export default App;
