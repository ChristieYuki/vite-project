import {Route, Routes} from "react-router-dom"
import { Home } from "./pages/Home"
import { ConnectCatPage } from "./pages/ConnectCatPage"
import { useState } from "react"
import { Todo } from "./App"


export function Router() {
const [contador, setContador] = useState(0)

const [todos, setTodos] = useState<Todo[]>([])

const [catContador, setCatContador] = useState(0)
const [catImage, setCatImage] = useState({})

    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/connect-cat" element={<ConnectCatPage catContador={catContador} catImage={catImage} setCatContador={setCatContador} setCatImage={setCatImage}/>}/>
        </Routes>
    )
    }