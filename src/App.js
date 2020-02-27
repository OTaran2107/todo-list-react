import React from 'react'
import './App.css';
import {Provider} from 'react-redux'
import store from './store'
import ToDoList from './components/ToDoList/ToDoListWrapper';

function App() {
  return (
    <Provider store={store}>
      <ToDoList />
    </Provider>
  );
}

export default App;
