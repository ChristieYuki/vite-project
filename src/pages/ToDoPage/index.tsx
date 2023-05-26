import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { List } from "../../components/List";
import { ToDoContextProvider } from "../../context/toDoContext";

export function ToDoPage() {

    return (
        <ToDoContextProvider>
            <Header title={'My to do List'} />
            <Input />
            <List />
            <Link to='/'>Return to home</Link>
        </ToDoContextProvider>
    )
}