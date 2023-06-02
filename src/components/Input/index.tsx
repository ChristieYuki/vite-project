import { ChangeEvent, useState, useContext } from 'react'
import { Todo } from '../../App'
import { TodoContext } from '../../context/TodoContext'
import { CustomTooltip } from '../CustomTooltip'
import { PlusIcon } from '@radix-ui/react-icons'

export function Input() {
  const {todos, setTodos} = useContext(TodoContext)

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
        onChange={handleTodoInput}
        value={todoInput}
        placeholder='Enter the TO DO here'
       />
      <CustomTooltip childrenButton={<PlusIcon/>} childrenContent="Add to list" tooltipClick={handleAddTodo} tooltipSubmit={handleAddTodo} side="right"></CustomTooltip>
    </>
  )
}
