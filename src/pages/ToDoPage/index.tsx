import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { List } from "../../components/List";
import { ToDoContextProvider } from "../../context/ToDoContext";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { StyledPaper } from "../../components/CustomPaper/styles";

export function ToDoPage() {

    return (
        <ToDoContextProvider>
            <StyledPaper>
                <Header title={'My to do List'} />
                <Input />
                <List />
                <Link to='/' style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                    <ChevronLeftIcon style={{paddingTop: '6px', paddingRight: '5px'}} />
                    <div>Return to home</div>
                </Link>
            </StyledPaper>
        </ToDoContextProvider>
    )
}