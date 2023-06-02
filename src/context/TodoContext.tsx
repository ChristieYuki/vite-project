import { createContext, useState } from "react"
import { Todo } from "../App"


const inicialTodo:Todo[] = []

interface TodoContextProviderProps {
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

export const TodoContext = createContext<TodoContextProviderProps>({
    todos: [],
    setTodos: () => {}
})

export function TodoContextProvider({children}:any) {
    const [todos, setTodos] = useState<Todo[]>([])
    return(
        <TodoContext.Provider value={{todos, setTodos}}>
        {children}
        </TodoContext.Provider>
    )
}