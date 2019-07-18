import React from 'react';

function Header() {
  return (
    <div className="todo-status">
      <h1>todo</h1>

      <div className="statuses">
        <div className="done">
          <span className="status-label">выполнено</span>
          <span className="status-num">5</span>
        </div>
        <div className="todo">
          <span className="status-label">ожидают</span>
          <span className="status-num">10</span>
        </div>
      </div>

    </div>
  )
}

export default Header;