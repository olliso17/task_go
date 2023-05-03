import { useColorsPhone } from "@/hooksPerson/colorsPhone";
import { useMutationPostTask } from "@/services/handler/muation";
import { AccordionPanel, Button, FormControl, FormLabel, Input, Text} from "@chakra-ui/react"
import { Form, Formik } from "formik";
import {useState } from "react";


interface Props {
    list_id: string,
}

const TypeTaskCard = ({ list_id }: Props) => {
    const [description, setDescription] = useState('');
    // const [priority, setPriority] = useState(false);
    const [title, setTitle] = useState('');
    const mutation = useMutationPostTask()
    const allColors = useColorsPhone();

    return (
        <AccordionPanel height="24vh">
            <Formik
                initialValues={{ title: '', description:'', list_id: list_id }}
                onSubmit={() => mutation.mutate({ title, description, list_id })}

            >
                {(props) => (
                    <Form key={list_id}>

                        <FormControl >
{/* 
                            <Flex justifyContent="end">
                                <Checkbox className="m-1" isChecked={priority} onChange={(e) => (setPriority(e.target.checked))}>Priority</Checkbox>
                            </Flex> */}

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
                            {/* <FormLabel fontWeight="bold" margin="0.2vw">
                                <Text
                                    bgGradient={allColors.bgGradientColor}
                                    bgClip='text'
                                    fontSize='sm'
                                    fontWeight='extrabold'
                                >Time</Text>
                            </FormLabel>
                            <Input backgroundColor="white" focusBorderColor="purple.600" borderColor="purple.400" borderWidth="2px" width="16vw" onChange={(e) => setTimeSelect(e.target.value)} type="time" /> */}

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
        </AccordionPanel>
    )
}

export default TypeTaskCard