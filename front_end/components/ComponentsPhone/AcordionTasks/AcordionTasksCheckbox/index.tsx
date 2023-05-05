import { OutputTaskDto } from "@/services/dto/task_dto";
import { patchTaskCompleted } from "@/services/handler/task_handler";
import { AccordionPanel, Badge, Box, Card, CardBody, Checkbox, Flex, FormControl, Heading, IconButton, Progress, Radio, Stack, StackDivider, Switch, Text, Toast } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useState } from "react";
import { useMutation } from "react-query";

interface Props {
    task: OutputTaskDto
}

const AccordionTasksCheckbox = ({ task }: Props) => {
    const [statusCheck, setStatusCheck] = useState(false);
    const mutation = useMutation({ mutationFn: patchTaskCompleted})
    const onChangeStatus = () => {

        // mutation.mutate({ statusCheck }) 

    }
    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStatusCheck(event.target.checked)
        console.log(statusCheck, 'foi')

    };
    return (
        <AccordionPanel padding="0.2vw" margin="0.1vw">
            <Card>
                <CardBody>
                    <Stack divider={<StackDivider />} spacing='4'>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                                <Flex justifyContent="space-between">
                                    {task.title}
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
                                </Flex>
                            </Heading>

                        </Box>
                    </Stack>
                </CardBody>
            </Card>
        </AccordionPanel>
    )
}

export default AccordionTasksCheckbox;