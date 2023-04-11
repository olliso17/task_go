import { postList } from "@/services/handler/list_handler"
import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Text, useColorMode, useColorModeValue, useToast } from "@chakra-ui/react"
import Lottie from "lottie-react";
import { useState } from "react"
import * as listAnimation from "public/list.json";
import * as lightOff from "public/light_off.json";
import * as lightOn from "public/light_on.json";
import { Form, Formik } from "formik";
import { useColors } from "@/hooksPerson/colors";
import { useMutation } from "react-query";



const CardAllAddList = () => {
    const [name, setName] = useState('');
    const toast = useToast()
    const allColors = useColors()
    const mutation = useMutation({
        mutationFn: postList, onSuccess: ((data) => {
            toast({
                title: 'Liste create.',
                description: `"List "${name}" successfully created."`,
                status: 'success',
                duration: 9000,
                isClosable: true,
            })

        }), onError(error) {
            toast({
                title: `${error} `,
                status: 'error',
                duration: 9000,
                isClosable: true,

            })

        },
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
                initialValues={{ name: '', }}
                onSubmit={onCreateList}

            >
                {(props) => (

                    <Form>
                        <FormControl >
                            <FormLabel fontWeight="bold">
                                <Text
                                    bgGradient={allColors.bgGradientColor}
                                    bgClip='text'
                                    fontSize='sm'
                                    fontWeight='extrabold'
                                >Name List</Text>
                            </FormLabel>
                            <Input backgroundColor="white" focusBorderColor="purple.600" borderColor="purple.400" borderWidth="2px" width="16vw" onChange={(e) => setName(e.target.value)} placeholder='create name list' />
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