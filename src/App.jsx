import React from 'react'
import "./styles.css";

 const App = () => {
  return (
    <>
      <div>
        <input placeholder="Todoを入力"/>
        <button>追加</button>
      </div>
      <div>
        <p>未完了のTodo</p>
        <ul>
          <div>
            <li>あああああ</li>
            <button>完了</button>
            <button>消去</button>
          </div>
          <div>
            <li>良い良いい</li>
            <button>完了</button>
            <button>消去</button>
          </div>
        </ul>
        <p>未完了のTodo</p>
        <ul>
          <div>
            <li>ううううう</li>
            <button>戻す</button>
          </div>
        </ul>
      </div>
      
    
    </>
  )
};


export default App