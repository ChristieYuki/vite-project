import { useContext } from 'react'
import { CounterContext } from '../../context/CounterContext';

export function Counter() {
    const { contador, setContador } = useContext(CounterContext)
    function contar() {
        setContador(contador + 1);
        console.log(contador);
    }
    return (
        <>
            <button onClick={() => contar()} style={{ background: 'black', borderRadius: '100px', border: '1px solid cyan', color: 'cyan', }}>+</button>
            <p style={{ color: 'darkblue', fontWeight: '850', fontFamily: 'fantasy', fontSize: '30px' }}>Result : {contador} </p>
        </>
    )
}
