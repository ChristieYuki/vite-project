import { useState } from "react"
import { createContext } from "react"

interface ConnectCatPageProviderProps {
    catContador: number,
    setCatContador: (catContador:number) => void,
    catImage: {},
    setCatImage: (catImage:{}) => void
}

export const ConnectCatContext = createContext<ConnectCatPageProviderProps>({
    catContador: 0,
    setCatContador: () => {},
    catImage: {},
    setCatImage: () => {}
})

export function ConnectCatContextProvider({children}:any) {
    const [catContador, setCatContador] = useState(0)
    const [catImage, setCatImage] = useState({})

    return(
        <ConnectCatContextProvider value={{catContador, setCatContador, catImage, setCatImage}}>
            {children}
        </ConnectCatContextProvider>
    )
}