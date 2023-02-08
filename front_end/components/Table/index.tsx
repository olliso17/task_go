import * as Tabs from '@radix-ui/react-tabs';

export default () => (
    <Tabs.Root className="h-full w-2/6 bg-blue-100 flex flex-col justify-between">
        <Tabs.List className="bg-blue-500 p-2 text-center text-slate-100" defaultValue="tab1">
            <Tabs.Trigger className="TabsTrigger" value="tab1">
                Add List Task
            </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content className="flex-grow p-5 bg-white outline-none focus: shadow-md" value="tab1">
            <fieldset className="w-full flex flex-col justify-start">
                <label className="mb-3 text-xs mt-0" htmlFor="name">
                    List
                </label>
                <input className="w-2/3" id="name" defaultValue="Pedro Duarte" />
            </fieldset>
        </Tabs.Content >      
    </Tabs.Root>
);