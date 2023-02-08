import * as Tabs from '@radix-ui/react-tabs';

export default () => (
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
            <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
                <button className="focus:bg-green-400 bg-green-200 text-green-700 inline-flex items-center justify-center rounded p-4 text-base font-medium h-9">Add List</button>
            </div>
        </Tabs.Content >
    </Tabs.Root>
);