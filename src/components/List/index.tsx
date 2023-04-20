import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react'
import { Todo } from '../../App'

interface ListProps {
  todos: Todo[]
  setTodos: Dispatch<SetStateAction<Todo[]>>
}
export function List({ todos, setTodos }: ListProps) {
  const handleDelete2 = (id: string) => {
    const newTodo = todos.filter((todo) => {
      return todo.id !== id
    })
    setTodos(newTodo)
    console.log('check')
  }
  function handleCheckBox(id: string) {
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
              <input type="checkbox" checked={todo.isChecked} onChange={() => handleCheckBox(todo.id)} value={todo.id} />
              <span className={todo.isChecked ? 'Completed' : 'Incompleted'}>
                {todo.description}
              </span>
              <span>{todo.createdAt}</span>
              <button onClick={() => handleDelete2(todo.id)}>-</button>
            </div>
          )
        })
      )}
    </>
  )
}
