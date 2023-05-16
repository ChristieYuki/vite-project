import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { List } from "../../components/List";
import { ToDoContextProvider } from "../../context/ToDoContext";
import { MyPaper } from "../../components/MyPaper";

export function ToDoPage() {

    return (
        <MyPaper>
            <ToDoContextProvider>
                <Header title={'My to do List'} />
                <Input />
                <List />
                <Link to='/'>Return to home</Link>
            </ToDoContextProvider>
        </MyPaper>
    )
}