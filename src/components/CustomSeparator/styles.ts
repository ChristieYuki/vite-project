import * as Separator from '@radix-ui/react-separator';
import { styled } from '@stitches/react';
import { pinkA} from '@radix-ui/colors';

export const SeparatorRoot = styled(Separator.Root, {
    backgroundColor: pinkA.pinkA12,
    '&[data-orientation=horizontal]': { height: 1, width: '100%' },
    '&[data-orientation=vertical]': { height: '100%', width: 1 },
  });