import { ButtonHome } from "../../components/CustomButton";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { List } from "../../components/List";
import { ToDoContextProvider } from "../../context/ToDoContext";

export function ToDoPage() {
    return (
        <ToDoContextProvider>
            <Header title={'My to do List'} />
            <Input />
            <List />
            <ButtonHome children='home' />
        </ToDoContextProvider>
    )
}