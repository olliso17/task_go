import { Box, Button, Card, Flex, FormControl, FormLabel, Heading, Input, Select, Text, useColorMode } from "@chakra-ui/react"
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
import ListAllWeb from "../ListAllWeb";



const CardAllAddListWeb = () => {
    const router = useRouter();
    const [name, setName] = useState('');
    const [type_task, setTypeTask] = useState('');
    const { data } = useQuery("login", getLogin);
    const logout = useMutationPostLogout()

    const user_id = data?.user_id



    const allColors = useColorsPhone()
    const mutation = useMutationPostList()

    const onCreateList = () => {
        mutation.mutate({ name, user_id, type_task })
        setTypeTask('')
        setName('')
    }
    const { colorMode, toggleColorMode } = useColorMode()
    const style = { whidth: 40, height: 40, };
    const styleRegister = { whidth: "25vw", height: "25vh", };
    return (

        <Flex flexDirection="column"  justifyContent="space-between" alignItems="center">
            <Flex justifyContent="space-between" width="90vw" marginTop="1vw">
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
            <Flex width="90vw" justifyContent="space-evenly" alignItems="baseline">
                <Box height="88vh" marginTop="2vw">
                    <Heading marginLeft="2vw" size='2xl'>
                        <Text
                            bgGradient={allColors.bgHeadingGradientColor}
                            bgClip='text'
                            fontWeight='extrabold'
                        >Hello,</Text>
                    </Heading>
                    <Text
                        marginLeft="2vw"
                        bgGradient={allColors.bgGradientColor}
                        bgClip='text'
                        fontSize='1xl'
                        fontWeight='extrabold'
                    >Add your to-do list</Text>
                    <Box >
                        <Lottie style={styleRegister} animationData={listAnimation} />
                    </Box>
                    <Formik
                        initialValues={{ name: '', typeTask: '', user_id: data?.user_id }}
                        onSubmit={onCreateList}

                    >
                        {(props) => (

                            <Form >
                                <FormControl >
                                    <Input backgroundColor="white" focusBorderColor="purple.600" borderColor="purple.400" borderWidth="0.2vw" width="16vw" height="5vh" type="text" onChange={(e) => setName(e.target.value)} placeholder='create name list' />
                                    <Select borderColor="purple.400" borderWidth="0.2vw" width="16vw" height="5vh" focusBorderColor="purple.600" backgroundColor="white" value={type_task} onChange={(e) => { setTypeTask(e.target.value) }}>
                                        <option value=''>Select options</option>
                                        <option value='checkbox'>Checkbox</option>
                                        <option value='card'>Card</option>
                                        <option value='time'>Time</option>
                                    </Select>
                                </FormControl>
                                <Flex justifyContent="end">
                                    <Button
                                        mt={4}
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
                </Box>
                <Card alignItems="center" width="70vw" height="72vh" rounded="2xl" boxShadow="dark-lg" overflow="auto" backgroundColor={allColors.bgAccordionButton}  __css={{
                        '&::-webkit-scrollbar-button': {
                            w: '2',
                         
                        },
                        '&::-webkit-scrollbar': {
                            w: '2',
                       
                        },
                        '&::-webkit-scrollbar-track': {
                            w: '2',
                           
                        },
                        '&::-webkit-scrollbar-thumb': {
                            borderRadius: '10',
                            bg: `purple.300`,
                        },

                    }}>  <ListAllWeb /></Card>

            </Flex>
        </Flex>

    )
}
export default CardAllAddListWeb