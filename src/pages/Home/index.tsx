import { Link } from "react-router-dom";
import { Paper } from "../../components/Paper";

export function Home() {
    return(
        <Paper>
        <h1>Home</h1>
        <ul>
            <li>
                <Link to='/connect-cat'>Connect Cat</Link>
            </li>
            <li>
                <Link to='/contador'>Contador</Link>
            </li>
            <li>
                <Link to='/to-do'>To Do List</Link>
            </li>
        </ul>
        </Paper>
    )
}