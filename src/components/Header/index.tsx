import { BackButton } from "../BackButton"

interface HeaderProps {
  title: string
}
export function Header({ title }: HeaderProps) {
  return (
    <>
      <BackButton />
      <h2>{title}</h2>
    </>
  )
}
