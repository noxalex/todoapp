import React from 'react';

import Header from './Header';
import Search from './Search';
import AddItem from './AddItem';
import TodoList from './TodoList';
import StatusFilter from './StatusFilter';


import '../styles.css';

class App extends React.Component {
  render() {
    return (
      <>
        <div className="overlay" />
        <div className="todo-container">
          <div className="app-header">
            <Header />
            <Search />
          </div>
          <div className="todo-app">
            <AddItem />

            <TodoList />
          </div>
          <StatusFilter />
        </div>
      </>
    );
  }
}

export default App;



