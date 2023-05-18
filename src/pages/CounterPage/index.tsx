import { Content } from '../../components/Content';
import { Counter } from '../../components/Counter';
import { Paper } from '../../components/Paper';
import { CounterContextProvider } from '../../context/CounterContext';
import { Link } from "react-router-dom";

export function CounterPage() {

    return (
        <Paper>
        <CounterContextProvider>
            <Content />
            <Counter />
        </CounterContextProvider>
        <Link className='returnHome display-block' to='/'>Return to home</Link>
        </Paper>
    )
}