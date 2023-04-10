import { useState } from "react";
interface ListProps {
    item: string
}
export function List({ item }: ListProps) {
    return (
        <>
            <ul>
                <li>{item}</li>
            </ul>
        </>
    )
}
