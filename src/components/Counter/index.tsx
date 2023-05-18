import { useContext } from "react";
import { CounterContext } from "../../context/CounterContext"

export function Counter() {
    const { contador, setContador } = useContext(CounterContext)

    function contar() {
        setContador(contador + 1);
        console.log(contador);
    }
    return (
        <>
            <button onClick={() => contar()} className="margin-bottom-sm buttonCounter info">+</button>
        </>
    )
}
