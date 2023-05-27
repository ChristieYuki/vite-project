import { CheckIcon } from '@radix-ui/react-icons';
import { StyledIndicator, StyledRoot } from "./styles";

export function CustomCheckbox({ handleCheckbox, id, isChecked }: any) {
    return (
        <>
            <StyledRoot onChange={() => handleCheckbox(id)} checked={isChecked} value={id}>
                <StyledIndicator>
                    <CheckIcon />
                </StyledIndicator>
            </StyledRoot>
        </>
    )
}