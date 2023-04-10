import { useState } from "react";
interface HeaderProps {
    title: string
}
export function Header({ title }: HeaderProps) {
    return (
        <>
            <h1>The title is {title}</h1>
        </>
    )
}
