import { OutputTaskDto } from "@/services/dto/task_dto";
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Card, Flex, IconButton } from "@chakra-ui/react";
import { AiFillDelete } from "react-icons/ai";
import AccordionTasks from "../AcordionTasks";

interface Props {
    nameList:string;
    // contentTasks: JSX.Element;
    tasks: OutputTaskDto[]
}

const AcordionListTasks = ({nameList, tasks}:Props) => {
    return (
        <Flex className="bg-white rounded-2xl p-2 flex-col items-end m-1">
            <Accordion className="bg-violet-500 text-violet-100 rounded-2xl container"  defaultIndex={[0]} allowMultiple>
                <AccordionItem >
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                {nameList}
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                   {tasks.map((task) => (
                    <AccordionTasks key={task.id.toString()} task={task}/>
                   ))},
                   
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
    )
}

export default AcordionListTasks;