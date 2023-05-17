import { Button, CardActions } from "@mui/material"
import { Link } from "react-router-dom"

export function BackButton() {
    return (
        <CardActions>
            <Link to='/'>
                <Button variant="outlined" size="small">
                    Back
                </Button>
            </Link>
        </CardActions>
    )
}