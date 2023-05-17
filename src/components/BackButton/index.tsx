import { Link } from "react-router-dom"

export function BackButton() {

    return (
        <>
            <button>
                <Link to='/'>Back</Link>
            </button>
        </>
    )
}