import React, { useContext, useRef } from "react";
import AppContext from "../utils/context";

export default function TodoInput() {
  const todoValue = useRef("");

  const { setTodos } = useContext(AppContext);

  return (
    <header>
      <input
        onChange={(e) => {
          todoValue.current = e.target.value;
        }}
        placeholder="Enter the todo....."
      />
      <button onClick={(e) => {
        setTodos(todos => {
            const temp = [...todos];

            temp.push(todoValue.current);

            localStorage.setItem("todos", JSON.stringify(temp));

            return temp;
        })

      }}>Add</button>
    </header>
  );
}
