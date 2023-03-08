import { OutputTaskDto } from "@/services/dto/task_dto";
import { AccordionPanel, Badge, Box, Card, Center, Checkbox, Flex, IconButton, Progress, Switch, Text } from "@chakra-ui/react";
import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";


interface Props {
    task: OutputTaskDto
}

const AccordionTasks = ({ task }: Props) => {
    const [status, setStatus] = useState(false);

    return (
        <AccordionPanel key={task.id.toString()} height="14vh">
            <Flex padding="8px" height="12vh" width="15vw" backgroundColor={task.status == true ? "gray" : "white"}>
                <Flex flexDirection="column" justifyContent="space-between" flex='1'>
                    <Text fontWeight='bold'>
                        {task.title}
                        <Badge ml='1' colorScheme='green' >
                            {task.priority == true ? 'Priority' : ''}
                        </Badge>
                    </Text>
                    <Text fontSize='sm'>{task.description}</Text>
                    <Progress colorScheme="purple" hasStripe value={64} />
                </Flex>
                <Flex flexDirection="column" justifyContent="space-between" alignItems="end">
                    <Switch id='status' isChecked={status} onChange={(e) => { setStatus(e.target.checked) }}></Switch>
                    <IconButton marginLeft="8px" backgroundColor="white"
                        className="w-6"
                        variant='outline'
                        colorScheme='red'
                        aria-label='delete task'
                        icon={<AiFillDelete />}
                    />
                </Flex>

            </Flex>
        </AccordionPanel>
    )
}

export default AccordionTasks;