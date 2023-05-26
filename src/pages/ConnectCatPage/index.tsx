import { Header } from "../../components/Header";
import { ConnectCat } from "../../components/ConnectCat";
import { ConnectCatContextProvider } from "../../context/ConnectCatContext"
import { Link } from "react-router-dom";

export function ConnectCatPage() {

    return(
        <ConnectCatContextProvider>
            <Header title={'Cat API'} />
            <ConnectCat />
            <Link to='/'>Return to home</Link>
        </ConnectCatContextProvider>
    )
}