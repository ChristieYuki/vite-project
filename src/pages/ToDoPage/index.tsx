import { Dispatch, SetStateAction } from "react";
import { Todo } from "../../App";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { List } from "../../components/List";

interface ToDoPageProps {
    todos: Todo[],
    setTodosInput: (todos: Todo[]) => void,
    setTodosList: Dispatch<SetStateAction<Todo[]>>
}

export function ToDoPage({ todos, setTodosInput, setTodosList }:ToDoPageProps) {

    return (
        <>
            <Header title={'My to do List'} />
            <Input todos={todos} setTodos={setTodosInput} />
            <List todos={todos} setTodos={setTodosList} />
        </>
    )
}