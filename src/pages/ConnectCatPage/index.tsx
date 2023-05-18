import { ConnectCat } from "../../components/ConnectCat";
import { Header } from "../../components/Header";
import { ConnectCatContextProvider } from "../../context/ConnectCatContext";
import { Paper } from "@mui/material";

export function ConnectCatPage() {
    return(
        <ConnectCatContextProvider>
          <Paper elevation={8} sx={{height:"500px", width:"500px", borderRadius: "8px"}}>
          <Header title={'Cat API'}/>
          <ConnectCat />
          </Paper>
        </ConnectCatContextProvider>
    )
}