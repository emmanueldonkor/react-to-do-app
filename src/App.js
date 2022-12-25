import { useState } from "react";
import "./App.css";

const App = () => {
  const [todo, setTodo] = useState({
    userName: "Emmanuel",
    todoItems: [
      { task: "Buy Flowers", done: false },
      { task: "Get Grocery", done: false },
      { task: "Get Jacket", done: true },
      { task: "Get Shirt", done: false },
    ],
    newItemText: "",
  });

  const changeDataState = () => {
    setTodo((prevTodo) => ({
      ...prevTodo,
      userName: prevTodo.userName === "Emmanuel" ? "Adom" : "Donkor",
    }));
  };

  const updateNewTextValue = (event) => {
    setTodo((prevTodo) => ({ ...prevTodo, newItemText: event.target.value }));
  };
  const createNewTodo = () => {
    if (!todo.todoItems.find((item) => item.action === todo.newItemText)) {
      setTodo((prevTodo) => ({
        ...prevTodo,
        todoItems: [
          ...prevTodo.todoItems,
          { action: prevTodo.newItemText, done: false },
        ],
        newItemText: "",
      }));
    }
  };
  return (
    <div className="App">
      <h4 className="bg-primary text-white text-center p-2">
        {todo.userName}'s To Do List (
        {todo.todoItems.filter((t) => !t.done).length} items to do)
      </h4>
      <button className="btn btn-primary m-2" onClick={changeDataState}>
        Change
      </button>
      <div className="container-fuild">
        <div className="my-1">
          <input
            className="form-control"
            value={todo.newItemText}
            onChange={updateNewTextValue}
          />
          <button className="btn btn-primary mt-1" onClick={createNewTodo}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
