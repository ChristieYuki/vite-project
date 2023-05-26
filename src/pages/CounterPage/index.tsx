import { Link } from 'react-router-dom';
import { Content } from '../../components/Content';
import { Counter } from '../../components/Counter';
import { CounterContextProvider } from '../../context/CounterContext';

export function CounterPage() {

    return (
        <CounterContextProvider>
            <Content />
            <Counter />
            <Link to='/'>
                <button>Back</button>
            </Link>
        </CounterContextProvider>
    )
}
