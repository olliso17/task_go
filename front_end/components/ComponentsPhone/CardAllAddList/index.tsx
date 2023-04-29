import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Select, Text, useColorMode } from "@chakra-ui/react"
import Lottie from "lottie-react";
import { useState } from "react"
import * as listAnimation from "public/list.json";
import * as lightOff from "public/light_off.json";
import * as lightOn from "public/light_on.json";
import * as logoutAnimation from "public/logout.json";
import { Form, Formik } from "formik";
import { useMutation, useQuery } from "react-query";
import { useColorsPhone } from "@/hooksPerson/colorsPhone";
import { getLogin, postLogout } from "@/services/handler/login_handler";
import { useRouter } from "next/router"
import { useMutationPostList, useMutationPostLogout } from "@/services/handler/muation";



const CardAllAddList = () => {
    const router = useRouter();
    const [name, setName] = useState('');
    const [type_task, setTypeTask] = useState('');
    const { data } = useQuery("login", getLogin);
    const logout = useMutationPostLogout()

    const user_id = data?.user_id



    const allColors = useColorsPhone()
    const mutation = useMutationPostList()

    const onCreateList = () => {
        mutation.mutate({ name, user_id, type_task  })
        setTypeTask('')
        setName('')
    }
    const { colorMode, toggleColorMode } = useColorMode()
    const style = { whidth: 40, height: 40, };
    return (

        <Flex height="67vh" flexDirection="column" justifyContent="space-between" margin="8px" alignItems="center">

            <Flex width="100vw" justifyContent="center">
                <Button
                    marginRight="6vw"
                    colorScheme={allColors.bgAccordionButton}
                    backgroundColor={allColors.bgCenter}
                    rounded="full" onClick={toggleColorMode}>
                    <Lottie style={style} animationData={colorMode == "light" ? lightOff : lightOn} />
                </Button>
                <Button
                    marginLeft="6vw"
                    padding="0"
                    backgroundColor={allColors.bgCenter}
                    rounded="full"
                    onClick={() => logout.mutate()}>
                    <Lottie style={style} animationData={logoutAnimation} />
                </Button>
            </Flex>
            <Box marginTop="8px">
                <Heading marginLeft="16px" size='3xl'>
                    <Text
                        bgGradient={allColors.bgHeadingGradientColor}
                        bgClip='text'
                        fontWeight='extrabold'
                    >Hello,</Text>
                </Heading>
                <Text
                    marginLeft="16px"
                    bgGradient={allColors.bgGradientColor}
                    bgClip='text'
                    fontSize='2xl'
                    fontWeight='extrabold'
                >Add your to-do list</Text>
                <Box marginTop="20px">
                    <Lottie animationData={listAnimation} />
                </Box>
            </Box>
            <Formik
                initialValues={{ name: '', typeTask: '', user_id: data?.user_id }}
                onSubmit={onCreateList}

            >
                {(props) => (

                    <Form>
                        <FormControl >
                            <FormLabel fontWeight="bold" margin="0.2vw">
                                <Text
                                    bgGradient={allColors.bgGradientColor}
                                    bgClip='text'
                                    fontSize='sm'
                                    fontWeight='extrabold'
                                >Name List</Text>
                            </FormLabel>
                            <Input backgroundColor="white" focusBorderColor="purple.600" borderColor="purple.400" borderWidth="2px" width="16vw" onChange={(e) => setName(e.target.value)} placeholder='create name list' />
                            <FormLabel fontWeight="bold" margin="0.2vw">
                                <Text
                                    bgGradient={allColors.bgGradientColor}
                                    bgClip='text'
                                    fontSize='sm'
                                    fontWeight='extrabold'
                                >Select option card</Text>
                            </FormLabel>
                            <Select borderColor="purple.400" borderWidth="2px" width="16vw" focusBorderColor="purple.600" backgroundColor="white" value={type_task} onChange={(e) => {setTypeTask(e.target.value)}}>
                                <option value=''>Select options</option>
                                <option value='checkbox'>Checkbox</option>
                                <option value='card'>Card</option>
                                <option value='time'>Time</option>
                            </Select>
                        </FormControl>
                        <Flex justifyContent="end" >
                            <Button
                                mt={4}
                                margin="0.5vw"
                                backgroundColor="purple.800"
                                colorScheme='purple'
                                textColor="white"
                                type='submit'
                            >
                                Save
                            </Button>

                        </Flex>

                    </Form>
                )}
            </Formik>


        </Flex>

    )
}
export default CardAllAddList