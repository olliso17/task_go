import { OutputTaskDto } from "@/services/dto/task_dto";
import { patchTaskEdit } from "@/services/handler/task_handler";
import { AccordionPanel, Badge, Checkbox, Flex, FormControl, IconButton, Progress, Radio, Switch, Text, Toast } from "@chakra-ui/react";
import { useState } from "react";
import { useMutation } from "react-query";
import { Form, Formik } from "formik";

interface Props {
    task: OutputTaskDto
}

const AccordionTasks = ({ task }: Props) => {
    const [status, setStatus] = useState(false);
    const mutation = useMutation({ mutationFn: patchTaskEdit })
    const onChangeStatus = () => {
        mutation.mutate({ status })
        console.log(status)
    }
    return (
        <AccordionPanel key={task.id} height="10vh">
            <Flex rounded="md" justifyContent="space-between" alignItems="center" padding="8px" width="15vw" backgroundColor={task.status == true ? "purple.400" : "white"}>
                <Flex flexDirection="column" justifyContent="space-between" flex='1'>
                    <Text fontWeight='bold'>
                        {task.title}
                    </Text>
                    <Text fontSize='sm'>{task.description}</Text>
                </Flex>
                <Flex flexDirection="column" justifyContent="space-between" alignItems="end">

                    <Checkbox borderWidth="0.2vw" borderColor="purple.900" isDisabled={task.status} isChecked={status} onChange={ (e)=>setStatus(e.target.checked)}>
                    </Checkbox>

                </Flex>
            </Flex>
        </AccordionPanel>
    )
}

export default AccordionTasks;