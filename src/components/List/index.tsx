import { useContext } from 'react'
import { ToDoContext } from '../../context/toDoContext'
import { CardList, Button, StyledCheckbox } from "./styles"
import { Card } from "@mui/material"

export function List() {

  const {todos, setTodos} = useContext(ToDoContext)
  const handleDelete2 = (id: string) => {
    const newTodo = todos.filter((todo) => {
      return todo.id !== id
    })
    setTodos(newTodo)
    console.log('check')
  }
  function handleCheckbox(id: string){
    const newTodo = todos.map(todo => {
      if (todo.id === id){
        return(
          {...todo, isChecked: !todo.isChecked}
        )
    }
    {
      return(todo)
    }
    })
    setTodos(newTodo)
  }

  return (
    <>
      {todos.length === 0 ? (
        <h3>Vamos fazer algo hoje?</h3> // checar se o array é vazio
      ) : (
        todos.map((todo) => {
          return (
            <Card key={todo.id}>
              <StyledCheckbox checked={todo.isChecked} onChange={() => handleCheckbox(todo.id)} value={todo.id}/>
              <span className={todo.isChecked ? 'Completed' : 'Incompleted'}>
                {todo.description}
              </span>
              <span>{todo.createdAt}</span>
              <Button onClick={() => handleDelete2(todo.id)}>-</Button>
            </Card>
          )
        })
      )}
    </>
  )
}
