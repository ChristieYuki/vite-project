import { Header } from "../../components/Header";
import { ConnectCat } from "../../components/ConnectCat";
import { ConnectCatContextProvider } from "../../context/ConnectCatContext"
import { Link } from "react-router-dom";
import { Paper } from "../../components/Paper";

export function ConnectCatPage() {

    return(
        <Paper>
            <ConnectCatContextProvider>
                <Header title={'Cat API'} />
                <ConnectCat />
            </ConnectCatContextProvider>
            <Link to='/'>Return to home</Link>
        </Paper>
    )
}