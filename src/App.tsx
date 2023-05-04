import './App.css'
import { BrowserRouter} from 'react-router-dom'
import { Router } from './Router'
import { ToDoContextProvider } from './context/toDoContext'

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
