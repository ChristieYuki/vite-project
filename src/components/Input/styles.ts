import * as Form from '@radix-ui/react-form';
import { styled } from '@stitches/react';

export const StyledInput = styled('input',{
  all: 'unset',
  boxSizing: 'borderBox',
  padding: '0 10px',
  height: '35px',
  lineHeight: '1',
  boxShadow:'0 0 0 1px gray',
  borderRadius: '30px',
  '&:hover':{
    boxShadow:'0 0 0 1px black',
  },
  '&:focus':{
    boxShadow: '0 0 0 2px black',
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
  borderRadius: '4px',
  padding: '0 15px',
  margin:'10px',
  fontSize: '16px',
  lineHeight: '1',
  fontWeight: '500',
  height: '35px',
  backgroundColor: 'black',
  color: 'white',
  boxShadow: '0 2px 10px gray',
'&:hover' : {
  backgroundColor: 'LightGray',
},
'&:focus' : {
  boxShadow:' 0 0 0 2px cyan',
}
})