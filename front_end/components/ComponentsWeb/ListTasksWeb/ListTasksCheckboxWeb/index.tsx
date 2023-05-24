import { useColorsPhone } from "@/hooksPerson/colorsPhone";
import { OutputTaskDto } from "@/services/dto/task_dto";
import { patchTaskCompleted } from "@/services/handler/task_handler";
import { AccordionPanel, Badge, Box, Card, CardBody, Checkbox, Flex, FormControl, Heading, IconButton, Progress, Radio, Stack, StackDivider, Switch, Text, Toast } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { useMutation } from "react-query";

interface Props {
    task: OutputTaskDto
}

const ListTasksCheckboxWeb = ({ task }: Props) => {
    const [statusCheck, setStatusCheck] = useState(false);
    const allColors = useColorsPhone();
    const mutation = useMutation({ mutationFn: patchTaskCompleted })

    useEffect(()=>{},[statusCheck])

    return (

        <Heading size='xs' textTransform='capitalize' color={statusCheck==true?"purple.500":"purple.800"}>
            <Flex justifyContent="space-between">
                {task.title}
                {statusCheck==true?<Text color="purple.300" fontSize="sm">completed</Text>:<></>}

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

    )
}

export default ListTasksCheckboxWeb;