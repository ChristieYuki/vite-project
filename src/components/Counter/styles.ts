import { styled } from "@stitches/react";

export const StyledButton = styled('button',{
    padding:'5px 10px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyCntent: 'center',
    color: 'cyan',
    backgroundColor: 'Black',
    border: '1px solid cyan', 
    margin:'10px',
    borderRadius: '100px', 
    '&:hover':{
        backgroundColor:'black',
        borderColor:'Cyan',
        color: 'Cyan',
    }
})

export const StyledP = styled('p',{
color: 'black', 
fontWeight: '850', 
fontSize: '30px',
margin:'10px',
})