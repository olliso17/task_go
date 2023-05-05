import { useColorsPhone } from "@/hooksPerson/colorsPhone"
import { TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"
import TabNameAdd from "../CardStylePhone/TabNameAdd"

interface Props {
    contentCreateList: JSX.Element
    contentListAll: JSX.Element

}


const TableLoginOk = ({ contentCreateList, contentListAll }: Props) => {
    const allColors = useColorsPhone()

    return (
        <Tabs rounded="2xl" isFitted variant='enclosed'>
            <TabList borderColor="purple.400" mb="lem">
                <TabNameAdd nameTab="Create List" />
                <TabNameAdd nameTab="ListAll" />
            </TabList>
            <TabPanels>
                <TabPanel height="40vh" backgroundColor={allColors.bgCenter} width="20vw" padding="0">
                    {contentCreateList}
                </TabPanel>
                <TabPanel rounded="2xl" height="67vh" backgroundColor={allColors.bgCenter} width="20vw" overflow="auto" padding="0">
                    {contentListAll}
                </TabPanel>

            </TabPanels>
        </Tabs>
    )

}

export default TableLoginOk