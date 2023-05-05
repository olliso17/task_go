import { useColorsPhone } from "@/hooksPerson/colorsPhone";
import { useMutationPostTask } from "@/services/handler/muation";
import { AccordionPanel, Box, Button, Card, CardBody, Flex, FormControl, FormLabel, Input, Stack, StackDivider, Text } from "@chakra-ui/react"
import { Form, Formik } from "formik";
import { useState } from "react";

interface Props {
    list_id: string,
}

const TypeTaskCheckbox = ({ list_id }: Props) => {
    const [title, setTitle] = useState('');
    const mutation = useMutationPostTask()
    const allColors = useColorsPhone();

    return (
        <AccordionPanel padding="0.2vw" margin="0.1vw">
            <Card >
                <CardBody >
                    <Stack divider={<StackDivider />} spacing='4'>
                        <Box >
                            <Formik
                                initialValues={{ title: '', list_id: list_id }}
                                onSubmit={() => mutation.mutate({ title, list_id })}

                            >
                                {(props) => (
                                    <Form key={list_id}>
                                        <CardBody padding="0">
                                            <FormControl >
                                                <Input backgroundColor="white" focusBorderColor="purple.600" borderColor="purple.400" borderWidth="0.2vw" width="12vw" height="5vh" type="text" onChange={(e) => setTitle(e.target.value)} placeholder='create title' />
                                            </FormControl>
                                            <Flex justifyContent="end">
                                                <Button
                                                    mt={4}
                                                    backgroundColor="purple.900"
                                                    colorScheme='purple'
                                                    textColor="white"
                                                    type='submit'
                                                >
                                                    Save
                                                </Button>
                                            </Flex>
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

export default TypeTaskCheckbox