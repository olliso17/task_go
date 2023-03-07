import { Box, Center, Heading, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, useColorModeValue } from "@chakra-ui/react"

interface Props {
    contentCreateList: JSX.Element
    contentListAll: JSX.Element
    styleCss: string

}

const CardStylePhone = ({ styleCss, contentCreateList, contentListAll }: Props) => {
    const bg = useColorModeValue('purple.200', 'purple.900')
    const textColor = useColorModeValue('gray.700','white')
    const colorSatack = useColorModeValue('gray.700','gray.900')
    return (
        <Center backgroundColor={colorSatack} width="20vw" p='6' height="76vh" padding="8px" boxShadow='dark-lg' rounded="2xl">
            <Box backgroundColor={bg} width="19vw" borderRadius="16px" rounded="2xl" height="74vh">
                <Tabs isFitted variant='enclosed'>
                    <TabList borderColor="purple.400" mb="lem">
                        <Tab  textColor={textColor}>List</Tab>
                        <Tab textColor={textColor}>ListAll</Tab>

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
            </Box>

        </Center>
    )
}

export default CardStylePhone