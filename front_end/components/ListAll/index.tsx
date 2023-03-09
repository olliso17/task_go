<<<<<<< HEAD
import { getListAll } from "@/services/handler/list_handler";
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, Box, Flex, IconButton, Progress, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useColorModeValue } from "@chakra-ui/react";
=======
import { useHandlerList } from "@/services/handler/list_handler";
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, Box, Flex, IconButton, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useColorModeValue } from "@chakra-ui/react";
>>>>>>> e5ce48ab5d8f7a9abc4b8d99eb452eae4909fd2e
import { useQuery } from "react-query";
import { OutputListDto } from "@/services/dto/list_dto";
import CreateTask from "../CreateTask";
import { AiFillDelete } from "react-icons/ai";
import AccordionTasks from "../AcordionTasks";
<<<<<<< HEAD
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
=======
import { useColors } from "@/hooksPerson/colors";


const ListAll = () => {
    const useQueryListAll = useHandlerList();
    const allColors = useColors()
    const listTest:OutputListDto = {id:'1', name:"list1", tasks:[{id:'1', title:"task1", description:"radad"},{id:'2', title:"task2", description:"asdasd"}]}
    return (

        /*useQueryListAll.getListAll?.map((list: OutputListDto) => (*/
            <Flex rounded="2xl" flexDirection="column" margin="4px">
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
>>>>>>> e5ce48ab5d8f7a9abc4b8d99eb452eae4909fd2e
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
<<<<<<< HEAD
                                    {list.tasks?.map((task) => (
                                        <AccordionTasks  task={task} />
                                    ))}
=======
                                    {/*list.tasks?.map((task) => (*/
                                    listTest.tasks.map((task) => 
                                        <AccordionTasks key={task.id.toString()} task={task} />
                                    )}
>>>>>>> e5ce48ab5d8f7a9abc4b8d99eb452eae4909fd2e
                                </AccordionItem>
                            </TabPanel>
                            <TabPanel>
                                <CreateTask list_id={/*list.id*/ listTest.id} />
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
            /*))*/


    )
}
export default ListAll