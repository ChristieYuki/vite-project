import { blackA, violet, whiteA } from "@radix-ui/colors";
import * as Checkbox from "@radix-ui/react-checkbox";
import {styled} from "@stitches/react";

export const StyledRoot = styled(Checkbox.Root, {
    boxShadow: `0 2px 10px ${blackA.blackA7}`,
    borderRadius:'25%',
    height: '20px',
    width: '20px',
    fontSize: '0px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: whiteA.whiteA12,
    '&:hover':{
        backgroundColor: violet.violet3,
    },    
    '&:focus':{
        outline:'0'
    }
})

export const StyledIndicator = styled(Checkbox.Indicator,{
    color: violet.violet11
})