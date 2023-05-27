import { styled } from "@stitches/react";
import { blackA, violet, whiteA } from '@radix-ui/colors';

export const StyledInput = styled('input', {
    all: 'unset',
    width: 200,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    padding: '0 10px',
    height: 35,
    fontSize: 15,
    lineHeight: 1,
    color: violet.violet11,
    backgroundColor: whiteA.whiteA11,
    boxShadow: `0 2px 10px 0 ${blackA.blackA8}`,

    '&:focus': {
        border: `1px solid ${violet.violet10}`
    },

    '&::selection': { 
        backgroundColor: `${violet.violet10}`, 
        color: 'white',
    },
});
  