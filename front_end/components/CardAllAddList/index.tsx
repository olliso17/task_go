import { postList } from "@/services/handler/list_handler"
import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Text, useColorMode, useToast } from "@chakra-ui/react"
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
    const mutation = useMutation({
        mutationFn: postList, onSuccess: () => {
            toast({
                title: 'Liste create.',
                description: `"List ${name} successfully created."`,
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

        <Flex height="60vh" justifyContent="space-between" alignItems="center" className="m-2 h-80 flex-col ">
            <Flex width={300} justifyContent="end">
                <Button backgroundColor="purple.400" rounded="50%" onClick={toggleColorMode}>
                    <Lottie style={style} animationData={colorMode == "light" ? lightOff : lightOn} />
                </Button>
            </Flex>

            <Box className="mt-7">
                <Heading textColor="purple.900" size='3xl'>Hello!,</Heading>
                <Text
                    bgGradient='linear(to-l, purple.900, purple.500)'
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
                                isLoading={props.isSubmitting}
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