import { useContext } from 'react'
import { CounterContext } from '../../context/CounterContext';
interface CounterProps {
    contador: number,
    setContador: (contador: number) => void
}
export function Counter() {
    const { contador, setContador } = useContext(CounterContext)
    function contar() {
        setContador(contador + 1);
        console.log(contador);
    }
    return (
        <>
            <button onClick={() => contar()}>+</button>
            <p>contador é igual a {contador}</p>
        </>
    )
}
