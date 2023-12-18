
import './App.css';

import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Gestion des Tâches</h1>
        <AddTask />
        <ListTask />
      </div>
    </Provider>
  );
}

export default App;