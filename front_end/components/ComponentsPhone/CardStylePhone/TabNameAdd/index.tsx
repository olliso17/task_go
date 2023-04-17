

import { useColorsPhone } from "@/hooksPerson/colorsPhone"
import { Tab, Text} from "@chakra-ui/react"

interface Props{
    nameTab:string
}
const TabNameAdd = ({nameTab}:Props) => {
    const allColors = useColorsPhone()
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