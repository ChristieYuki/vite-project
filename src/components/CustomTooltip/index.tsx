import * as Tooltip from '@radix-ui/react-tooltip';
import { TooltipContent, TooltipArrow, IconButton } from "./styles";
import { ReactNode } from 'react';
interface CustomTooltipProps {
  childrenButton: ReactNode;
  childrenContent: ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  onSubmit?: React.MouseEventHandler<HTMLButtonElement>;
  side?: string;
}

const CustomTooltip = ({childrenButton, childrenContent, onClick, onSubmit, side}: CustomTooltipProps) => {
  const dataSide = side as 'bottom' | 'left' | 'right' | 'top' | undefined;
  
  return (
    <Tooltip.Provider >
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <IconButton onClick={onClick} onSubmit={onSubmit}>
            {childrenButton}
          </IconButton>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <TooltipContent sideOffset={5} side={dataSide}>
            {childrenContent}
            <TooltipArrow />
          </TooltipContent>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};

export default CustomTooltip;
