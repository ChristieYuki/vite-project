import {styled} from "@stitches/react";
export const ButtonText = styled('button', {
    color: 'white',
    background:'black',
    fontSize: '15px',
    lineHeight: '20px',
    marginBottom: '10px',
    '&:hover':{
        borderColor:'black',
    },    
    '&:focus':{
        outline:'0'
    },
})

export const CatImg = styled('img', {
    display: 'flex',
    alignSelf: 'center',
    borderRadius: '50px',
    margin: '10px',
})