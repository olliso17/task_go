import { postTask } from "@/services/handler/task_handler"
import {Button, Checkbox, Flex, FormControl, Input, useToast } from "@chakra-ui/react"
import {Form, Formik } from 'formik'
import { useState } from "react"
import { useMutation } from "react-query"

interface Props {
    list_id: string

}

const CreateTask = ({ list_id }: Props) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState(false);
    const [time_select, setTimeSelect] = useState('');
    const toast = useToast()
    const mutation = useMutation({ mutationFn: postTask, onSuccess:() =>{
        toast({
            title: 'Task created successfully.',
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
    }})
    return (
        <Formik
            initialValues={{ title: '', description: '', priority: false, list_id:list_id, time_select: '' }}
            onSubmit={() => mutation.mutate({ title, description, priority, list_id, time_select })}

        >
            {(props) => (

                <Form>

                    <FormControl >
                        <Flex justifyContent="end">
                            <Checkbox className="m-1" isChecked={priority} onChange={(e)=>(setPriority(e.target.checked))}>Priority</Checkbox>
                        </Flex>
                        <Input onChange={(e) => setTitle(e.target.value)} placeholder='create title' />
                        <Input className="mt-1" onChange={(e) => setDescription(e.target.value)} placeholder='create description' />
                        <Input onChange={(e) => setTimeSelect(e.target.value)} type="time" />

                    </FormControl>

                    <Button
                        mt={4}
                        colorScheme='teal'
                        isLoading={props.isSubmitting}
                        type='submit'
                    >
                        Save
                    </Button>
                </Form>
            )}
        </Formik>
    )
}

export default CreateTask