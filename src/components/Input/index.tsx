import { ChangeEvent, useState, useContext } from 'react'
import { Todo } from '../../App'
import { ToDoContext } from '../../context/ToDoContext'
import { Button, TextField } from '@mui/material'
import { CustomTextField } from './styles'

export function Input() {
  const { todos, setTodos } = useContext(ToDoContext)

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
    if (todoInput.trim() !== "") {
      setTodos([...todos, newTodo])
      setTodoInput('')
    } else {
      setTodoInput('')
      alert('Escreva algo, arrombado!')
      return true
    }
  }

  return (
    <>
      <CustomTextField
        type="text"
        onChange={handleTodoInput}
        value={todoInput}
        variant='filled'
        size='small'
        sx={{ color: 'red' }}
      />
      <button onClick={handleAddTodo} onSubmit={handleAddTodo} style={{ marginTop: '10px' }}>
        +
      </button>
    </>
  )
}
