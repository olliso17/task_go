import React, { MouseEventHandler } from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';
import { PlusIcon } from '@radix-ui/react-icons';

interface Props{
    onClick: MouseEventHandler<HTMLButtonElement>
}

const TooltipTask = ({onClick}:Props) => {
    return (
        <Tooltip.Provider>
            <Tooltip.Root>
                <Tooltip.Trigger asChild>
                    <button onClick={onClick} className="rounded-full m-2 bg-white w-9 h-9  inline-flex justify-center items-center text-violet-900 hover:bg-violet-500 hover:text-white">
                        <PlusIcon />
                    </button>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                    <Tooltip.Content className="bg-white rounded-md p-3 text-sm text-violet-900" sideOffset={5}>
                        Add to Taks
                        <Tooltip.Arrow className="TooltipArrow" />
                    </Tooltip.Content>
                </Tooltip.Portal>
            </Tooltip.Root>
        </Tooltip.Provider>
    );
};

export default TooltipTask;