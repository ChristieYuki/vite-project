import { useContext } from 'react'
import { TodoContext } from '../../context/TodoContext'
import { CustomCheckbox } from '../CustomCheckbox '
import { CustomTooltip } from '../CustomTooltip'
import { TrashIcon } from '@radix-ui/react-icons'

export function List() {

  const {todos, setTodos} = useContext(TodoContext)
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
        <h3>Let's do somethig today</h3> // checar se o array é vazio
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
              <CustomCheckbox checked={todo.isChecked} onChange={() => handleCheckbox(todo.id)} value={todo.id} />
              <span className={todo.isChecked ? 'Completed' : 'Incompleted'}>
                {todo.description}
              </span>
              <span>{todo.createdAt}</span>
              <CustomTooltip childrenButton={<TrashIcon/>} childrenContent="Delete" tooltipClick={() => handleDelete2(todo.id)} side="right"></CustomTooltip>
            </div>
          )
        })
      )}
    </>
  )
}
