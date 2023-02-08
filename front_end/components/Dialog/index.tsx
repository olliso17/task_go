import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';

const DialogDemo = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="">
        Edit profile
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="" />
      <Dialog.Content className="">
        <Dialog.Title className="">Tasks</Dialog.Title>

        <h1 className='text-center m-1'>Tasks</h1>
        <fieldset className="w-full p-2 flex flex-col justify-start">
          <label className="mb-3 text-sm mt-0" htmlFor="titleTask">
            Title
          </label>
          <input className="h-9 p-2 text-sm text-violet-400 focus:bg-violet-50" id="titleTask" defaultValue="Add Title Task" />
        </fieldset>
        <fieldset className="w-full p-2 flex flex-col justify-start">
          <label className="mb-3 text-sm mt-0" htmlFor="descriptionTask">
            Description
          </label>
          <input className="h-9 p-2 text-sm text-violet-400 focus:bg-violet-50" id="descriptionTask" defaultValue="Add Description Task" />
        </fieldset>
        <fieldset className="w-1/3 p-2 flex flex-row justify-between">
          <label className="mb-3 text-sm mt-0" htmlFor="priorityTask">
            Priority
          </label>
          <input className="h-5 text-sm text-violet-400 focus:bg-violet-50" id="priorityTask" type="checkbox" />
        </fieldset>
        {/* <fieldset className="w-1/3 p-2 flex flex-row justify-between">
                <label className="mb-3 text-sm mt-0" htmlFor="concludedTask">
                   Concluded
                </label>
                <input className="h-5 text-sm text-violet-400 focus:bg-violet-50" id="concludedTask" type="checkbox" />
            </fieldset> */}
        <fieldset className="w-2/3 p-2 flex flex-row justify-between">
          <label className="mb-3 text-sm mt-0" htmlFor="timeTask">
            Time
          </label>
          <input className="h-5 w-2/4 text-sm text-violet-400 focus:bg-violet-50" id="timeTask" type="time" />
        </fieldset>
 
        <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
          <Dialog.Close asChild>
          <button className="focus:bg-green-400 bg-green-200 text-green-700 inline-flex items-center justify-center rounded p-4 text-base font-medium h-9">Add List</button>
          </Dialog.Close>
        </div>
        <Dialog.Close asChild>
          <button className="IconButton" aria-label="Close">
            <Cross2Icon />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default DialogDemo;