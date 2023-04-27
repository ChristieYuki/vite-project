import { Link } from "react-router-dom";

export function Home() {
    return(
        <>
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
        </>
    )
}