import { useContext } from "react";
import { CounterContext } from "../../context/CounterContext"
import { violet } from "@radix-ui/colors";

export function Content() {
  const { contador } = useContext(CounterContext)

  return (
    <>
      <h1 style={{color: `${violet.violet11}`}}>Contador é igual a {contador}</h1>
    </>
  )
}
