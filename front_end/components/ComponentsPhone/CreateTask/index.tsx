import { useColorsPhone } from "@/hooksPerson/colorsPhone"
import { useMutationPostTask } from "@/services/handler/muation"
import { Button, Checkbox, Flex, FormControl, FormLabel, Input, Text, useToast } from "@chakra-ui/react"
import { Form, Formik } from 'formik'
import { useState } from "react"

interface Props {
    list_id: string

}

const CreateTask = ({ list_id }: Props) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState(false);
    const [time_select, setTimeSelect] = useState('');
    const allColors = useColorsPhone();
    const mutation = useMutationPostTask()
    return (
        <Formik
            initialValues={{ title: '', description: '', priority: false, list_id: list_id, time_select: '' }}
            onSubmit={() => mutation.mutate({ title, description, priority, list_id, time_select })}

        >
            {(props) => (

                <Form>

                    <FormControl >
                        <Flex justifyContent="end">
                            <Checkbox className="m-1" isChecked={priority} onChange={(e) => (setPriority(e.target.checked))}>Priority</Checkbox>
                        </Flex>
                        <FormLabel fontWeight="bold" margin="0.2vw">
                            <Text
                                bgGradient={allColors.bgGradientColor}
                                bgClip='text'
                                fontSize='sm'
                                fontWeight='extrabold'
                            >Title</Text>
                        </FormLabel>
                        <Input backgroundColor="white" focusBorderColor="purple.600" borderColor="purple.400" borderWidth="2px" width="16vw" onChange={(e) => setTitle(e.target.value)} placeholder='create title' />
                        <FormLabel fontWeight="bold" margin="0.2vw">
                            <Text
                                bgGradient={allColors.bgGradientColor}
                                bgClip='text'
                                fontSize='sm'
                                fontWeight='extrabold'
                            >Description</Text>
                        </FormLabel>
                        <Input backgroundColor="white" focusBorderColor="purple.600" borderColor="purple.400" borderWidth="2px" width="16vw" className="mt-1" onChange={(e) => setDescription(e.target.value)} placeholder='create description' />
                        <FormLabel fontWeight="bold" margin="0.2vw">
                            <Text
                                bgGradient={allColors.bgGradientColor}
                                bgClip='text'
                                fontSize='sm'
                                fontWeight='extrabold'
                            >Time</Text>
                        </FormLabel>
                        <Input backgroundColor="white" focusBorderColor="purple.600" borderColor="purple.400" borderWidth="2px" width="16vw" onChange={(e) => setTimeSelect(e.target.value)} type="time" />

                    </FormControl>

                    <Button
                          mt={4}
                          margin="0.5vw"
                          backgroundColor="purple.900"
                          colorScheme='purple'
                          textColor="white"
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