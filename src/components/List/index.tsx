import { useContext } from 'react';
import { ToDoContext } from '../../context/toDoContext';
import { TrashIcon } from '@radix-ui/react-icons';
import * as Checkbox from '@radix-ui/react-checkbox'
import { StyledIndicator, StyledRoot } from './../CustomCheckbox/styles';
import { CustomCheckbox } from '../CustomCheckbox';
import TooltipDemo from '../CustomTooltip';

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
        <h3>Vamos fazer algo hoje?</h3> // checar se o array é vazio
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
              <input type="checkbox" checked={todo.isChecked} onChange={() => handleCheckbox(todo.id)} value={todo.id} />
              <CustomCheckbox checked={todo.isChecked} onChange={() => handleCheckbox(todo.id)} value={todo.id} />
              <span className={todo.isChecked ? 'Completed' : 'Incompleted'}>
                {todo.description}
              </span>
              <span>{todo.createdAt}</span>
              <TooltipDemo></TooltipDemo>
              <button onClick={() => handleDelete2(todo.id)}>-</button>
            </div>
          )
        })
      )}
    </>
  )
}