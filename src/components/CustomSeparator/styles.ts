import * as Separator from '@radix-ui/react-separator';
import { styled } from "@stitches/react"

export const StyledRootHorizontal = styled(Separator.Root, {
    backgroundColor: 'cyan',
    height: '1px',
    width: '100%',
    margin: '6px',
  })

export const StyledRootVertical = styled(Separator.Root, {
    backgroundColor: 'violet',
    width: '1px',
    height: '100%',
    margin: '6px',
  })