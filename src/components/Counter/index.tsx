import { MouseEvent, useContext } from "react";
import { CounterContext } from "../../context/CounterContext"
import { CustomTooltip } from "../CustomTooltip";
import { PlusIcon } from "@radix-ui/react-icons";

export function Counter() {
    const { contador, setContador } = useContext(CounterContext)

    function contar() {
        setContador(contador + 1);
        console.log(contador);
    }
    return (
        <>
            <CustomTooltip childrenButton={<PlusIcon/>} childrenContent="Adicionar mais UM" tooltipClick={() => contar()} />
            {/* <button onClick={() => contar()}>+</button> */}
            <p>contador é igual a {contador}</p>
        </>
    )
}
