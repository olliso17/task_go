import { postTask } from "@/services/handler/task_handler"
import { Box, Button, Checkbox, Flex, FormControl, FormErrorMessage, FormLabel, Input, useToast } from "@chakra-ui/react"
import { Field, Form, Formik } from 'formik'
import { ChangeEventHandler, FormEventHandler, useState } from "react"
import { useMutation } from "react-query"

interface Props {
    list_id: string

}

const CreateTask = ({ list_id }: Props) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState(false);
    const [priority, setPriority] = useState(false);
    const [time_select, setTimeSelect] = useState('');
    const toast = useToast()
    const mutation = useMutation({ mutationFn: postTask })
    return (
        <Formik
            initialValues={{ title: 'create task', description: 'create', priority: false, time_select: '' }}
            onSubmit={() => mutation.mutate({ title, description, status, priority, list_id, time_select })}

        >
            {(props) => (

                <Form>

                    <FormControl >
                        <Flex justifyContent="end">
                            <Checkbox className="m-1" onChange={(e)=>(e.target.checked==true?setPriority(true):setPriority(false))}>Priority</Checkbox>
                        </Flex>
                        <Input onChange={(e) => setTitle(e.target.value)} placeholder='create title' />
                        <Input className="mt-1" onChange={(e) => setDescription(e.target.value)} placeholder='create description' />
                        <Input onChange={(e) => setTimeSelect(e.target.value)} type="time" />

                    </FormControl>

                    <Button
                        mt={4}
                        colorScheme='teal'
                        // isLoading={props.isSubmitting}
                        type='submit'
                    >
                        Submit
                    </Button>
                </Form>
            )}
        </Formik>
    )
}

export default CreateTask