import { OutputTaskDto } from "@/services/dto/task_dto";
import { patchTaskEdit } from "@/services/handler/task_handler";
import { AccordionPanel, Button, Checkbox, Flex, FormControl, Text } from "@chakra-ui/react";
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
    // const [formValues, setFormValues] = useState<FormValues>({ agreeToTerms: false });

    // const handleSubmit = (values: FormValues) => {
    //     console.log(values);
   
    // };

    // const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setFormValues({ ...formValues, agreeToTerms: event.target.checked });
    // };
    return (
        <AccordionPanel key={task.id} >
            <Flex rounded="md" justifyContent="space-between" alignItems="center" padding="8px" width="15vw" backgroundColor={task.status == true ? "purple.400" : "white"}>
                <Flex flexDirection="column" justifyContent="space-between" flex='1'>
                    <Text fontWeight='bold'>
                        {task.title}
                    </Text>
                    <Text fontSize='sm'>{task.description}</Text>
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

export default AccordionTasksCard;