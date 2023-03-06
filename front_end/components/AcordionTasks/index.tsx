import { OutputTaskDto } from "@/services/dto/task_dto";
import { AccordionPanel, Badge, Box, Card, Checkbox, IconButton, Progress, Text } from "@chakra-ui/react";
import { AiFillDelete } from "react-icons/ai";


interface Props {
    task: OutputTaskDto
}

const AccordionTasks = ({ task }: Props) => {
    return (
        <AccordionPanel key={task.id.toString()} pb={4} className="p-2">
            <Card className="p-2 m-1 flex w-11/12">
                <Box ml='3'>
                    <Text fontWeight='bold'>
                        {task.title}
                        <Badge ml='1' colorScheme='green'>
                           {task.priority==true?'Priority':''}
                        </Badge>
                    </Text>
                    <Text fontSize='sm'>{task.description}</Text>
                    <Progress hasStripe value={64} />
                </Box>
                <Checkbox isInvalid={task.status==true?true:false}>Checkbox</Checkbox>
            </Card>
            <IconButton
                className="w-3/12 m-2"
                variant='outline'
                colorScheme='purple'
                aria-label='Send email'
                icon={<AiFillDelete />}
            />
        </AccordionPanel>
    )
}

export default AccordionTasks;