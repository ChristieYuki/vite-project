import { styled } from "@stitches/react";

export const StyledButton = styled('button',{
    borderRadius: '20%',
    padding:'10px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyCntent: 'center',
    color: 'white',
    backgroundColor: 'Black',
    margin:'10px',
    '&:hover':{
        backgroundColor:'black',
        borderColor:'Cyan',
        color: 'Cyan'
    }
})