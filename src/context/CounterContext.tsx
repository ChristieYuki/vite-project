import { createContext, useState } from 'react'

interface CounterPageProviderProps {
    contador: number,
    setContador: (contador: number) => void
}

export const CounterContext = createContext<CounterPageProviderProps>({
    contador: 0,
    setContador: () => {}
})

export function CounterContextProvider({children}:any){
    const [contador, setContador] = useState(0)

    return(
        <CounterContext.Provider value={{contador, setContador}}>
        {children}
        </CounterContext.Provider>
    )
}