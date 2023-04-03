import { useColors } from "@/hooksPerson/colors"
import { postTask } from "@/services/handler/task_handler"
import { Box, Button, Center, Checkbox, Flex, FormControl, Heading, Input, Text, useColorMode, useToast } from "@chakra-ui/react"
import { Form, Formik } from 'formik'
import { useState } from "react"
import { useMutation } from "react-query"
import * as lightOff from "public/light_off.json";
import * as lightOn from "public/light_on.json";
import * as register from "public/register.json";
import Lottie from "lottie-react";
interface Props {
    list_id: string 

}

const CreateUser = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const toast = useToast()
    const allColors = useColors()
    const { colorMode, toggleColorMode } = useColorMode()
    const style = { whidth: 40, height: 40, };
    const styleRegister = { whidth: 250, height: 250, };
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
            <Flex flexDirection="column"  height="70vh" justifyContent="center"  alignItems="center">
                <Flex width="19vw" justifyContent="end">
                    <Button colorScheme={allColors.bgAccordionButton} backgroundColor={allColors.bgAccordionButton} rounded="full" onClick={toggleColorMode}>
                        <Lottie style={style} animationData={colorMode == "light" ? lightOff : lightOn} />
                    </Button>
                </Flex>
                <Box marginTop="8px">
                    <Heading marginLeft="16px" size='3xl'>
                        <Text
                            bgGradient={allColors.bgHeadingGradientColor}
                            bgClip='text'
                            fontWeight='extrabold'
                        >Welcome,</Text>
                    </Heading>
                    <Text
                        marginLeft="16px"
                        bgGradient={allColors.bgGradientColor}
                        bgClip='text'
                        fontSize='2xl'
                        fontWeight='extrabold'
                    >
                    Create your profile to create and access your lists!</Text>
                    <Box marginTop="20px">
                        <Lottie style={styleRegister} animationData={register} />
                    </Box>
                </Box>
                <Formik
                    initialValues={{ name: '', email: '', password: '' }}
                    onSubmit={() => { }}
                // onSubmit={() => mutation.mutate({email, password})}

                >
                    {(props) => (

                        <Form >
                            <FormControl >
                                <Flex flexDirection="column" justifyContent="center" alignItems="center">
                                    <Input backgroundColor="white" focusBorderColor="purple.600" borderColor="purple.400" borderWidth="2px" width="16vw" type="name" onChange={(e) => setName(e.target.value)} placeholder='Name' />
                                    <Input backgroundColor="white" focusBorderColor="purple.600" borderColor="purple.400" borderWidth="2px" width="16vw" type="email" onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
                                    <Input backgroundColor="white" focusBorderColor="purple.600" borderColor="purple.400" borderWidth="2px" width="16vw" type="password" className="mt-1" onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
                                </Flex>

                            </FormControl>
                            <Flex justifyContent="end">
                                <Button
                                    mt={4}
                                    isLoading={props.isSubmitting}
                                    backgroundColor="purple.800"
                                    colorScheme='purple'
                                    textColor="white"
                                    type='submit'
                                >
                                    Create
                                </Button>
                            </Flex>
                        </Form>


                    )}
                </Formik>
            </Flex>
        </>

    )
}

export default CreateUser