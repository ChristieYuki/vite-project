import { CardHeader } from "@mui/material"
interface HeaderProps {
  title: string
}
export function Header({ title }: HeaderProps) {
  return (
    <CardHeader title={title} />
  )
}
