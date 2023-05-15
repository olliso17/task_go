import { Box, Button, Flex, FormControl, Heading, Input, Link, Text, useColorMode } from "@chakra-ui/react"
import { Form, Formik } from 'formik'
import React, { useState } from "react"
import * as lightOff from "public/light_off.json";
import * as lightOn from "public/light_on.json";
import * as register from "public/register.json";
import Lottie from "lottie-react";
import { useColorsPhone } from "@/hooksPerson/colorsPhone"
import { useMutationPostUser } from "@/services/handler/muation"

const CreateUserWeb = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const allColors = useColorsPhone()
    const { colorMode, toggleColorMode } = useColorMode()
    const style = { whidth: 40, height: 40, };
    const styleRegister = { whidth: "25vw", height: "25vh", };
    const initialValues = { name: '', email: '', password: '' }

    const mutation = useMutationPostUser()

    return (

        <Flex flexDirection="column" justifyContent="center" alignItems="center">
            <Button colorScheme={allColors.bgAccordionButton} backgroundColor={allColors.bgCenter} rounded="full" onClick={toggleColorMode}>
                <Lottie style={style} animationData={colorMode == "light" ? lightOff : lightOn} />
            </Button>
            <Box height="88vh" marginTop="0.5vw">
                <Heading marginLeft="0.5vw" size='2xl'>
                    <Text
                        bgGradient={allColors.bgHeadingGradientColor}
                        bgClip='text'
                        fontWeight='extrabold'
                    >Welcome,</Text>
                </Heading>
                <Text
                    marginLeft="0.5vw"
                    bgGradient={allColors.bgGradientColor}
                    bgClip='text'
                    fontSize='1xl'
                    fontWeight='extrabold'
                >
                    Create your profile to create and access your lists!</Text>
                <Box >
                    <Lottie style={styleRegister} animationData={register} />
                </Box>
                <Formik
                    initialValues={initialValues}
                    onSubmit={() => {
                        mutation.mutate({ name, email, password })

                    }}
                >
                    {(props) => (

                        <Form >
                            <FormControl >
                                <Flex flexDirection="column" justifyContent="center" alignItems="center">
                                    <Input backgroundColor="white" focusBorderColor="purple.600" borderColor="purple.400" borderWidth="0.2vw" width="16vw" height="5vh" type="name" onChange={(e) => {
                                        setName(e.target.value)
                                    }} placeholder='Name' />
                                    <Input backgroundColor="white" focusBorderColor="purple.600" borderColor="purple.400" borderWidth="0.2vw" width="16vw" height="5vh" type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder='Email' />
                                    <Input backgroundColor="white" focusBorderColor="purple.600" borderColor="purple.400" borderWidth="0.2vw" width="16vw" height="5vh" type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder='Password' />
                                </Flex>

                            </FormControl>

                            <Flex justifyContent="center">
                                <Text fontSize="sm">
                                    Do you already have an account?{' '}
                                    <Link
                                        color='teal.500'
                                        href='http://localhost:3001/login'
                                    >Login</Link>
                                </Text>
                            </Flex>
                            <Flex marginRight="1vw" marginBottom="0.3vw" justifyContent="end">
                                <Button
                                    mt={4}
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
            </Box>
        </Flex>


    )
}

export default CreateUserWeb