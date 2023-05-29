import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from '@radix-ui/react-icons';
import {styled} from "@stitches/react";

export const StyledRoot = styled(Checkbox.Root, {
    border: '1px solid Gray',
    borderRadius:'50%',
    height: '20px',
    width: '20px',
    fontSize: '0px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: 'black',
    '&:hover':{
        borderColor:'Cyan',
    },    
    '&:focus':{
        outline:'0'
    },
})

export const StyledIndicator = styled(Checkbox.Indicator,{
    color:'Cyan',
})

export const StyledIcon = styled(CheckIcon,{
    fontWeight:'bolder',
})