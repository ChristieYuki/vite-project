import { ChangeEvent, useState, useContext } from 'react'
import { Todo } from '../../App'
import { ToDoContext } from '../../context/ToDoContext'

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
        style={{ borderRadius: '4px', padding: '3px', marginTop: '-25px', marginRight: '10px', backgroundColor: 'transparent' }}
      />
      <button onClick={handleAddTodo} onSubmit={handleAddTodo} style={{ paddingTop: '2px', paddingRight: '7px', paddingLeft:'7px', paddingBottom:'4px' }}>
        +
      </button>
    </>
  )
}
