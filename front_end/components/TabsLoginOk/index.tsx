import { TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"
import TabNameAdd from "../CardStylePhone/TabNameAdd"
import { useColors } from "@/hooksPerson/colors"

interface Props {
    contentCreateList: JSX.Element
    contentListAll: JSX.Element

}


const TableLoginOk = ({ contentCreateList, contentListAll }: Props) => {
    const allColors = useColors()

    return (
        <Tabs rounded="2xl" isFitted variant='enclosed'>
            <TabList borderColor="purple.400" mb="lem">
                <TabNameAdd nameTab="Create List" />
                <TabNameAdd nameTab="ListAll" />
            </TabList>
            <TabPanels>
                <TabPanel height="68vh" backgroundColor={allColors.bgCenter} width="19vw" padding="0">
                    {contentCreateList}
                </TabPanel>
                <TabPanel height="68vh" backgroundColor={allColors.bgCenter} width="19vw" overflow="auto" padding="0">
                    {contentListAll}
                </TabPanel>

            </TabPanels>
        </Tabs>
    )

}

export default TableLoginOk