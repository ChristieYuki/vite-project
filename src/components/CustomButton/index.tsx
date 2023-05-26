import { Link } from "react-router-dom";
import { StyledButton } from "./styles";

export function ButtonHome({ children }: any) {
    return (
        <>
            <Link to='/'>
                <StyledButton>
                    {children}
                </StyledButton>
            </Link>
        </>
    )
}