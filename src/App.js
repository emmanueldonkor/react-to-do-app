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
    if (!todo.todoItems.find((item) => item.task === todo.newItemText) && todo.newItemText !== "") {
      setTodo((prevTodo) => ({
        ...prevTodo,
        todoItems: [
          ...prevTodo.todoItems,
          { task: prevTodo.newItemText, done: false },
        ],
        newItemText: "",
      }));
    }
  };

  const toggleTodo = (todo) => {
    setTodo((prevTodo) => {
      return {
        ...prevTodo,
        todoItems: prevTodo.todoItems.map((item) =>
          item.task === todo.task ? { ...item, done: !item.done } : item
        ),
      };
    });
  };
   

  const todoTableRows = () => {
    return todo.todoItems.map((item) => (
      <tr key={item.task}>
        <td>{item.task}</td>
        <td>
          <input
            type="checkbox"
            checked={item.done}
            onChange={() => toggleTodo(item)}
          />
        </td>
        <td>
          <button onClick={() => deleteTodo(item)}>
        
          </button>
        </td>
      </tr>
    ));
  };

 const deleteTodo = (todo) => {
   setTodo((prevTodo) => {
     return {
       ...prevTodo,
       todoItems: prevTodo.todoItems.filter((item) => item.task !== todo.task),
     };
   });
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
              onChange={updateNewTextValue}
              value={todo.newItemText}
            />
            <button className="btn btn-primary mt-1" onClick={createNewTodo}>
              Add
            </button>
          </div>
        </div>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Description</th>
              <th>Done</th>
              <th>Remove Todo</th>
            </tr>
          </thead>
          <tbody>{todoTableRows()}</tbody>
        </table>
      </div>
    );
  };

export default App;
