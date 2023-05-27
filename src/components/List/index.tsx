import { useContext } from 'react';
import { ToDoContext } from '../../context/ToDoContext';
import { TrashIcon } from '@radix-ui/react-icons';
import { CustomCheckbox } from '../CustomCheckbox';
import CustomTooltip from '../CustomTooltip';
import { violet } from '@radix-ui/colors';

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
        <h3 style={{color: `${violet.violet9}`}}>Vamos fazer algo hoje?</h3> // checar se o array é vazio
      ) : (
        todos.map((todo) => {
          return (
            <div
              key={todo.id}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '5px'
              }}
            >
              <CustomCheckbox checked={todo.isChecked} onChange={() => handleCheckbox(todo.id)} value={todo.id} />
              <span className={todo.isChecked ? 'Completed' : 'Incompleted'} style={{marginLeft: '8px', color: `${violet.violet11}`}}>
                {todo.description}
              </span>
              <span style={{marginLeft: '8px', color: `${violet.violet11}`}}>{todo.createdAt}</span>
              <CustomTooltip 
                onClick={() => handleDelete2(todo.id)} 
                childrenButton={<TrashIcon />} 
                childrenContent='Remover este TODO!'
                side='right'
              />
            </div>
          )
        })
      )}
    </>
  )
}