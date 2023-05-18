import { createContext, useState } from "react";

interface CounterContextProviderProps{
    contador: number,
    setContador: (contador:number) => void
}

export const CounterContext = createContext<CounterContextProviderProps>({
    contador: 0,
    setContador: () => {}
})

export function CounterContextProvider({children}:any) {
    const [contador, setContador] = useState(0)
    return(
        <CounterContextProvider value={{contador,setContador}}>
            {children}
        </CounterContextProvider>
    )
}