import { createContext, useState } from 'react'

interface ConnectCatPageProviderProps {
    catContador: number
    setCatContador:(catContador:number) => void
    catImage: {}
    setCatImage: (catImage: {}) => void
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
        <ConnectCatContext.Provider value={{catContador, setCatContador, catImage, setCatImage}}>
        {children}
        </ConnectCatContext.Provider>
    )
}