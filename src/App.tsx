import './App.css'
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
  )
}

export default App
