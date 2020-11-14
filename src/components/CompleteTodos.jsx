import React from 'react'

const CompleteTodos = (props) => {
  const {todos,onClickBack} = props
  return(
    <div className="complete-area"> 
      <p className="title">完了のTodo</p>
      <ul>
        {todos.map((todo,index) => {
          return(
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>

  )
}

export default CompleteTodos