import { styled } from "@stitches/react";
export const StyledButton = styled('button',{
    borderRadius: '20%',
    fontWeight:'bold',
    fontSize:'large',
    padding:'4px 8px 4px 8px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyCntent: 'center',
    color: 'black',
    backgroundColor: 'white',
    margin:'10px',
    border: '2px solid black',
    '&:hover':{
        backgroundColor:'black',
        borderColor:'Cyan',
        color: 'Cyan'
    }
})