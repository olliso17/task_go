import { Box, Center, Flex } from "@chakra-ui/react"
import { useColorsPhone } from "@/hooksPerson/colorsPhone"
import { ReactNode } from "react"

interface Props {
    content: JSX.Element
}

const CardStylePhone = ({content}: Props) => {
    const allColors = useColorsPhone()

    return (
        <Flex width="100vw" justifyContent="center" alignItems="center" flexDirection="column" height="100vh">
            <Center backgroundColor={allColors.colorCenter} width="21vw" height="76vh" padding="0.5vw" boxShadow='dark-lg' rounded="2xl">
                <Box backgroundColor={allColors.bgCenter} width="20vw" borderRadius="0.5vw" rounded="2xl" height="74vh">
                   {content}
                </Box>
            </Center>
        </Flex >
    )
}

export default CardStylePhone