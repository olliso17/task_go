import { useColors } from "@/hooksPerson/colors"
import { postTask } from "@/services/handler/task_handler"
import { Box, Button, Center, Checkbox, Flex, FormControl, Input, useToast } from "@chakra-ui/react"
import { Form, Formik } from 'formik'
import { useState } from "react"
import { useMutation } from "react-query"

interface Props {
    list_id: string

}

const LoginAcess = ({ list_id }: Props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const toast = useToast()
    const allColors = useColors()
    // const mutation = useMutation({ mutationFn: postLogin, onSuccess:() =>{
    //     toast({
    //         title: 'Task created successfully.',
    //         status: 'success',
    //         duration: 9000,
    //         isClosable: true,
    //       })
    // }})
    return (
        <>
            <Center>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    onSubmit={() => { }}
                // onSubmit={() => mutation.mutate({email, password})}

                >
                    {(props) => (

                        <Form>

                            <FormControl >

                                <Input type="email" onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
                                <Input type="password" className="mt-1" onChange={(e) => setPassword(e.target.value)} placeholder='Password' />

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
            </Center>
        </>

    )
}

export default LoginAcess