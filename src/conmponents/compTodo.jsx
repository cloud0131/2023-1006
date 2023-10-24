import React from "react";
export const conmTodo = ( props ) => {
    const { compTodos,onClickBack } = props;
    return(
        <div className="complete-area">
        <p className="title">完了のTodo</p>
        <ul>
          {compTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    );
};

