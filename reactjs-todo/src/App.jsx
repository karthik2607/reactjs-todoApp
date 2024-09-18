import { useEffect, useState } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
import AppContext from "./utils/context"

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const temp = localStorage.getItem("todos");

    setTodos(JSON.parse(temp) || []);
  }, []);

  return (
    <AppContext.Provider value={{todos, setTodos}}>
      <TodoInput />
      <TodoList />
    </AppContext.Provider>
  )
}

export default App
