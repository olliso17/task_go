import * as Tabs from '@radix-ui/react-tabs';

export default () => (
  <Tabs.Root className="h-full w-1/5 bg-blue-100">
    <Tabs.List className="bg-blue-500 p-2 text-center text-slate-100" defaultValue="tab1">
      <Tabs.Trigger className="TabsTrigger" value="tab1">
           Add List Task
        </Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content className="text-black" value="tab1">
        <p>Test</p>
    </Tabs.Content >
  </Tabs.Root>
);