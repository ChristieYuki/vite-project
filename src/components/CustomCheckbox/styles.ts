import * as Checkbox from "@radix-ui/react-checkbox";
import {styled} from "@stitches/react";

export const StyledRoot = styled(Checkbox.Root, {
    border: '1px solid red',
    borderRadius:'50%',
    height: '20px',
    width: '20px',
    fontSize: '0px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'pink',
    '&:hover':{
        backgroundColor:'Blue'
    },    
    '&:focus':{
        outline:'0'
    }
})

export const StyledIndicator = styled(Checkbox.Indicator,{
    color:'yellow'
})