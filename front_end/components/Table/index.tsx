import DialogTask from '../Dialog/index';
import * as Tabs from '@radix-ui/react-tabs';

const TableTask =  () => (
    <Tabs.Root className="h-full w-2/6 bg-blue-100 flex flex-col justify-between">
        <Tabs.List className="bg-blue-500 p-2 text-center text-slate-100" defaultValue="tab1">
            <Tabs.Trigger className="TabsTrigger" value="tab1">
                Add List Task
            </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content className="flex-grow p-5 bg-white outline-none focus: shadow-md" value="tab1">
        <fieldset className="w-full p-2 flex flex-col justify-start">
          <label className="mb-3 text-sm mt-0" htmlFor="nameList">
            Name List
          </label>
          <input className="h-9 p-2 text-sm text-violet-400 focus:bg-violet-50" id="nameList" defaultValue="Add Name List" />
        </fieldset>
        <DialogTask/>
        </Tabs.Content >
    </Tabs.Root>
);
export default TableTask;