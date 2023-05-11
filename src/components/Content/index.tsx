import { useContext, useState } from "react";
import { CounterContext } from '../../context/CounterContext'

export function Content() {

  const { contador } = useContext(CounterContext)

  return (
    <>
      <h1>Contador é igual a {contador}</h1>
    </>
  )
}
