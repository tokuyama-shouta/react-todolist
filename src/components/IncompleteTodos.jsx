import React from 'react';

const IncompleteTodos = (props) => {
  const {todos,onClickComplete,onClickDelete} = props
  return(
    <div className="incomplete-area">
      <p className="title">未完了のTodo</p>
      <ul >
        {todos.map((todo,index) => {
          return(
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>消去</button>
            </div>
          );
        })}
      </ul>
    </div>
  )
}

export default IncompleteTodos