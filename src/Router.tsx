import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { ConnectCatPage } from "./pages/ConnectCatPage"
import { CounterPage } from "./pages/CounterPage"
import { TodoPage } from "./pages/TodoPage"


export function Router() {
    return(
        <Routes>
            <Route path="/" element={ <Home/> }/>
            <Route path="/connect-cat" element={ <ConnectCatPage /> }/>
            <Route path="/contador" element={ <CounterPage /> }/>
            <Route path="/to-do" element={ <TodoPage /> } />
        </Routes>
    )
    }