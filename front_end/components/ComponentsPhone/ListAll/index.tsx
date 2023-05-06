import { getListAll } from "@/services/handler/list_handler";
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, Box, Button, Card, CardBody, CardFooter, CardHeader, Center, Flex, FormControl, Heading, IconButton, Input, Progress, SimpleGrid, Stack, StackDivider, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import { OutputListDto } from "@/services/dto/list_dto";
import CreateTask from "../CreateTask";
import { AiFillDelete } from "react-icons/ai";
import { useQuery } from "react-query";
import { useColorsPhone } from "@/hooksPerson/colorsPhone";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import AcordionTasks from "../AcordionTasks";
import { Form, Formik } from "formik";
import { useMutationDeleteList } from "@/services/handler/muation";

interface Props {
    setAlert: Dispatch<SetStateAction<JSX.Element>>
}

const ListAll = ({ setAlert }: Props) => {
    const { data: lists } = useQuery("lists", getListAll);
    const allColors = useColorsPhone();
    const [id, setId] = useState('')
    const mutation = useMutationDeleteList();
    const initialValues = { id: '' };
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
                        <Formik
                            initialValues={initialValues}
                            onSubmit={() => {
                                mutation.mutate({ id })

                            }}
                        >
                            {(props) => (

                                <Form >
                                    <FormControl >
                                        <Input hidden={true} onChange={() => { setId(list.id) }} />
                                    </FormControl>
                                    <CardFooter justifyContent="end" padding="0.3vw">
                                    <Button
                                        mt={4}
                                        backgroundColor="red.600"
                                        colorScheme='red'
                                        textColor="white"
                                        type='submit'
                                    >
                                        Delete
                                    </Button>
                                    </CardFooter>
                                </Form>


                            )}
                        </Formik>
                    </Accordion>

                </Card>
            </SimpleGrid >
        ))

    )
}
export default ListAll