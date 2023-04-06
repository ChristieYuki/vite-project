import { useState } from "react";
interface CounterProps {
    contador: number,
    setContador: (contador: number) => void
}
export function Counter({ contador, setContador }: CounterProps) {
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
