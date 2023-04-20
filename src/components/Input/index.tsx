import { ChangeEvent, useState } from 'react'
import { Todo } from '../../App'

interface InputProps {
  todos: Todo[]
  setTodos: (todos: Todo[]) => void
}
export function Input({ todos, setTodos }: InputProps) {
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
    setTodos([...todos, newTodo])
    setTodoInput('')
  }

  return (
    <>
      <input
        alt="onChange"
        type="text"
        onChange={handleTodoInput}
        onBlur={handleAddTodo}
      />
      <button onSubmit={handleAddTodo} style={{ marginTop: '10px' }}>
        +
      </button>
    </>
  )
}
