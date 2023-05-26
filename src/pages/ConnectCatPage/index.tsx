import { ConnectCat } from "../../components/ConnectCat";
import { ButtonHome } from "../../components/CustomButton";
import { Header } from "../../components/Header";
import { ConnectCatContextProvider } from "../../context/ConnectCatContext";

export function ConnectCatPage() {
  return (
    <ConnectCatContextProvider>
      <Header title={'Cat API'} />
      <ConnectCat />
      <ButtonHome children='home' />
    </ConnectCatContextProvider>
  )
}