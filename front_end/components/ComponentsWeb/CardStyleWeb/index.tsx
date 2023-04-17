
import { useColorsWeb } from "@/hooksPerson/colorsWeb"
import { Box, Center, Flex, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useColorModeValue } from "@chakra-ui/react"

interface Props {
    content: JSX.Element

}

const CardStyleWeb = ({content}: Props) => {
    const allColors = useColorsWeb()

    return (
        <Flex width="100vw" justifyContent="center" alignItems="center" flexDirection="column" height="100vh">
            <Center backgroundColor={allColors.colorCenter} width="95vw" height="95vh" padding="8px" boxShadow='dark-lg' rounded="2xl">
                <Box backgroundColor={allColors.bgCenter} width="94vw" borderRadius="16px" rounded="2xl" height="93vh">
                   {content}
                </Box>
            </Center>
        </Flex >
    )
}

export default CardStyleWeb