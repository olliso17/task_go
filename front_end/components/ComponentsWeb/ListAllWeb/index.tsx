import { getListAll } from "@/services/handler/list_handler";
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, Box, Button, Card, CardBody, CardFooter, CardHeader, Center, Flex, FormControl, Heading, IconButton, Input, Progress, SimpleGrid, Stack, StackDivider, TabPanel, TabPanels, Tabs, Text, useColorMode } from "@chakra-ui/react";
import { OutputListDto } from "@/services/dto/list_dto";
import { AiFillDelete } from "react-icons/ai";
import { useQuery } from "react-query";
import { useColorsPhone } from "@/hooksPerson/colorsPhone";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Form, Formik } from "formik";
import { useMutationDeleteList } from "@/services/handler/muation";
import Lottie from "lottie-react";
import * as deleteAnimation from "public/delete.json";
import CreateTask from "@/components/ComponentsPhone/CreateTask";
import AcordionTasks from "@/components/ComponentsPhone/AcordionTasks";
import CreateTaskWeb from "../CreateTaskWeb";
import ListTasksWeb from "../ListTasksWeb";



const ListAllWeb = () => {
    const { data: lists } = useQuery("lists", getListAll);
    const allColors = useColorsPhone();
    const mutation = useMutationDeleteList();
    const { colorMode, toggleColorMode } = useColorMode()


    const style = { whidth: 50, height: 50, };
    const initialValues = { id: '' };
    useEffect(() => {
        lists
    }, lists)

    return (
        <Flex alignItems="start" justifyContent="space-between" wrap="wrap">
            {lists?.map((list: OutputListDto) => (

                <SimpleGrid key={list.id.toString()} spacing={4} margin="0.5vw">
                    <Card padding="0" width="20vw" height="60vh" overflow="auto" __css={{
                        '&::-webkit-scrollbar-button': {
                            w: '1',
                            h: '1',
                        },
                        '&::-webkit-scrollbar': {
                            w: '1',
                            h: '1',
                        },
                        '&::-webkit-scrollbar-track': {
                            w: '1',
                            h: '1',
                        },
                        '&::-webkit-scrollbar-thumb': {
                            borderRadius: '10',
                            bg: `purple.500`,
                        },
                       
                    }} rounded="2xl" boxShadow="dark-lg">
                        <Accordion rounded="2xl" backgroundColor={allColors.bgAccordion}>
                            <Tabs variant='enclosed' >
                                <Center>
                                    <CardHeader padding="0.5vw" >
                                        <Heading size='xs' textTransform='uppercase'
                                            marginLeft="0.5vw"
                                            bgGradient={allColors.bgHeadingGradientColor}
                                            bgClip='text'
                                            fontSize='md'
                                            fontWeight='extrabold'>{list.name}
                                        </Heading>
                                    </CardHeader>
                                </Center>
                                <CardBody padding="0">
                                    <CreateTaskWeb list_id={list.id} />

                                    <TabPanels>
                                        <TabPanel>
                                            {list.tasks?.map((task) => (
                                                <ListTasksWeb task={task} list_id={list.id} />
                                            ))}
                                        </TabPanel>
                                    </TabPanels>
                                </CardBody>
                            </Tabs>
                            <Formik
                                initialValues={initialValues}
                                onSubmit={() => {
                                    mutation.mutate({ id: list.id })

                                }}
                            >
                                {(props) => (

                                    <Form >
                                        <Flex justifyContent="end">
                                            <IconButton type="submit" aria-label="" backgroundColor={allColors.bgAccordion} icon={<Lottie style={style} animationData={deleteAnimation} />} />
                                        </Flex>
                                    </Form>


                                )}
                            </Formik>
                        </Accordion>

                    </Card>
                </SimpleGrid >

            ))}
        </Flex>
    )
}
export default ListAllWeb