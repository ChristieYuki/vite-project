<<<<<<< HEAD
import { Content } from "../../components/Content"
import { Counter } from "../../components/Counter"
=======
import { Content } from '../../components/Content';
import { Counter } from '../../components/Counter';
>>>>>>> 35b5b84f5b33ba75c788e17a1743487c7c5ea618

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
