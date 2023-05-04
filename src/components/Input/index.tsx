import { ChangeEvent, useState, useContext } from 'react'
import { Todo } from '../../App'
import { ToDoContext } from '../../context/toDoContext'

export function Input() {
  const {todos, setTodos} = useContext(ToDoContext)

  const [todoInput, setTodoInput] = useState('')

  function handleTodoInput(event: ChangeEvent<HTMLInputElement>) {
    setTodoInput(event.target.value)
    console.log(event.target.value)
  }
  
  function handleAddTodo() {
    const newTodo: Todo = {
      description: todoInput,
      id: Math.random().toString(),
      createdAt: new Date().toDateString(),
      isChecked: false,
    }
    if(todoInput.trim() !== ""){
      setTodos([...todos, newTodo])
      setTodoInput('')
    }else{
      setTodoInput('')
      alert('Escreva algo, arrombado!')
      return true
    }
  }

  return (
    <>
      <input
        alt="onChange"
        type="text"
        onChange={handleTodoInput}
        value={todoInput}
      />
      <button onClick={handleAddTodo} onSubmit={handleAddTodo} style={{ marginTop: '10px' }}>
        +
      </button>
    </>
  )
}
