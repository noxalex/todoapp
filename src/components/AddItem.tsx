import React from 'react';
import Icon from './icon';

function AddItem() {
  return (
    <div className="todo-add-item">
      <input type="text" placeholder="что будем делать?" /> <button><Icon type="add" width={50} /></button>
    </div>
  )
}

export default AddItem;