import { useState } from 'react'
import './App.css'
import { Content } from './components/Content'
import { Counter } from './components/Counter'
import { Header } from './components/Header'
import { Input } from './components/Input'
import { List } from './components/List'
import { ConnectCat } from './components/ConnectCat'

export type Todo = {
  description: string
  id: string
  createdAt: string
  isChecked: boolean
}

function App() {
  const [contador, setContador] = useState(0)

  const [todos, setTodos] = useState<Todo[]>([])

  const [catContador, setCatContador] = useState(0)
  const [catImage, setCatImage] = useState({})

  return (
    <div>
      <div
        style={{
          display: 'flex',
          margin: '10px',
          border: 'solid',
          padding: '30px',
          flexDirection: 'column',
        }}
      >
        <Content contador={contador} />
        <Counter contador={contador} setContador={setContador} />
      </div>

      <div
        style={{
          display: 'flex',
          margin: '10px',
          border: 'solid',
          padding: '30px',
          flexDirection: 'column',
        }}
      >
        <Header title={'Cat API'} />
        <ConnectCat
          catContador={catContador}
          setCatContador={setCatContador}
          catImage={catImage}
          setCatImage={setCatImage}
        />
      </div>

      <div
        style={{
          display: 'flex',
          margin: '10px',
          border: 'solid',
          padding: '30px',
          flexDirection: 'column',
        }}
      >
        <Header title={'My to do List'} />
        <Input todos={todos} setTodos={setTodos} />
        <List todos={todos} setTodos={setTodos} />
      </div>
    </div>
  )
}

export default App
