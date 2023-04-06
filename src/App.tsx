import { ChangeEvent, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Content } from './components/Content'
import { Counter } from './components/Counter'

function App() {
  const [contador, setContador] = useState(0);
  // const initialTodo = ["Ir na farmácia", "Fazer compras", "Apresentar o gatin"]
  //  const [todos, setTodos] = useState<string[]>(initialTodo);
  const [todos, setTodos] = useState<string[]>([]);
  const [todoInput, setTodoInput] = useState("");
  function handleTodoInput(event: ChangeEvent<HTMLInputElement>) {
    setTodoInput(event.target.value);
    console.log(event.target.value);
  }

  function handleAddTodo() {
    setTodos([...todos, todoInput])
    setTodoInput("");
  }
  // chamamos esse codigo que lembra html de Jsx
  return (
    <div>
      <div style={{ display: "flex", border: "solid", padding: "30px", flexDirection: "column" }}>
        <Content contador={contador} />
        <Counter contador={contador} setContador={setContador} />
      </div>
      <div style={{ display: "flex", margin: "10px", border: "solid", padding: "30px", flexDirection: "column" }}>
        <div style={{ marginBottom: "24px" }}>
          <h2>My to do</h2>
          <input alt='onChange' type="text" onChange={handleTodoInput} onBlur={handleAddTodo} />
          <button onSubmit={handleAddTodo}>+</button>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {todos.map((todo) => {
            return (<span>{todo}</span>)
          })}
        </div>
      </div>
    </div>
  )
}
//lista hard coded = dado mockado


export default App
