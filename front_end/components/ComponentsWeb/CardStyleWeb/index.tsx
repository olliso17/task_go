
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
            <Center margin="1vw" backgroundColor={allColors.colorCenter} width="95vw" height="95vh" padding="8px" boxShadow='dark-lg' rounded="2xl">
                <Box justifyContent="center" rounded="2xl" alignItems="center" backgroundColor={allColors.bgCenter} width="94vw" height="93vh">
                    {content}
                </Box>

            </Center>
        </Flex >
    )
}

export default CardStyleWeb