import styled from '@emotion/styled'
import { Checkbox } from "@mui/material"

export const StyledHeader = styled.div`
    color: blue; 
`

export const CardList = styled.div`
    padding: 16px;
    margin-bottom: 5px;
    border-radius: 8px;
    background-color: #c6c6c6;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

export const Button = styled.button`
    border-radius: 8px;
    background-color: red;
    border: 2px solid #8b0000;
    color: #8b0000;
`
export const StyledCheckbox = styled(Checkbox)`
    height: 24px;
    width: 24px;
`