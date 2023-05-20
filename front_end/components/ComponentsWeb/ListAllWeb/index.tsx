import { getListAll } from "@/services/handler/list_handler";
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, Box, Button, Card, CardBody, CardFooter, CardHeader, Center, Flex, FormControl, Heading, IconButton, Input, Progress, SimpleGrid, Stack, StackDivider, TabPanel, TabPanels, Tabs, Text, useColorMode } from "@chakra-ui/react";
import { OutputListDto } from "@/services/dto/list_dto";
import { AiFillDelete } from "react-icons/ai";
import { useQuery } from "react-query";
import { useColorsPhone } from "@/hooksPerson/colorsPhone";
import { Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import { Form, Formik } from "formik";
import { useMutationDeleteList } from "@/services/handler/muation";
import Lottie from "lottie-react";
import * as deleteAnimation from "public/delete.json";
import CreateTaskWeb from "../CreateTaskWeb";
import ListTasksWeb from "../ListTasksWeb";
import { useGetListAll } from "@/services/handler/facace_list";



const ListAllWeb = () => {
    const allColors = useColorsPhone();
    const mutation = useMutationDeleteList();
    const [lists, setLists]= useState<OutputListDto[]>([]);
    const style = { whidth: 50, height: 50, };
    const initialValues = { id: '' };
    // const lists = useContext(LayoutContext).lists
   
    async function  getListAll() {
        try {
            const getList = await useGetListAll();
            setLists(getList)
       
        } catch (err) {
            console.log(err);
        }
    }
    
    useEffect(() =>{
     
        getListAll()
    },[lists])

    return (
        <Flex alignItems="start" justifyContent="space-between" wrap="wrap">
            {lists?.map((list: OutputListDto) => (
                <SimpleGrid key={list.id.toString()} spacing={4} margin="0.5vw">
                    
                    <Card padding="0" width="20vw" height="60vh" rounded="2xl" backgroundColor={allColors.bgCenter} boxShadow="dark-lg">
                        <Flex width="20vw" height="56vh" overflow="auto"  __css={{
                        '&::-webkit-scrollbar-button': {
                            w: '2',
                         
                        },
                        '&::-webkit-scrollbar': {
                            w: '2',
                       
                        },
                        '&::-webkit-scrollbar-track': {
                            w: '2',
                           
                        },
                        '&::-webkit-scrollbar-thumb': {
                            borderRadius: '10',
                            bg: `purple.500`,
                        },

                    }}>
                            <Tabs>
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
                                    <CreateTaskWeb list={list} />
                                    <TabPanels>
                                        <TabPanel>
                                            {list.tasks?.map((task) => (
                                                <ListTasksWeb task={task} list_id={list.id}/>
                                            ))}
                                        </TabPanel>
                                    </TabPanels>
                                </CardBody>
                            </Tabs>
                        </Flex>

                        <Formik
                            initialValues={initialValues}
                            onSubmit={() => {
                                mutation.mutate({ id: list.id })

                            }}
                        >
                            {(props) => (

                                <Form >
                                    <Flex justifyContent="end" >
                                        <IconButton type="submit" aria-label="" backgroundColor={allColors.bgAccordion} icon={<Lottie style={style} animationData={deleteAnimation} />} />
                                    </Flex>
                                </Form>


                            )}
                        </Formik>

                    </Card>
                </SimpleGrid >

            ))}
        </Flex>
    )
}
export default ListAllWeb

