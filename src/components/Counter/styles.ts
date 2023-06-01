import { styled } from "@stitches/react";

export const StyledButton = styled('button',{
    padding:'7px 19px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '35px',
    fontWeight: '500',  
    backgroundColor: 'DarkViolet',
    margin:'10px',
    borderRadius: '100px', 
    '&:hover':{
        backgroundColor:'black',
        borderColor:'Cyan',
        color: 'Cyan',
    }
})

export const StyledP = styled('p',{
color: 'violet', 
fontWeight: '850', 
fontSize: '30px',
margin:'10px',
})