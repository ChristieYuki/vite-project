import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from '@radix-ui/react-icons';

export function CustomCheckbox({ handleCheckbox, todo }: any) {
    return (
        <>
            <Checkbox.Root onChange={() => handleCheckbox(todo.id)} checked={todo.isChecked} value={todo.id}>
                <Checkbox.Indicator>
                    <CheckIcon />
                </Checkbox.Indicator>
            </Checkbox.Root>
        </>
    )
}