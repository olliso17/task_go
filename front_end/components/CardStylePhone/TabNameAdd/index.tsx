
import { useColors } from "@/styles/colors"
import { Tab, Text, useColorModeValue } from "@chakra-ui/react"

interface Props{
    nameTab:string
}
const TabNameAdd = ({nameTab}:Props) => {
    const allColors = useColors()
    return (
        <Tab roundedTop="2xl" textColor={allColors.textColor}>
            <Text
                bgGradient={allColors.bgGradientColor}
                bgClip='text'
                fontSize='1xl'
                fontWeight='extrabold'
            >{nameTab}</Text>
        </Tab>
    )
}

export default TabNameAdd