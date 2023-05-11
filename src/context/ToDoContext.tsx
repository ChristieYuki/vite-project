import { createContext, useState } from 'react'
import { Todo } from '../App'

const inicialToDo: Todo[] = []

interface ToDoContextProviderProps {
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

export const ToDoContext = createContext<ToDoContextProviderProps>({
    todos: [],
    setTodos: () => { }
})

export function ToDoContextProvider({ children }: any) {
    const [todos, setTodos] = useState<Todo[]>([])

    return (
        <ToDoContext.Provider value={{ todos, setTodos }}>
            {children}
        </ToDoContext.Provider>
    )
}