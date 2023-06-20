import { useContext } from 'react'
import { ToDoContext } from '../../context/ToDoContext'
import { CustomCheckbox } from '../CustomCheckbox';
import { StyledButton, StyledTable, StyledTh, StyledTd } from './styles';

export function CustomTable() {

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
    <StyledTable>
      <thead>
        <StyledTh>Item</StyledTh>
        <StyledTh>Data</StyledTh>
      </thead>
      <tbody>
        <tr>
          <td>
            {todos.map((todo) => {
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
                  <StyledTd>
                    <CustomCheckbox checked={todo.isChecked} onChange={() => handleCheckbox(todo.id)} value={todo.id} />
                  </StyledTd>
                  <StyledTd className={todo.isChecked ? 'Completed' : 'Incompleted'}>
                    {todo.description}
                  </StyledTd>
                  <StyledTd>{todo.createdAt}</StyledTd>
                  <StyledTd>
                    <StyledButton onClick={() => handleDelete2(todo.id)}>-</StyledButton>
                  </StyledTd>

                </div>
              )
            })}
          </td>
        </tr>
      </tbody>
    </StyledTable>
  )


}