
import { useColors } from "@/styles/colors"
import { Box, Center, Flex, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useColorModeValue} from "@chakra-ui/react"
import TabNameAdd from "./TabNameAdd"

interface Props {
    contentCreateList: JSX.Element
    contentListAll: JSX.Element

}

const CardStylePhone = ({ contentCreateList, contentListAll }: Props) => {
    const allColors = useColors()

    return (
        <Flex width="100vw" justifyContent="center" alignItems="center" flexDirection="column" height="100vh">
            <Center backgroundColor={allColors.colorCenter} width="20vw" height="76vh" padding="8px" boxShadow='dark-lg' rounded="2xl">
                <Box backgroundColor={allColors.bgCenter} width="19vw" borderRadius="16px" rounded="2xl" height="74vh">
                    <Tabs rounded="2xl" isFitted variant='enclosed'>
                        <TabList borderColor="purple.400" mb="lem">
                            <TabNameAdd nameTab="Create List"/>
                            <TabNameAdd nameTab="ListAll"/>
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
                </Box>

            </Center>
        </Flex >
    )
}

export default CardStylePhone