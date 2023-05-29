import { StyledInput, StyledButton } from './styles';
import { ChangeEvent, useState, useContext } from 'react'
import { Todo } from '../../App'
import { ToDoContext } from '../../context/ToDoContext'

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
      <StyledInput type="text"
        required
        alt="onChange"
        onChange={handleTodoInput}
        value={todoInput}
      />
      <StyledButton style={{ marginTop: 10 }} onClick={handleAddTodo} onSubmit={handleAddTodo} style={{ marginTop: '10px' }}>
        +
      </StyledButton>
    </>
  )
}
