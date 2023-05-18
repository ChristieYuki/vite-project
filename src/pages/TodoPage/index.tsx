import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { List } from "../../components/List";
import { TodoContextProvider } from "../../context/TodoContext";


export function TodoPage() {
    return(
        <TodoContextProvider>
            <Header title={'My to do list'}/>
            <Input />
            <List />
        </TodoContextProvider>
    )
}