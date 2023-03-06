import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"
import ListAll from "../ListAll"

interface Props {
    contentCreateList: JSX.Element
    contentListAll: JSX.Element
    styleCss: string

}

const CardStylePhone = ({ styleCss, contentCreateList,contentListAll }: Props) => (
    <div className="bg-black w-96 h-4/5 p-2 rounded-2xl shadow-[0_10px_6px_4px_rgba(0,0,0,0.3)]">
        <div className={styleCss}>
            <Tabs variant='enclosed'>
                <TabList>
                    <Tab>List</Tab>
                    <Tab>ListAll</Tab>
                    <Tab>Task</Tab>
                    <Tab>TaskAll</Tab>

                </TabList>
                <TabPanels>
                    <TabPanel>
                        {contentCreateList}
                    </TabPanel>
                    <TabPanel>
                       {contentListAll}
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>

    </div>
)


export default CardStylePhone