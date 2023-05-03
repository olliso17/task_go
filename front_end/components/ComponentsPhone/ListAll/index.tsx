import { getListAll } from "@/services/handler/list_handler";
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, Box, Center, Flex, IconButton, Progress, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import { OutputListDto } from "@/services/dto/list_dto";
import CreateTask from "../CreateTask";
import { AiFillDelete } from "react-icons/ai";
import AccordionTasks from "../AcordionTasks/AcordionTasksCheckbox";
import { useQuery } from "react-query";
import { useColorsPhone } from "@/hooksPerson/colorsPhone";
import { getLogin } from "@/services/handler/login_handler";
import { useEffect } from "react";
import AccordionTasksCheckbox from "../AcordionTasks/AcordionTasksCheckbox";
import AcordionTasks from "../AcordionTasks";


const ListAll = () => {
    const { data: lists } = useQuery("lists", getListAll);
    const allColors = useColorsPhone();
    useEffect(() => {
        lists
    })

    return (

        lists?.map((list: OutputListDto) => (
            <Flex key={list.id.toString()} rounded="2xl" flexDirection="column" margin="4px">
                <Accordion rounded="2xl" backgroundColor={allColors.bgAccordion} defaultIndex={[0]} allowMultiple>
                    <Tabs variant='enclosed'>
                        <Center roundedTop="2xl" textColor="white">
                            <Text
                                marginLeft="16px"
                                bgGradient={allColors.bgGradientColor}
                                bgClip='text'
                                fontSize='md'
                                fontWeight='extrabold'
                            >{list.name}
                            </Text>
                        </Center>
                        <TabPanels>
                            <TabPanel>
                                <AccordionItem>
                                    <Center padding="0.2vw">
                                        <AccordionButton rounded="2xl" backgroundColor={allColors.bgAccordionButton}>
                                            <Box as="span" flex='1' textAlign='left'>
                                                <Text
                                                    marginLeft="16px"
                                                    bgGradient={allColors.bgGradientColor}
                                                    bgClip='text'
                                                    fontSize='md'
                                                    fontWeight='extrabold'
                                                >Add Tasks
                                                </Text>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </Center>
                                    <CreateTask list_id={list.id} />
                                </AccordionItem>
                                <AccordionItem>

                                    <Center padding="0.2vw">
                                        <AccordionButton rounded="2xl" backgroundColor={allColors.bgAccordionButton}>
                                            <Box as="span" flex='1' textAlign='left'>
                                                <Text
                                                    marginLeft="16px"
                                                    bgGradient={allColors.bgGradientColor}
                                                    bgClip='text'
                                                    fontSize='md'
                                                    fontWeight='extrabold'
                                                >Tasks
                                                </Text>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </Center>
                                    {list.tasks?.map((task) => (
                                        <AcordionTasks task={task} list_id={list.id} />
                                    ))}
                                </AccordionItem>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                    <Flex width="full" justifyContent="space-between">
                        <Progress colorScheme="purple" hasStripe value={64} />
                        <IconButton
                            width="2vw"
                            marginRight="8px"
                            backgroundColor="purple.600"
                            rounded="full"
                            textColor="white"
                            aria-label='Delete name'
                            icon={<AiFillDelete />}
                        />
                    </Flex>
                </Accordion>


            </Flex >
        ))


    )
}
export default ListAll