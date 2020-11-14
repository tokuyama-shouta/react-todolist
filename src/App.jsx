import React from 'react'
import "./styles.css";

 const App = () => {
  return (
    <>
      <div className="input-area">
        <input placeholder="Todoを入力"/>
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTodo</p>
        <ul >
          <div className="list-row">
            <li>あああああ</li>
            <button>完了</button>
            <button>消去</button>
          </div>
          <div className="list-row">
            <li>良い良いい</li>
            <button>完了</button>
            <button>消去</button>
          </div>
        </ul>
        
      </div>
      <div className="complete-area"> 
        <p className="title">未完了のTodo</p>
          <ul>
            <div className="list-row">
              <li>ううううう</li>
              <button>戻す</button>
            </div>
          </ul>
      </div>
      
    
    </>
  )
};


export default App