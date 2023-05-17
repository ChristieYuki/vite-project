import { useContext } from "react";
import { CounterContext } from "../../context/CounterContext"
import { CardContent, Typography } from "@mui/material";

export function Content() {
  const { contador } = useContext(CounterContext)

  return (
    <CardContent>
      <Typography variant="h5">Counter is {contador}</Typography>
    </CardContent>
  )
}
