
import { useColorsPhone } from "@/hooksPerson/colorsPhone"
import { Box, Center, Flex, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useColorModeValue } from "@chakra-ui/react"
import { ReactNode } from "react"

interface Props {
    content: JSX.Element | JSX.Element[],

}

const CardStyleWeb = ({ content }: Props) => {
    const allColors = useColorsPhone()

    return (
        <Flex width="100vw" justifyContent="start" alignItems="center" flexDirection="column" height="100vh">
            <Center backgroundColor={allColors.colorCenter} width="95vw" height="90vh" padding="8px" boxShadow='dark-lg' rounded="2xl">
                <Box justifyContent="center" alignItems="center" backgroundColor={allColors.bgCenter} width="94vw" height="88vh">
                    {content}
                </Box>

            </Center>
        </Flex >
    )
}

export default CardStyleWeb