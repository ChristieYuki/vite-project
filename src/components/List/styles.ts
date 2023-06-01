import { styled } from "@stitches/react";
export const StyledButton = styled('button',{
    borderRadius: '50%',
    height: '30px',
    width: '30px',
    fontWeight:'bold',
    fontSize:'large',
    padding:'4px 8px 4px 8px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    backgroundColor: 'black',
    borderColor:'gray',
    margin:'10px',
    '&:hover':{
        backgroundColor:'DarkViolet',
        borderColor:'white',
        color: 'white',
    }
})

export const StyledH3 = styled('h3', {
color:'white',
})

export const StyledSpan = styled('span', {
    color:'white',
    })