import { useContext } from 'react'
import { ToDoContext } from '../../context/ToDoContext'

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
    <div className='margin-top-sm'>
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
              className='margin-bottom-sm'
            >
              <input type="checkbox" checked={todo.isChecked} onChange={() => handleCheckbox(todo.id)} value={todo.id}/>
              <span className={todo.isChecked ? 'Completed margin-right-sm' : 'Incompleted margin-right-sm'}>
                {todo.description}
              </span>
              <span className='margin-right-sm'>{todo.createdAt}</span>
              <button onClick={() => handleDelete2(todo.id)} className='buttonMinus alert'>-</button>
            </div>
          )
        })
      )}
    </div>
  )
}
