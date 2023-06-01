import * as Form from '@radix-ui/react-form';
import { styled } from '@stitches/react';

export const StyledInput = styled('input',{
  all: 'unset',
  color:'Beige',
  boxSizing: 'borderBox',
  padding: '0 10px',
  height: '35px',
  lineHeight: '1',
  boxShadow:'0 0 0 1px DarkViolet',
  borderRadius: '30px',
  '&:hover':{
    boxShadow:'0 0 0 1px cyan',
  },
  '&:focus':{
    boxShadow:' 0 0 0 2px cyan',
  },
  '&:selection':{
    backgroundColor: 'black',
    color: 'white'
  }
})

export const StyledButton = styled('button',{
  all: 'unset',
  boxSizing: 'borderBox',
  display: 'inlineFlex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  padding: '0 13px',
  margin:'10px',
  fontSize: '20px',
  lineHeight: '1',
  fontWeight: '500',
  height: '35px',
  backgroundColor: 'DarkViolet',
  color: 'white',
  '&:hover':{
    backgroundColor:'black',
    border:'1px solid Cyan',
    color: 'Cyan',
},
'&:focus' : {
  boxShadow:' 0 0 0 2px cyan',
}
})