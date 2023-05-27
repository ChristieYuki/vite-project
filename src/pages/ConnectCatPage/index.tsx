import { Header } from "../../components/Header";
import { ConnectCat } from "../../components/ConnectCat";
import { ConnectCatContextProvider } from "../../context/ConnectCatContext"
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { StyledPaper } from "../../components/CustomPaper/styles";

export function ConnectCatPage() {

    return(
        <ConnectCatContextProvider>
            <StyledPaper>
                <Header title={'Cat API'} />
                <ConnectCat />
                <Link to='/' style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '15px'}}>
                    <ChevronLeftIcon style={{paddingTop: '6px', paddingRight: '5px'}} />
                    <div>Return to home</div>
                </Link>
            </StyledPaper>
        </ConnectCatContextProvider>
    )
}