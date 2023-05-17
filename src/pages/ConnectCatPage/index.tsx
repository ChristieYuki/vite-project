import { Header } from "../../components/Header";
import { ConnectCat } from "../../components/ConnectCat";
import { ConnectCatContextProvider } from "../../context/ConnectCatContext"
import { BackButton } from "../../components/BackButton";
import { Card, CardContent } from "@mui/material";

export function ConnectCatPage() {

  return (
    <ConnectCatContextProvider>
      <Card sx={{ minWidth: 275 }} >
        <Header title={'Cat API'} />
        <CardContent >
          <ConnectCat />
        </CardContent>
        <BackButton />
      </Card>
    </ConnectCatContextProvider>
  )
}