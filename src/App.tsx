import { useState } from 'react'
import './App.css'
import { Content } from './components/Content'
import { Counter } from './components/Counter'
import { Header } from './components/Header'
import { Input } from './components/Input'
import { List } from './components/List'
import { ConnectCat } from './components/ConnectCat'
import { BrowserRouter} from 'react-router-dom'
import { Router } from './Router'

export type Todo = {
  description: string
  id: string
  createdAt: string
  isChecked: boolean
}

function App() {
  
  return (
    <BrowserRouter>
    <Router/>
    </BrowserRouter>
    // <div>
    //   <div
    //     style={{
    //       display: 'flex',
    //       margin: '10px',
    //       border: 'solid',
    //       padding: '30px',
    //       flexDirection: 'column',
    //     }}
    //   >
    //     <Content contador={contador} />
    //     <Counter contador={contador} setContador={setContador} />
    //   </div>

    //   <div
    //     style={{
    //       display: 'flex',
    //       margin: '10px',
    //       border: 'solid',
    //       padding: '30px',
    //       flexDirection: 'column',
    //     }}
    //   >
    //     //   </div>

    //   <div
    //     style={{
    //       display: 'flex',
    //       margin: '10px',
    //       border: 'solid',
    //       padding: '30px',
    //       flexDirection: 'column',
    //     }}
    //   >
    //     <Header title={'My to do List'} />
    //     <Input todos={todos} setTodos={setTodos} />
    //     <List todos={todos} setTodos={setTodos} />
    //   </div>
    // </div>
  )
}

export default App
