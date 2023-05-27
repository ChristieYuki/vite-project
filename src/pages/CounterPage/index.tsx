import { Link } from 'react-router-dom';
import { Content } from '../../components/Content';
import { Counter } from '../../components/Counter';
import { CounterContextProvider } from '../../context/CounterContext';
import { ChevronLeftIcon } from '@radix-ui/react-icons';
import { StyledPaper } from '../../components/CustomPaper/styles';

export function CounterPage() {

    return (
        <CounterContextProvider>
            <StyledPaper>
                <Content />
                <Counter />
                <Link to='/' style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                    <ChevronLeftIcon style={{paddingTop: '6px', paddingRight: '5px'}} />
                    <div>Return to home</div>
                </Link>
            </StyledPaper>
        </CounterContextProvider>
    )
}