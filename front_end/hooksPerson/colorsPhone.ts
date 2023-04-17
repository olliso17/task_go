import { useColorModeValue } from "@chakra-ui/react";

const useBgAccordion = ()=>useColorModeValue('purple.300', 'purple.800')
const useBgAccordionButton =()=> useColorModeValue('purple.400', 'purple.900')
const useBgGradientColor =()=> useColorModeValue('linear(to-l, purple.900, purple.700)', 'linear(to-l, purple.500, purple.200)')
const useBg =()=> useColorModeValue('white', 'purple.700')
const useBgCenter = ()=>useColorModeValue('purple.200', 'purple.900')
const useColorCenter =()=> useColorModeValue('gray.700', 'gray.900')
const useTextColor = ()=>useColorModeValue('gray.700', 'white')
const useBgHeadingGradientColor =()=>useColorModeValue('linear(to-l, purple.500, purple.900)', 'linear(to-l, purple.600, purple.200)')

const useColorsPhone=()=>{
   
    const bgAccordion = useBgAccordion()
    const bgAccordionButton = useBgAccordionButton()
    const bgGradientColor = useBgGradientColor()
    const bgCenter = useBgCenter()
    const bg =useBg()
    const colorCenter = useColorCenter()
    const textColor = useTextColor()
    const bgHeadingGradientColor = useBgHeadingGradientColor()
    const allColors={
        bgAccordion, bgAccordionButton, bgGradientColor, bg, bgCenter, colorCenter, textColor, bgHeadingGradientColor
    }
    return allColors
}
export {useColorsPhone}