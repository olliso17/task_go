import { getListAll } from "@/services/handler/list_handler";
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, Box, Flex, IconButton, Progress, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useColorModeValue } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { OutputListDto } from "@/services/dto/list_dto";
import CreateTask from "../CreateTask";
import { AiFillDelete } from "react-icons/ai";
import AccordionTasks from "../AcordionTasks";
import TabNameAdd from "../CardStylePhone/TabNameAdd";


const ListAll = () => {
    const { data } = useQuery("lists", getListAll);
    const bgAccordion = useColorModeValue('purple.200', 'purple.800')
    const bgAccordionButton = useColorModeValue('purple.100', 'purple.900')
    const bgGradientColor = useColorModeValue('linear(to-l, purple.900, purple.700)', 'linear(to-l, purple.500, purple.200)')

    return (

        data?.map((list: OutputListDto,) => (
            <Flex key={list.id} rounded="2xl" flexDirection="column" margin="4px">
                <Accordion rounded="2xl" backgroundColor={bgAccordion} defaultIndex={[0]} allowMultiple>
                    <Tabs variant='enclosed'>
                        <TabList borderColor="purple.500">
                            <TabNameAdd nameTab={list.name} />
                            <TabNameAdd nameTab="Create Task" />
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <AccordionItem>
                                    <h2>
                                        <AccordionButton rounded="2xl" backgroundColor={bgAccordionButton}>
                                            <Box as="span" flex='1' textAlign='left'>
                                                <Text
                                                    marginLeft="16px"
                                                    bgGradient={bgGradientColor}
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
                                        <AccordionTasks  task={task} />
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


            </Flex>))


    )
}
export default ListAll