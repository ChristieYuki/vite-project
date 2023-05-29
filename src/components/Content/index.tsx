import { Counter } from "../Counter";
import { StyledH2 } from "./styles";

export function Content() {
  return (
    <>
      <StyledH2>Click and add to Counter</StyledH2>
      <Counter />
    </>
  )
}
