import { StyledRootHorizontal } from "../CustomSeparator/styles"
import { HeaderText } from "./styles"

interface HeaderProps {
  title: string
}
export function Header({ title }: HeaderProps) {
  return (
    <>
      <HeaderText>{title}</HeaderText>
      <StyledRootHorizontal
        style={{ margin: '15px 0' }} />
    </>
  )
}
