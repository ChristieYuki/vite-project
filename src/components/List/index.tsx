interface ListProps {
	todos: string[]
}

export function List({ todos }: ListProps) {

	return (
		<>
			<div>
				{
					todos.length === 0 ? <h3>Vamos fazer algo hoje?</h3> :
						todos.map((todo) => {
							return (<span>{todo}</span>)
						})}
			</div>
		</>
	)
}
