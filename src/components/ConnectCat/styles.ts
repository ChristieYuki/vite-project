import {styled} from "@stitches/react";
export const ButtonText = styled('button', {
    color: 'white',
    background:'DarkViolet',
    fontSize: '15px',
    lineHeight: '20px',
    marginBottom: '10px',
    '&:hover':{
        borderColor:'violet',
        background:'black',
        color:'violet'
    },    
    '&:focus':{
        outline:'0'
    },
})

export const CatImg = styled('img', {
    display: 'flex',
    alignSelf: 'center',
    borderRadius: '50px',
    border:'5px solid violet',
    margin: '10px',
})