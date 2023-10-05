import React from "react";
import { useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompTodos, setIncomTodos] = useState([]);
  const [compTodos, setCompTodos] = useState([]);
  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompTodos, todoText];
    setIncomTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompTodos];
    newTodos.splice(index, 1);
    setIncomTodos(newTodos);
  };

  const onClickComp = (index) => {
    const newIncompTodos = [...incompTodos];
    newIncompTodos.splice(index, 1);
    const newCompTodos = [...compTodos, incompTodos[index]];
    setIncomTodos(newIncompTodos);
    setCompTodos(newCompTodos);
  };

  const onClickBack = (index) => {
    const newCompTodos = [...compTodos];
    newCompTodos.splice(index, 1);

    const newIncompTodos = [...incompTodos, compTodos[index]];
    setCompTodos(newCompTodos);
    setIncomTodos(newIncompTodos);
  };

  return (
    <>
      <div className="input-area">
        <input
          placeholder="Todoを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>

      <div className="incomplete-area">
        <p className="title">未完了のTodo</p>
        <ul>
          {incompTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickComp(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>

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
    </>
  );
};
