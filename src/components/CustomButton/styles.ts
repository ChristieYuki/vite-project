import { styled } from "@stitches/react";

export const StyledButton = styled('button',{
    borderRadius: '40%',
    padding:'15px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyCntent: 'center',
    color: 'violet',
    backgroundColor: 'pink',
    borderColor:'violet',
    margin:'10px',
    '&:hover':{
        backgroundColor:'black',
        borderColor:'Cyan',
        color: 'Cyan'
    }
})