import { OutputTaskDto } from "@/services/dto/task_dto";
import { patchTaskEdit } from "@/services/handler/task_handler";
import { AccordionPanel, Badge, Checkbox, Flex, FormControl, IconButton, Progress, Radio, Switch, Text, Toast } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useState } from "react";
import { useMutation } from "react-query";

interface Props {
    task: OutputTaskDto
}

const AccordionTasksTime = ({ task }: Props) => {
    const [statusCheck, setStatusCheck] = useState(false);
    const mutation = useMutation({ mutationFn: patchTaskEdit })

    const onChangeStatus = () => {

        mutation.mutate({ statusCheck })

    }
    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStatusCheck(event.target.checked)

    };
    return (
        <AccordionPanel key={task.id} height="10vh">
            <Flex rounded="md" justifyContent="space-between" alignItems="center" padding="8px" width="15vw" backgroundColor={task.status == true ? "purple.400" : "white"}>
                <Flex flexDirection="column" justifyContent="space-between" flex='1'>
                    <Text fontWeight='bold'>
                        {task.title}
                    </Text>
                    <Text fontWeight='bold'>
                        {task.time_select}
                    </Text>
                </Flex>
                <Formik
                    initialValues={{statusCheck }}
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
        </AccordionPanel>
    )
}

export default AccordionTasksTime;