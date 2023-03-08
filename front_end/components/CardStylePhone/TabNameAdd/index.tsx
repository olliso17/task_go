
import { Tab, Text, useColorModeValue } from "@chakra-ui/react"

interface Props{
    nameTab:string
}
const TabNameAdd = ({nameTab}:Props) => {
    const textColor = useColorModeValue('gray.700', 'white')
    const bgGradientColor = useColorModeValue('linear(to-l, purple.900, purple.600)', 'linear(to-l, purple.500, purple.200)')
    return (
        <Tab roundedTop="2xl" textColor={textColor}>
            <Text
                bgGradient={bgGradientColor}
                bgClip='text'
                fontSize='1xl'
                fontWeight='extrabold'
            >{nameTab}</Text>
        </Tab>
    )
}

export default TabNameAdd