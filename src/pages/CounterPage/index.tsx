import { Content } from '../../components/Content';
import { Counter } from '../../components/Counter';
import { MyPaper } from '../../components/MyPaper';
import { CounterContextProvider } from '../../context/CounterContext';
import { Link } from "react-router-dom";

export function CounterPage() {

    return (
        <MyPaper>
        <CounterContextProvider>
            <Content />
            <Counter />
        </CounterContextProvider>
        <Link to='/'>Return to home</Link>
        </MyPaper>
    )
}