import { Content } from "../../components/Content"
import { ButtonHome } from "../../components/CustomButton"
import { CounterContextProvider } from "../../context/CounterContext"

export function CounterPage() {
    return (
        <CounterContextProvider>
            <Content />
            <ButtonHome children='home' />
        </CounterContextProvider>
    )
}
