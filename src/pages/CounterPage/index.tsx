import { Content } from "../../components/Content"
import { Counter } from "../../components/Counter"

interface CounterPageProps {
    contador: number,
    setContador: (contador: number) => void
}

export function CounterPage(
    { contador, setContador }: CounterPageProps) {

    return (
        <>
            <Content contador={contador} />
            <Counter contador={contador} setContador={setContador} />
        </>
    )
}
