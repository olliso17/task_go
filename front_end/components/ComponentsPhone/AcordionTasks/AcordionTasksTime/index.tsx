import { useAllHandle } from "@/hooksPerson/countTasksTime";
import { OutputTaskDto } from "@/services/dto/task_dto";
import { patchTaskEdit } from "@/services/handler/task_handler";
import { AccordionPanel, Box, Button, Card, CardBody, Checkbox, Flex, FormControl, Heading, Stack, StackDivider } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useState } from "react";
import { useMutation } from "react-query";

interface Props {
    task: OutputTaskDto
}

const AccordionTasksTime = ({ task }: Props) => {
    const [statusCheck, setStatusCheck] = useState(false);
    const [isRunning, setIsRunning] = useState(false);
    const mutation = useMutation({ mutationFn: patchTaskEdit })
    const handleAll = useAllHandle(task)
    const onChangeStatus = () => {
        mutation.mutate({ statusCheck })
    }
    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStatusCheck(event.target.checked)

    };

    return (
        <AccordionPanel key={task.id} >
            <Card>
                <CardBody>
                    <Stack divider={<StackDivider />} spacing='4'>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                                {task.title}
                            </Heading>

                            <Formik
                                initialValues={{ statusCheck }}
                                onSubmit={onChangeStatus}

                            >
                                {(props) => (
                                    <Form>
                                        <FormControl >
                                            <Flex flexDirection="column" justifyContent="space-between" alignItems="end">

                                                <Checkbox borderWidth="0.2vw" colorScheme="purple" borderColor="purple.900" isChecked={statusCheck} onChange={handleCheckboxChange}>
                                                </Checkbox>

                                            </Flex>
                                        </FormControl>
                                    </Form>
                                )}
                            </Formik>
                            <Stack spacing={4} align="center">
                                <div>{handleAll.minutes.toString().padStart(2, '0')}:
                                    {handleAll.seconds.toString().padStart(2, '0')}</div>
                                <Stack direction="row" spacing={4}>
                                    
                                    <Button onClick={handleAll.handleStart}>Start</Button>

                                    <Button onClick={handleAll.handlePause}>Pause</Button>

                                    <Button onClick={handleAll.handleReset}>Reset</Button>
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