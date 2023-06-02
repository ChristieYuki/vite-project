import { blue, pink } from "@radix-ui/colors";
import * as Checkbox from "@radix-ui/react-checkbox";
import {styled} from "@stitches/react";

export const StyledRoot = styled(Checkbox.Root, {
    border: `1px solid ${blue.blue10}`,
    borderRadius:'50%',
    height: '20px',
    width: '20px',
    fontSize: '0px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: blue.blue6,
    '&:hover':{
        backgroundColor:blue.blue10
    },    
    '&:focus':{
        outline:'0'
    }
})

export const StyledIndicator = styled(Checkbox.Indicator,{
    color:'yellow'
})