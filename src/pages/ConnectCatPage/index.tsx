import { Header } from "../../components/Header";
import { ConnectCat } from "../../components/ConnectCat";
import { ConnectCatContextProvider } from "../../context/ConnectCatContext"
import { Link } from "react-router-dom";
import { StyledCard } from "../../components/CustomCard/styles";
import { cyan, purple } from "@radix-ui/colors";

export function ConnectCatPage() {

    return(
        <ConnectCatContextProvider>
            <StyledCard>
            <Header title={'Cat API'} />
            <ConnectCat />
            <Link to='/'>
                <button style={{backgroundColor: `${cyan.cyan8}`, margin: "10px"}}>Back</button>
            </Link>
            </StyledCard>
        </ConnectCatContextProvider>
    )
}