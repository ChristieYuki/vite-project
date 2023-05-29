import { Content } from "../../components/Content"
import { ButtonHome } from "../../components/CustomButton"
import { Header } from "../../components/Header"
import { CounterContextProvider } from "../../context/CounterContext"

export function CounterPage() {
    return (
        <CounterContextProvider>
            <Header title={'Counter'} />
            <Content />
            <ButtonHome children='home' />
        </CounterContextProvider>
    )
}
