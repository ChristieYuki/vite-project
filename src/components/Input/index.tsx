import { ChangeEvent, useState, useContext } from 'react'
import { Todo } from '../../App'
import { ToDoContext } from '../../context/ToDoContext'
import { PlusIcon } from '@radix-ui/react-icons'
import CustomTooltip from '../CustomTooltip'
import CustomInput from '../CustomInput'

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
      return
    }else{
      setTodoInput('')
      alert('Escreva algo, arrombado!')
      return true
    }
  }

  return (
    <>
      <CustomInput 
        onChange={handleTodoInput} 
        value={todoInput} 
        placeholder='Entre com o TODO'
      />
      <CustomTooltip 
        onClick={handleAddTodo} 
        childrenButton={<PlusIcon />} 
        childrenContent='Adicionar o TODO!' 
        onSubmit={handleAddTodo}
      />
      <div style={{marginBottom: '7px'}}></div>
    </>
  )
}