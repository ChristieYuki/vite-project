import React from "react";
interface ContentProps {
  contador: number
}
export function Content({ contador }: ContentProps) {
  return (
    <>
      <h1>Contador é igual a {contador}</h1>
    </>
  )
}
