import { getListAll} from "@/services/handler/list_handler";
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, Box, Flex, IconButton, Progress, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import { OutputListDto } from "@/services/dto/list_dto";
import CreateTask from "../CreateTask";
import { AiFillDelete } from "react-icons/ai";
import AccordionTasks from "../AcordionTasks";
import { useQuery } from "react-query";
import { useColorsPhone } from "@/hooksPerson/colorsPhone";


const ListAll = () => {
    const {data} = useQuery("lists", getListAll);
    const allColors = useColorsPhone()

    return (

        data?.map((list: OutputListDto) => (
            <Flex key={list.id} rounded="2xl" flexDirection="column" margin="4px">
                <Accordion rounded="2xl" backgroundColor={allColors.bgAccordion} defaultIndex={[0]} allowMultiple>
                    <Tabs variant='enclosed'>
                        <TabList borderColor="purple.500">
                            <Tab roundedTop="2xl" textColor="white">
                                <Text
                                    marginLeft="16px"
                                    bgGradient={allColors.bgGradientColor}
                                    bgClip='text'
                                    fontSize='md'
                                    fontWeight='extrabold'
                                >{/*list.name*/}
                                </Text>
                            </Tab>
                            <Tab roundedTop="2xl" textColor="white">
                                <Text
                                    marginLeft="16px"
                                    bgGradient={allColors.bgGradientColor}
                                    bgClip='text'
                                    fontSize='md'
                                    fontWeight='extrabold'
                                >Create Task
                                </Text>
                            </Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <AccordionItem>
                                    <h2>
                                        <AccordionButton rounded="2xl" backgroundColor={allColors.bgAccordionButton}>
                                            <Box as="span" flex='1' textAlign='left'>
                                                <Text
                                                    marginLeft="16px"
                                                    bgGradient={allColors.bgGradientColor}
                                                    bgClip='text'
                                                    fontSize='md'
                                                    fontWeight='extrabold'
                                                >Tasks created
                                                </Text>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    {list.tasks?.map((task) => (
                                        <AccordionTasks key={task.id.toString()} task={task} />
                                    ))}
                                </AccordionItem>
                            </TabPanel>
                            <TabPanel>
                                <CreateTask list_id={list.id} />
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


            </Flex>
            ))


    )
}
export default ListAll