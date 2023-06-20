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

export const StyledTable = styled('table', {
    width:'100%',
    })

export const StyledTh = styled('th', {
    color:'white',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '25%'

    })

export const StyledTd = styled('td', {
    color:'white',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '25%'
    })