import { useContext } from 'react'
import { ToDoContext } from '../../context/ToDoContext'
import { CustomCheckbox } from '../CustomCheckbox';
import { StyledH3 } from './styles';
import { CustomTable } from '../CustomTable/insdex';

export function List() {

  const { todos, setTodos } = useContext(ToDoContext)
  const handleDelete2 = (id: string) => {
    const newTodo = todos.filter((todo) => {
      return todo.id !== id
    })
    setTodos(newTodo)
    console.log('check')
  }
  function handleCheckbox(id: string) {
    const newTodo = todos.map(todo => {
      if (todo.id === id) {
        return (
          { ...todo, isChecked: !todo.isChecked }
        )
      }
      {
        return (todo)
      }
    })
    setTodos(newTodo)
  }

  return (
    <>
      {todos.length === 0 ? (
        <StyledH3>Vamos fazer algo hoje?</StyledH3> // checar se o array é vazio
      ) : (<CustomTable />)}
    </>
  )
}
