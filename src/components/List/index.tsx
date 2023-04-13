interface ListProps {
    todos: string[]
}

export function List({ todos }: ListProps) {

    return (
        <>
            <div style={{ display: "flex", flexDirection: "column" }}>
                {todos.map((todo) => {
                    return (<span>{todo}</span>)
                })}
            </div>
        </>
    )
}
