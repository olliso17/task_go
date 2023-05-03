import { OutputTaskDto } from "@/services/dto/task_dto";
import { patchTaskEdit } from "@/services/handler/task_handler";
import { AccordionPanel, Box, Button, Card, CardBody, CardHeader, Checkbox, Flex, FormControl, Heading, Stack, StackDivider, Text } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useState } from "react";
import { useMutation } from "react-query";

interface Props {
    task: OutputTaskDto
}
interface FormValues {
    agreeToTerms: boolean;
}
const AccordionTasksCard = ({ task }: Props) => {
    const [statusCheck, setStatusCheck] = useState(false);
    const mutation = useMutation({ mutationFn: patchTaskEdit })
    const onChangeStatus = () => {

        mutation.mutate({ statusCheck })

    }
    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStatusCheck(event.target.checked)
        console.log(statusCheck, 'foi')

    };

    return (
        <>
            <AccordionPanel key={task.id} >
                    <Card>
                        <CardBody>
                            <Stack divider={<StackDivider />} spacing='4'>
                                <Box>
                                    <Heading size='xs' textTransform='uppercase'>
                                        {task.title}
                                    </Heading>
                                    <Text pt='2' fontSize='sm'>{task.description}</Text>

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

                                </Box>
                            </Stack>
                        </CardBody>
                    </Card>
            </AccordionPanel>
        </>
    )
}

export default AccordionTasksCard;