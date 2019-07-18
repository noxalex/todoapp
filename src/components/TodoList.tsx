import React from 'react';
import Icon from './icon';

function TodoList() {
  return (
    <ul className="todo-list">
      <li className="todo-list-item">
        <label><input type="checkbox" /> Заправить постель </label>
        <div className="controls">
          <button className="btn-important"><Icon type="important" width={35} /></button>
          <button className="btn-trash"><Icon type="trash" width={35} /></button>
        </div>
      </li>
      <li className="todo-list-item">
        <label> <input type="checkbox" /> Обнять любимую </label>
        <div className="controls">
          <button className="btn-important"><Icon type="important" width={35} /></button>
          <button className="btn-trash"><Icon type="trash" width={35} /></button>
        </div>
      </li>
      <li className="todo-list-item">
        <label> <input type="checkbox" /> Купить молока </label>
        <div className="controls">
          <button className="btn-important"><Icon type="important" width={35} /></button>
          <button className="btn-trash"><Icon type="trash" width={35} /></button>
        </div>
      </li>
    </ul>
  )
}

export default TodoList;