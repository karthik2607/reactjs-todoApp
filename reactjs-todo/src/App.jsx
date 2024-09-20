import { useEffect, useState } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
  

  const[todos,setTodos]=useState([]) 
  const[todoValue,setTodoValue]=useState('')

  function handleAddTodos(newTodo){
    if(newTodo===''){
      alert("Todo is Empty!!")
    }
    else{
    const newTodoList=[...todos,newTodo]
    setTodos(newTodoList)
    }


  }

  function handleDelete(index){
    const updatedTodos=todos.filter((todo,todoIndex)=>{
      return todoIndex!==index
    })
    setTodos(updatedTodos)
  }

  function handleEdit(index){
    const valuetobeupdated=todos[index]
    setTodoValue(valuetobeupdated)
    handleDelete(index)
  }


  
  return (
    <>
    
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos}/>
      <TodoList handleEdit={handleEdit} todos={todos} handleDelete={handleDelete}/>
      </>
    
  )
}

export default App
