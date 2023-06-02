import { Link } from "react-router-dom";
import { CustomSeparator } from "../../components/CustomSeparator";
import { StyledCard } from "../../components/CustomCard/styles";
import { blue } from "@radix-ui/colors";

export function Home() {
    return(
        <>
        <StyledCard>
        <h2>Home</h2>
        <CustomSeparator orientation='horizontal'/>
            <li>
                <Link to='/connect-cat'>Connect Cat</Link>
            </li>

            <CustomSeparator orientation='horizontal'/>

            <li>
                <Link to='/contador'>Contador</Link>
            </li>

            <CustomSeparator orientation='horizontal'/>

            <li>
                <Link to='/to-do'>To Do List</Link>
            </li>
            </StyledCard>
        </>
    )
}