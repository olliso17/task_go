import { getListAll } from "@/services/handler/list_handler";
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, Box, Flex, IconButton, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useColorModeValue } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { OutputListDto } from "@/services/dto/list_dto";
import CreateTask from "../CreateTask";
import { AiFillDelete } from "react-icons/ai";
import AccordionTasks from "../AcordionTasks";


const ListAll = () => {
    const { data } = useQuery("lists", getListAll);
    const bgFlex = useColorModeValue('purple.300', 'purple.800')
    const bgAccordion = useColorModeValue('purple.600', 'purple.800')
    return (

        <Flex flexDirection="column" overflow="auto" height="66vh" width="18vw">
            {data?.map((list: OutputListDto) => (
                <Flex rounded="2xl" padding="8px" flexDirection="column" backgroundColor={bgFlex} margin="4px">
                    <Accordion rounded="2xl" textColor="purple.100" backgroundColor={bgAccordion} className=" text-violet-100 container" defaultIndex={[0]} allowMultiple>
                        <Tabs variant='enclosed'>
                            <TabList>
                                <Tab textColor="white">{list.name}</Tab>
                                <Tab textColor="white">Create tasks</Tab>
                            </TabList>
                            <TabPanels>
                                <TabPanel>
                                    <AccordionItem>
                                        <h2>
                                            <AccordionButton>
                                                <Box as="span" flex='1' textAlign='left'>
                                                    <Text>Tasks created</Text>
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
                    </Accordion>
                    <IconButton
                        className="w-3/12 m-2"
                        variant='outline'
                        colorScheme='purple'
                        aria-label='Send name'
                        icon={<AiFillDelete />}
                    />
                </Flex>))}
        </Flex>


    )
}
export default ListAll