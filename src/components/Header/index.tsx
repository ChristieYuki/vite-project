import { CustomSeparatorHorizontal } from "../CustomSeparator"
import { HeaderText } from "./styles"

interface HeaderProps {
  title: string
}
export function Header({ title }: HeaderProps) {
  return (
    <>
      <HeaderText>{title}</HeaderText>
      <CustomSeparatorHorizontal />
    </>
  )
}
