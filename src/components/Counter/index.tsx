import { useContext } from "react";
import { CounterContext } from "../../context/CounterContext"
import CustomTooltip from "../CustomTooltip";
import { PlusIcon } from "@radix-ui/react-icons";

export function Counter() {
    const { contador, setContador } = useContext(CounterContext)

    function contar() {
        setContador(contador + 1);
        console.log(contador);
    }
    return (
        <>
            <CustomTooltip 
                onClick={() => contar()} 
                childrenButton={<PlusIcon/>} 
                childrenContent='Somar' 
            />
        </>
    )
}
