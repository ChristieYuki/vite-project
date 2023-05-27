import { violet } from "@radix-ui/colors";
import { styled } from "@stitches/react";
import * as Separator from '@radix-ui/react-separator';

export const SeparatorRoot = styled(Separator.Root, {
    backgroundColor: violet.violet6,
    '&[data-orientation=horizontal]': { height: 1, width: '100%' },
    '&[data-orientation=vertical]': { height: '100%', width: 1 },
});