import { useContext } from 'react'
import { ToDoContext } from '../../context/ToDoContext'
import { CustomCheckbox } from '../CustomCheckbox';
import { StyledButton, StyledH3, StyledSpan } from './styles';

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
      ) : (
        todos.map((todo) => {
          return (
            <div
              key={todo.id}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              {/* <input type="checkbox" checked={todo.isChecked} onChange={() => handleCheckbox(todo.id)} value={todo.id} /> */}
              <CustomCheckbox checked={todo.isChecked} onChange={() => handleCheckbox(todo.id)} value={todo.id} />
              <StyledSpan className={todo.isChecked ? 'Completed' : 'Incompleted'}>
                {todo.description}
              </StyledSpan>
              <StyledSpan>{todo.createdAt}</StyledSpan>
              <StyledButton onClick={() => handleDelete2(todo.id)}>-</StyledButton>
            </div>
          )
        })
      )}
    </>
  )
}
