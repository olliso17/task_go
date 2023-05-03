import { useColorsPhone } from "@/hooksPerson/colorsPhone";
import { useMutationPostTask } from "@/services/handler/muation";
import { AccordionPanel, Box, Button, Card, CardBody, FormControl, FormLabel, Input, Stack, StackDivider, Text } from "@chakra-ui/react"
import { Form, Formik } from "formik";
import { useState } from "react";


interface Props {
    list_id: string,
}

const TypeTaskTime = ({ list_id }: Props) => {
    const [time_select, setTimeSelect] = useState('');
    // const [priority, setPriority] = useState(false);
    const [title, setTitle] = useState('');
    const mutation = useMutationPostTask()
    const allColors = useColorsPhone();

    return (
        <AccordionPanel>
            <Card>
                <CardBody>
                    <Stack divider={<StackDivider />} spacing='4'>
                        <Box>
                            <Formik
                                initialValues={{ title: '', timeSelect: '', list_id: list_id }}
                                onSubmit={() => mutation.mutate({ title, time_select, list_id })}

                            >
                                {(props) => (
                                    <Form key={list_id}>
                                        <CardBody padding="0">
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
                                                <Input backgroundColor="white" focusBorderColor="purple.600" borderColor="purple.400" borderWidth="2px" width="12vw" onChange={(e) => setTitle(e.target.value)} placeholder='create title' />
                                                <FormLabel fontWeight="bold" margin="0.2vw">
                                                    <Text
                                                        bgGradient={allColors.bgGradientColor}
                                                        bgClip='text'
                                                        fontSize='sm'
                                                        fontWeight='extrabold'
                                                    >Time</Text>
                                                </FormLabel>
                                                <Input backgroundColor="white" focusBorderColor="purple.600" borderColor="purple.400" borderWidth="2px" width="12vw" onChange={(e) => setTimeSelect(e.target.value)} type="time" />

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
                                        </CardBody>
                                    </Form>
                                )}
                            </Formik>
                        </Box>
                    </Stack>
                </CardBody>
            </Card>
        </AccordionPanel>
    )
}

export default TypeTaskTime