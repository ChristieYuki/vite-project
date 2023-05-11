import { ConnectCat } from "../../components/ConnectCat";
import { Header } from "../../components/Header";
import { ConnectCatContextProvider } from "../../context/ConnectCatContext";

export function ConnectCatPage() {
  return (
    <ConnectCatContextProvider>
      <Header title={'Cat API'} />
      <ConnectCat />
    </ConnectCatContextProvider>
  )
}