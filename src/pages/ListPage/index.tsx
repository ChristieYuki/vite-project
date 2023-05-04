import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react'
import { Todo } from "../../App"
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { List } from "../../components/List"


interface ListPageProps {
    todos: Todo[]
    setTodos: Dispatch<SetStateAction<Todo[]>>
}

export function ListPage({ todos, setTodos }: ListPageProps) {
    return (
        <>
            <div
                style={{
                    display: 'flex',
                    margin: '10px',
                    border: 'solid',
                    padding: '30px',
                    flexDirection: 'column',
                }}
            >
                <Header title={'My to do List'} />
                <Input todos={todos} setTodos={setTodos} />
                <List todos={todos} setTodos={setTodos} />
            </div>
        </>
    )
}
