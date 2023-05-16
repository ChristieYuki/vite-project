import { Header } from "../../components/Header";
import { ConnectCat } from "../../components/ConnectCat";
import { ConnectCatContextProvider } from "../../context/ConnectCatContext"
import { Link } from "react-router-dom";
import { MyPaper } from "../../components/MyPaper";

export function ConnectCatPage() {

    return(
        <MyPaper>
            <ConnectCatContextProvider>
                <Header title={'Cat API'} />
                <ConnectCat />
            </ConnectCatContextProvider>
            <Link to='/'>Return to home</Link>
        </MyPaper>
    )
}