import React from "react";
import { useState } from "react";
import { InputTodo } from "./conmponents/inputTodo";
import { inCompTodo } from "./conmponents/inCompTodo";
import { compTodo } from "./conmponents/compTodo";
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
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />
      <inCompTodo
        incompTodos={incompTodos}
        onClickComp={onClickComp}
        onClickDelete={onClickDelete}
      />
      <conmTodo compTodos={compTodos} onClick={onClickBack} />
    </>
  );
};
