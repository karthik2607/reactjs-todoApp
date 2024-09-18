import React, { useContext } from "react";
import TodoCard from "./TodoCard";
import AppContext from "../utils/context";

export default function TodoList() {
  const { todos } = useContext(AppContext);

  return (
    <ul className="main">
      {todos.map((todo, todoIndex) => {
        return (
          <TodoCard key={todoIndex}>
            <p>{todo}</p>
          </TodoCard>
        );
      })}
    </ul>
  );
}
