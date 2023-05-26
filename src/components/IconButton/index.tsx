import { ReactNode } from "react";

interface IconButtonProps {
    children: ReactNode;
}

export function IconButton({children}: IconButtonProps) {
    return (
        <>
            <button className="IconButton">
                {children}                
            </button>
        </>
    )
}
