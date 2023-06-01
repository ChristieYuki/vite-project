import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from '@radix-ui/react-icons';
import {styled} from "@stitches/react";

export const StyledRoot = styled(Checkbox.Root, {
    border: '2px solid Cyan',
    borderRadius:'50%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    height: '30px',
    width: '30px',
    fontSize: '10px',
    backgroundColor: 'black',
    '&:hover':{
        background:'cyan',
    },    
    '&:focus':{
        outline:'0'
    },
})

export const StyledIndicator = styled(Checkbox.Indicator,{
    color:'white',
    '&:focus':{
        outline:'0'
    },
})

export const StyledIcon = styled(CheckIcon,{
    fontWeight:'bolder',
})