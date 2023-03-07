import { OutputTaskDto } from "@/services/dto/task_dto";
import { AccordionPanel, Badge, Box, Card, Center, Checkbox, IconButton, Progress, Switch, Text } from "@chakra-ui/react";
import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";


interface Props {
    task: OutputTaskDto
}

const AccordionTasks = ({ task }: Props) => {
    const [status, setStatus] = useState(false);

    return (
        <AccordionPanel key={task.id.toString()} pb={4} height="6vh" padding="8px">
            <Center>
                <Card backgroundColor={task.status == true ? "gray" : "white"} className="p-2 mb-1 flex w-full h-full">
                    <Box flex='1'>
                        <Text fontWeight='bold'>
                            {task.title}
                            <Badge ml='1' colorScheme='green'>
                                {task.priority == true ? 'Priority' : ''}
                            </Badge>
                        </Text>
                        <Text fontSize='sm'>{task.description}</Text>
                        <Progress colorScheme="purple" hasStripe value={64} />
                    </Box>
                    <Switch id='status' isChecked={status} onChange={(e) => { setStatus(e.target.checked) }}></Switch>
                    <Checkbox borderColor="purple" defaultChecked={task.status == true ? true : false}>finished</Checkbox>
                </Card>
                <Card className="p-2 flex justify-center items-center h-full mb-1">
                    <IconButton backgroundColor="white"
                        className="w-6 m-2"
                        variant='outline'
                        colorScheme='red'
                        aria-label='delete task'
                        icon={<AiFillDelete />}
                    />
                </Card>
            </Center>
        </AccordionPanel>
    )
}

export default AccordionTasks;