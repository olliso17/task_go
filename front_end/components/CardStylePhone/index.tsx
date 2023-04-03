
import { useColors } from "@/hooksPerson/colors"
import { Box, Center, Flex, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useColorModeValue } from "@chakra-ui/react"
import TabNameAdd from "./TabNameAdd"
import LoginAcess from "../LoginAcess"

interface Props {
    content: JSX.Element

}

const CardStylePhone = ({content}: Props) => {
    const allColors = useColors()

    return (
        <Flex width="100vw" justifyContent="center" alignItems="center" flexDirection="column" height="100vh">
            <Center backgroundColor={allColors.colorCenter} width="20vw" height="76vh" padding="8px" boxShadow='dark-lg' rounded="2xl">
                <Box backgroundColor={allColors.bgCenter} width="19vw" borderRadius="16px" rounded="2xl" height="74vh">
                   {content}
                </Box>
            </Center>
        </Flex >
    )
}

export default CardStylePhone