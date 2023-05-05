import { getListAll } from "@/services/handler/list_handler";
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, Box, Card, CardBody, CardFooter, CardHeader, Center, Flex, Heading, IconButton, Progress, SimpleGrid, Stack, StackDivider, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import { OutputListDto } from "@/services/dto/list_dto";
import CreateTask from "../CreateTask";
import { AiFillDelete } from "react-icons/ai";
import { useQuery } from "react-query";
import { useColorsPhone } from "@/hooksPerson/colorsPhone";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import AcordionTasks from "../AcordionTasks";

interface Props {
    setAlert: Dispatch<SetStateAction<JSX.Element>>
}

const ListAll = ({ setAlert }: Props) => {
    const { data: lists } = useQuery("lists", getListAll);
    const allColors = useColorsPhone();

    useEffect(() => {
        lists
    })

    return (

        lists?.map((list: OutputListDto) => (
            <SimpleGrid key={list.id.toString()} spacing={4} margin="0.5vw">
                <Card padding="0" rounded="2xl" boxShadow="dark-lg">
                    <Accordion rounded="2xl" backgroundColor={allColors.bgAccordion} defaultIndex={[0]} allowMultiple>
                        <Tabs variant='enclosed' >
                            <Center>
                                <CardHeader padding="0.5vw" >
                                    <Heading  size='xs' textTransform='uppercase'
                                        marginLeft="0.5vw"
                                        bgGradient={allColors.bgHeadingGradientColor}
                                        bgClip='text'
                                        fontSize='md'
                                        fontWeight='extrabold'>{list.name}
                                    </Heading>
                                </CardHeader>
                            </Center>
                            <CardBody padding="0">
                                <TabPanels>
                                    <TabPanel>
                                        <AccordionItem>
                                            <Center padding="0.2vw">
                                                <AccordionButton padding="0" height="5vh" boxShadow="dark-lg" rounded="0.5vw" backgroundColor={allColors.bgAccordionButton}>
                                                    <Box as="span" flex='1' textAlign='left'>
                                                        <Text
                                                            marginLeft="0.5vw"
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
                                                <AccordionButton padding="0" height="5vh" boxShadow="dark-lg" rounded="0.5vw" backgroundColor={allColors.bgAccordionButton}>
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
                                                <AcordionTasks setAlert={setAlert} task={task} list_id={list.id} />
                                            ))}
                                        </AccordionItem>
                                    </TabPanel>
                                </TabPanels>
                            </CardBody>
                        </Tabs>
                        <CardFooter justifyContent="end" padding="0.3vw">
                            <Progress colorScheme="purple" hasStripe value={64} />
                            <IconButton
                                boxShadow="dark-lg"
                                width="2vw"
                                marginRight="0.2vw"
                                backgroundColor="red.700"
                                rounded="full"
                                textColor="white"
                                aria-label='Delete name'
                                icon={<AiFillDelete />}
                            />
                        </CardFooter>
                    </Accordion>

                </Card>
            </SimpleGrid >
        ))

    )
}
export default ListAll