import * as Tooltip from '@radix-ui/react-tooltip';
import { IconButton, TooltipArrow, TooltipContent } from './styles';
import { ReactNode } from 'react';

interface CustomTooltipProps {
  childrenButton: ReactNode
  childrenContent: ReactNode
  tooltipClick: React.MouseEventHandler<HTMLButtonElement>
  tooltipSubmit?: React.MouseEventHandler<HTMLButtonElement>
  side?: string
}

 export function CustomTooltip({childrenButton, childrenContent, tooltipClick, tooltipSubmit, side}: CustomTooltipProps) {
  const tooltipSide = side as "top" | "left" | "right" | "bottom" | undefined;
  
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <IconButton onClick={tooltipClick} onSubmit={tooltipSubmit}>
            {childrenButton}
          </IconButton>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <TooltipContent sideOffset={2} side={tooltipSide}>
            {childrenContent}
            <TooltipArrow />
          </TooltipContent>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};
