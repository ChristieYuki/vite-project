import { Link } from "react-router-dom";
import { StyledButton } from "./styles";
import { StyledRootHorizontal } from "../CustomSeparator/styles"


export function ButtonHome({ children }: any) {
    return (
        <>
            <StyledRootHorizontal />
            <Link to='/'>
                <StyledButton>
                    {children}
                </StyledButton>
            </Link>
        </>
    )
}