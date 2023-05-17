import { useContext } from "react";
import { CounterContext } from "../../context/CounterContext"
import { Button } from "@mui/material";

export function Counter() {
    const { contador, setContador } = useContext(CounterContext)

    function contar() {
        setContador(contador + 1);
        console.log(contador);
    }
    return (
        <>
            <Button onClick={() => contar()} variant="contained" size="large">+</Button>
        </>
    )
}
