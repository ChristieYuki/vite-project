import { useContext } from 'react'
import { CounterContext } from '../../context/CounterContext';
import { StyledButton, StyledP } from './styles';

export function Counter() {
    const { contador, setContador } = useContext(CounterContext)
    function contar() {
        setContador(contador + 1);
        console.log(contador);
    }
    return (
        <>
            <StyledButton onClick={() => contar()} >+</StyledButton>
            <StyledP> Total: {contador} </StyledP>
        </>
    )
}
