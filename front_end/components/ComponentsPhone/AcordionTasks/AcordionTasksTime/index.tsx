import { useAllHandle } from "@/hooksPerson/countTasksTime";
import { OutputTaskDto } from "@/services/dto/task_dto";
import { AccordionPanel, Box, Button, Card, CardBody, Checkbox, Flex, FormControl, Heading, Stack, StackDivider } from "@chakra-ui/react";
import { Dispatch, SetStateAction, useState } from "react";
import AlertComponent from "../../AlertComponent";

interface Props {
    task: OutputTaskDto
    setAlert: Dispatch<SetStateAction<JSX.Element>>
}

const AccordionTasksTime = ({ task, setAlert }: Props) => {
    const handleAll = useAllHandle(task, setAlert)

   
    return (
        <AccordionPanel padding="0.2vw" margin="0.1vw" key={task.id} >
            <Card>
                <CardBody>
                    <Stack divider={<StackDivider />} spacing='4'>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                                {task.title}
                            </Heading>

                            <Stack spacing={4} align="center">
                                <div>{handleAll.minutes.toString().padStart(2, '0')}:
                                    {handleAll.seconds.toString().padStart(2, '0')}</div>
                                <Stack direction="row" spacing={2}>
                                    
                                    <Button backgroundColor="purple.900" colorScheme='purple' width="2.5vw" onClick={handleAll.handleStart}>Start</Button>

                                    <Button backgroundColor="purple.900" colorScheme='purple' width="2.5vw" onClick={handleAll.handlePause}>Pause</Button>

                                    <Button backgroundColor="purple.900" colorScheme='purple' width="2.5vw" onClick={handleAll.handleReset}>Reset</Button>
                                </Stack>
                            </Stack>
                        </Box>
                    </Stack>
                </CardBody>
            </Card>
        </AccordionPanel>
    )
}

export default AccordionTasksTime;