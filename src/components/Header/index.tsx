import { violet } from "@radix-ui/colors"

interface HeaderProps {
  title: string
}
export function Header({ title }: HeaderProps) {
  return (
    <>
      <h2 style={{color: `${violet.violet9}`}}>{title}</h2>
    </>
  )
}
