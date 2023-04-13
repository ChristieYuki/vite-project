import { ChangeEvent, useState } from 'react'

interface InputProps {
    todos: string[]
    setTodos: (todos: string[]) => void
}

export function Input({ todos, setTodos }: InputProps) {
    const [todoInput, setTodoInput] = useState("");
    function handleTodoInput(event: ChangeEvent<HTMLInputElement>) {
        setTodoInput(event.target.value);
        console.log(event.target.value);
    }
    function handleAddTodo() {
        setTodos([...todos, todoInput])
        setTodoInput("");
    }
    return (
        <>
            <input alt='onChange' type="text" onChange={handleTodoInput} onBlur={handleAddTodo} />
            <button onSubmit={handleAddTodo}>+</button>
        </>
    )
}
