import { ConnectCat } from "../../components/ConnectCat";
import { Header } from "../../components/Header";

interface ConnectCatPageProps {
   catContador: number
   setCatContador:(catContador:number) => void
   catImage: {}
   setCatImage: (catImage: {}) => void

}
export function ConnectCatPage({catContador, setCatContador, catImage, setCatImage}:ConnectCatPageProps) {
    return(
        <>
        <Header title={'Cat API'} />
        <ConnectCat
          catContador={catContador}
          setCatContador={setCatContador}
          catImage={catImage}
          setCatImage={setCatImage}
        />
        </>
    )
}