import React from "react";
interface CheckListProps {
    todos: string[]
}
export function CheckList({ todos }: CheckListProps) {
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
