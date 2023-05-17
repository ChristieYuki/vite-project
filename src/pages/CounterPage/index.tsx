import { Card, CardContent, CardHeader } from "@mui/material"
import { BackButton } from "../../components/BackButton"
import { Content } from "../../components/Content"
import { Counter } from "../../components/Counter"
import { Header } from "../../components/Header"
import { CounterContextProvider } from "../../context/CounterContext"

export function CounterPage() {
    return (
        <CounterContextProvider>
            <Card>
                <CardHeader title='Click to add' />
                <CardContent>
                    <Counter />
                    <Content />
                </CardContent>
                <BackButton />
            </Card>
        </CounterContextProvider>
    )
}
