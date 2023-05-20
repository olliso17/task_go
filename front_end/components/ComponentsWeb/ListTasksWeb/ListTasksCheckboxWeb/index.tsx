import { useColorsPhone } from "@/hooksPerson/colorsPhone";
import { OutputTaskDto } from "@/services/dto/task_dto";
import { patchTaskCompleted } from "@/services/handler/task_handler";
import { AccordionPanel, Badge, Box, Card, CardBody, Checkbox, Flex, FormControl, Heading, IconButton, Progress, Radio, Stack, StackDivider, Switch, Text, Toast } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useState } from "react";
import { useMutation } from "react-query";

interface Props {
    task: OutputTaskDto
}

const ListTasksCheckboxWeb = ({ task }: Props) => {
    const [statusCheck, setStatusCheck] = useState(false);
    const allColors = useColorsPhone();
    const mutation = useMutation({ mutationFn: patchTaskCompleted })

    return (
            <Card backgroundColor={allColors.bg}>
                <CardBody>
                    <Stack divider={<StackDivider />} spacing='4'>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                                <Flex justifyContent="space-between">
                                    {task.title}

                                    <Flex flexDirection="column" justifyContent="space-between" alignItems="end">

                                        <Checkbox borderWidth="0.2vw" colorScheme="purple" borderColor="purple.900" isChecked={statusCheck} onChange={(e) => {
                                            setStatusCheck(e.target.checked);
                                          
                                            mutation.mutate({ id: task.id, status: statusCheck })
                                        }
                                        }>
                                        </Checkbox>

                                    </Flex>

                                </Flex>
                            </Heading>

                        </Box>
                    </Stack>
                </CardBody>
            </Card>
    )
}

export default ListTasksCheckboxWeb;