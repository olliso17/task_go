import { useColorsPhone } from "@/hooksPerson/colorsPhone";
import { useMutationPostTask } from "@/services/handler/muation";
import { AccordionPanel, Button, FormControl, FormLabel, Input, Text} from "@chakra-ui/react"
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
    <AccordionPanel height="14vh">
        <Formik
            initialValues={{ title: '', list_id: list_id }}
            onSubmit={() => mutation.mutate({ title, list_id })}

        >
            {(props) => (
                <Form key={list_id}>

                    <FormControl >
                        <FormLabel fontWeight="bold" margin="0.2vw">
                            <Text
                                bgGradient={allColors.bgGradientColor}
                                bgClip='text'
                                fontSize='sm'
                                fontWeight='extrabold'
                            >Title</Text>
                        </FormLabel>
                        <Input backgroundColor="white" focusBorderColor="purple.600" borderColor="purple.400" borderWidth="2px" width="16vw" onChange={(e) => setTitle(e.target.value)} placeholder='create title' />
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

export default TypeTaskCheckbox