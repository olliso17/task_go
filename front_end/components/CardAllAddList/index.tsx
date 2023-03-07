import { postList } from "@/services/handler/list_handler"
import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Text, useColorMode, useColorModeValue, useToast } from "@chakra-ui/react"
import Lottie from "lottie-react";
import { useState } from "react"
import { useMutation } from "react-query"
import * as listAnimation from "public/list.json";
import * as lightOff from "public/light_off.json";
import * as lightOn from "public/light_on.json";
import { Form, Formik } from "formik";


const CardAllAddList = () => {
    const [name, setName] = useState('');
    const toast = useToast()
    const textColor = useColorModeValue('gray.800', 'white')
    const bgButtonColor = useColorModeValue('purple.200', 'purple.900')
    const bgGradientColor = useColorModeValue('linear(to-l, purple.900, purple.500)', 'linear(to-l, purple.500, purple.200)')

    const mutation = useMutation({
        mutationFn: postList, onSuccess: () => {
            toast({
                title: 'Liste create.',
                description: `"List "${name}" successfully created."`,
                status: 'success',
                duration: 9000,
                isClosable: true,
            })
        }
    })
    const onCreateList = () => {
        mutation.mutate({ name })
        setName('')
    }
    const { colorMode, toggleColorMode } = useColorMode()
    const style = { whidth: 40, height: 40, };
    return (

        <Flex height="60vh" flexDirection="column" justifyContent="space-between" margin="8px" alignItems="center">
            <Flex width="19vw" justifyContent="end">
                <Button colorScheme={bgButtonColor} backgroundColor={bgButtonColor} rounded="full" onClick={toggleColorMode}>
                    <Lottie style={style} animationData={colorMode == "light" ? lightOff : lightOn} />
                </Button>
            </Flex>

            <Box className="mt-7">
                <Heading textColor={textColor} size='3xl'>Hello!,</Heading>
                <Text
                    bgGradient={bgGradientColor}
                    bgClip='text'
                    fontSize='2xl'
                    fontWeight='extrabold'
                >Add your to-do list</Text>
                <Lottie animationData={listAnimation} />
            </Box>

            <Formik
                initialValues={{ name: '', }}
                onSubmit={onCreateList}

            >
                {(props) => (

                    <Form>
                        <FormControl >
                            <FormLabel fontWeight="bold">Name List</FormLabel>
                            <Input backgroundColor="white" focusBorderColor="purple.900" borderColor="purple.400" borderWidth="2px" width="16vw" onChange={(e) => setName(e.target.value)} placeholder='create name list' />
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

        </Flex>

    )
}
export default CardAllAddList