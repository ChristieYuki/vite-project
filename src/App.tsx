import { useState } from 'react'
import './App.css'
import { Content } from './components/Content'
import { Counter } from './components/Counter'
// import { Header } from './components/Header'
// import { List } from './components/List'
import { ClassBox } from './components/ClassBox'
import { Input } from './components/Input'
import { CheckList } from './components/CheckList'

function App() {
  const [contador, setContador] = useState(0);
  // const initialTodo = ["Ir na farmácia", "Fazer compras", "Apresentar o gatin"]
  const [todos, setTodos] = useState<string[]>([]);
  const title = "My to do";

  return (
    <div>
      <ClassBox data={1}>
        <Content contador={contador} />
        <Counter contador={contador} setContador={setContador} />
      </ClassBox>
      {/* <ClassBox data={3}>
        <Header title={title} />
        <List todos={todos} setTodos={setTodos} />
      </ClassBox> */}
      <ClassBox data={3.1}>
        <Input title={title} todos={todos} setTodos={setTodos} />
        <CheckList todos={todos} />
      </ClassBox>
    </div>
  )
}


export default App
