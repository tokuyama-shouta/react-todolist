import React,{useState} from 'react'
import "./styles.css";

 const App = () => {
   const [todoText, setTodoText] = useState('');
   const [incompleteTodos, setIncompleteTodos] = useState(['あああああ','良い良いい']);
   const [completeTodos, setCompleteTodos] = useState(['ううううう']);

   const onChangeTodoText = (event) => setTodoText(event.target.value)

   const onClickAdd = () => {
     if(todoText === "") return;
      const newTodos = [...incompleteTodos, todoText]
      setIncompleteTodos(newTodos);
      setTodoText("");
   };

  return (
    <>
      <div className="input-area">
        <input placeholder="Todoを入力" value={todoText} onChange={onChangeTodoText}/>
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTodo</p>
        <ul >
          {incompleteTodos.map((todo) => {
            return(
              <div key={todo} className="list-row">
              <li>{todo}</li>
              <button>完了</button>
              <button>消去</button>
          </div>
            );
          })}
        </ul>
        
      </div>
      <div className="complete-area"> 
        <p className="title">未完了のTodo</p>
          <ul>
            {completeTodos.map((todo) => {
              return(
                <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>戻す</button>
            </div>
              );
            })}
          </ul>
      </div>
      
    
    </>
  )
};


export default App