import { Link } from 'react-router-dom';
import { Content } from '../../components/Content';
import { Counter } from '../../components/Counter';
import { CounterContextProvider } from '../../context/CounterContext';
import { cyan } from '@radix-ui/colors';
import { StyledCard } from '../../components/CustomCard/styles';

export function CounterPage() {

    return (
        <CounterContextProvider>
            <StyledCard>
            <Content />
            <Counter />
            <Link to='/'>
                <button style={{backgroundColor: `${cyan.cyan8}`, margin: "10px"}}>Back</button>
            </Link>
            </StyledCard>
        </CounterContextProvider>
    )
}
