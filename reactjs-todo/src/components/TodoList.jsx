import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList() {
  let todos=[
    'Go to the Gym',
    'Work on the project',
    'Get a placement'
  ]
  return (
    <ul className='main'>
    {todos.map((todo,todoIndex)=>{
      return(
      <TodoCard key={todoIndex}>
        <p>{todo}</p>

      </TodoCard>
      )
      

})}
    </ul>
  )

}
