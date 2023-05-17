import { Content } from "../../components/Content"
import { Counter } from "../../components/Counter"
import { Header } from "../../components/Header"
import { CounterContextProvider } from "../../context/CounterContext"

export function CounterPage() {
    return (
        <CounterContextProvider>
            <Header title={'Counter'} />
            <Content />
            <Counter />
        </CounterContextProvider>
    )
}
