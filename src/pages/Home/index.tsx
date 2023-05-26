import { Link } from "react-router-dom";
import { Header } from "../../components/Header";


export function Home() {
    return (
        <>
            <Header title="Home" />
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