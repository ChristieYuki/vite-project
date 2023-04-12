import React from "react";
interface ClassBoxProps {
    data: number
    children: any
}
export function ClassBox({ data, children }: ClassBoxProps) {
    return (
        <>
            <div style={{ display: "flex", marginBottom: "24px", border: "solid", padding: "30px", flexDirection: "column" }}>
                aula {data}
                {children}
            </div>
        </>
    )
}