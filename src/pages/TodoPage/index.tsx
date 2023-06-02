import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { List } from "../../components/List";
import { TodoContextProvider } from "../../context/TodoContext";
import { StyledCard } from "../../components/CustomCard/styles";
import { cyan } from "@radix-ui/colors";


export function TodoPage() {
    return(
        <TodoContextProvider>
            <StyledCard>
            <Header title={'My to do list'}/>
            <Input />
            <List />
            <Link to='/'>
                <button style={{backgroundColor: `${cyan.cyan8}`, margin: "10px"}}>Back</button>
            </Link>
            </StyledCard>
        </TodoContextProvider>
    )
}