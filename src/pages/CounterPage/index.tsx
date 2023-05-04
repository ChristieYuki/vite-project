import { Content } from "../../components/Content"
import { Counter } from "../../components/Counter"

interface CounterPageProps {
    contador: number,
    setContador: (contador: number) => void
}

export function CounterPage({ contador, setContador }: CounterPageProps) {
    return (
        <>
            <div
                style={{
                    display: 'flex',
                    margin: '10px',
                    border: 'solid',
                    padding: '30px',
                    flexDirection: 'column',
                }}
            >
                <Content contador={contador} />
                <Counter contador={contador} setContador={setContador} />
            </div>

            <div
                style={{
                    display: 'flex',
                    margin: '10px',
                    border: 'solid',
                    padding: '30px',
                    flexDirection: 'column',
                }}
            >
            </div>
        </>
    )
}
