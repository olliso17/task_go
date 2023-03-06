import { getListAll } from "@/services/handler/list_handler";
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Card, CardBody, Container, Flex, IconButton, Text } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { AiFillDelete } from "react-icons/ai";


const ListAll = () => {
    const { data } = useQuery("lists", getListAll);

    return (

        // data?.map((lists: OutputListDto) => (

        //     <div className="w-full flex justify-center items-center">
        //         <button className='flex flex-col w-11/12 mt-3 justify-center items-center hover:bg-violet-600'>
        //             <div key={lists.id.toString()} className='flex flex-col rounded-2xl p-1 w-11/12 bg-white justify-around items-center'>
        //                 <h1>{lists.name}</h1>
        //                 <p>{lists.tasks != null ? lists.tasks.map((task) => <p>{task.title}</p>) : []}</p>
        //             </div>
        //         </button>
        //        <ButtonIconDeleteList id={lists.id}/>
        //     </div>

        // ))
        <Flex className="flex-col overflow-auto w-full h-[680px]">
            <Flex className="bg-white rounded-2xl p-2 flex-col items-end m-1">
                <Accordion className="bg-violet-500 text-violet-100 rounded-2xl container" defaultIndex={[0]} allowMultiple>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    Section 1 title
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} className="p-2">
                            <Card className="p-2 m-1">Tasks</Card>
                            <Card className="p-2 m-1">Tasks</Card>
                            <Card className="p-2 m-1">Tasks</Card>
                            <Card className="p-2 m-1">Tasks</Card>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
                <IconButton
                    className="w-3/12 m-2"
                    variant='outline'
                    colorScheme='purple'
                    aria-label='Send email'
                    icon={<AiFillDelete />}
                />
            </Flex>
            <Flex className="bg-white rounded-2xl p-2 flex-col items-end">
                <Accordion className="bg-violet-500 text-violet-100 rounded-2xl container" defaultIndex={[0]} allowMultiple>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    Section 1 title
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} className="p-2">
                            <Card className="p-2 m-1">Tasks</Card>
                            <Card className="p-2 m-1">Tasks</Card>
                            <Card className="p-2 m-1">Tasks</Card>
                            <Card className="p-2 m-1">Tasks</Card>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
                <IconButton
                    className="w-3/12 m-2"
                    variant='outline'
                    colorScheme='purple'
                    aria-label='Send email'
                    icon={<AiFillDelete />}
                />
            </Flex>
            <Flex className="bg-white rounded-2xl p-2 flex-col items-end">
                <Accordion className="bg-violet-500 text-violet-100 rounded-2xl container" defaultIndex={[0]} allowMultiple>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    Section 1 title
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} className="p-2">
                            <Card className="p-2 m-1">Tasks</Card>
                            <Card className="p-2 m-1">Tasks</Card>
                            <Card className="p-2 m-1">Tasks</Card>
                            <Card className="p-2 m-1">Tasks</Card>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
                <IconButton
                    className="w-3/12 m-2"
                    variant='outline'
                    colorScheme='purple'
                    aria-label='Send email'
                    icon={<AiFillDelete />}
                />
            </Flex>
        </Flex>


    )
}
export default ListAll