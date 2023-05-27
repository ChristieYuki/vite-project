import { CardStackPlusIcon, ClipboardIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";
import CustomSeparator from "../../components/CustomSeparator";
import { StyledPaper } from "../../components/CustomPaper/styles";
import { violet } from "@radix-ui/colors";

export function Home() {
    return(
        <>
            <StyledPaper>
                <h1>Home</h1>
                <ul style={{paddingLeft: '0', display: 'flex', flexDirection: 'column' ,placeItems: 'center'}}>
                    <li style={{listStyle: 'none', display: 'flex', alignContent: 'center'}}>
                        <span style={{marginRight: '10px'}}>
                            <GitHubLogoIcon style={{height: '25px', width: '25px'}} />
                        </span>
                        <Link to='/connect-cat' style={{color: `${violet.violet10}`}}>Connect Cat</Link>
                    </li>

                    <CustomSeparator orientation='horizontal' />

                    <li style={{listStyle: 'none', display: 'flex', alignContent: 'center'}}>
                        <span style={{marginRight: '10px'}}>
                            <CardStackPlusIcon style={{height: '25px', width: '25px'}} />
                        </span>
                        <Link to='/contador' style={{color: `${violet.violet10}`}}>Contador</Link>
                    </li>

                    <CustomSeparator orientation='horizontal' />

                    <li style={{listStyle: 'none', display: 'flex', alignContent: 'center'}}>
                        <span style={{marginRight: '10px'}}>
                            <ClipboardIcon style={{height: '25px', width: '25px'}} />
                        </span>
                        <Link to='/to-do' style={{color: `${violet.violet10}`}}>To Do List</Link>
                    </li>
                </ul>
            </StyledPaper>
        </>
    )
}