import { ChangeEvent, useState } from 'react'
interface ListProps {
    todos: string[]
    setTodos: (todos: string[]) => void
}

export function List({ todos, setTodos }: ListProps) {
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
            <div style={{ display: "flex", flexDirection: "column" }}>
                {todos.map((todo) => {
                    return (<span>{todo}</span>)
                })}
            </div>
        </>
    )
}
