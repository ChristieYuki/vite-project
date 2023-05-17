import { Card, CardContent } from "@mui/material";
import { BackButton } from "../../components/BackButton";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { List } from "../../components/List";
import { ToDoContextProvider } from "../../context/ToDoContext";

export function ToDoPage() {
    return (
        <ToDoContextProvider>
            <Card sx={{ minWidth: 275 }}>
                <Header title={'My to do List'} />
                <CardContent>
                    <Input />
                </CardContent>
                <CardContent>
                    <List />
                </CardContent>
                <BackButton />
            </Card>
        </ToDoContextProvider>
    )
}