import { Box, Center, Heading, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useColorModeValue } from "@chakra-ui/react"

interface Props {
    contentCreateList: JSX.Element
    contentListAll: JSX.Element

}

const CardStylePhone = ({ contentCreateList, contentListAll }: Props) => {
    const bgFlex = useColorModeValue('purple.300', 'purple.800')
    const bg = useColorModeValue('purple.200', 'purple.900')
    const textColor = useColorModeValue('gray.700', 'white')
    const colorCenter = useColorModeValue('gray.700', 'gray.900')
    const bgGradientColor = useColorModeValue('linear(to-l, purple.900, purple.600)', 'linear(to-l, purple.500, purple.200)')

    return (
        <Center backgroundColor={colorCenter} width="20vw" height="76vh" padding="8px" boxShadow='dark-lg' rounded="2xl">
            <Box backgroundColor={bg} width="19vw" borderRadius="16px" rounded="2xl" height="74vh">
                <Tabs rounded="2xl" isFitted variant='enclosed'>
                    <TabList borderColor="purple.400" mb="lem">
                        <Tab roundedTop="2xl" textColor={textColor}>
                            <Text
                                bgGradient={bgGradientColor}
                                bgClip='text'
                                fontSize='1xl'
                                fontWeight='extrabold'
                            >List</Text></Tab>
                        <Tab roundedTop="2xl" backgroundColor={bgFlex}>
                            <Text
                                bgGradient={bgGradientColor}
                                bgClip='text'
                                fontSize='1xl'
                                fontWeight='extrabold'
                            >ListAll</Text>
                        </Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel height="68vh" width="19vw"  padding="0">
                            {contentCreateList}
                        </TabPanel>
                        <TabPanel height="68vh" backgroundColor={bgFlex} width="19vw" overflow="auto" padding="0">
                            {contentListAll}
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>

        </Center>
    )
}

export default CardStylePhone