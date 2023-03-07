import { postList } from "@/services/handler/list_handler"
import { Box, Button, Flex, Heading, Text, useColorMode, useToast } from "@chakra-ui/react"
import Lottie from "lottie-react";
import { useState } from "react"
import { useMutation } from "react-query"
import * as listAnimation from "public/list.json";
import * as lightOff from "public/light_off.json";
import * as lightOn from "public/light_on.json";


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

        <Flex justifyContent="space-between" alignItems="center" className="m-2 h-80 flex-col ">
            <Button backgroundColor="purple.400" rounded="50%" onClick={toggleColorMode}>
                <Lottie style={style} animationData={colorMode == "light" ? lightOff : lightOn} />
            </Button>
            <Box className="mt-7">
                <Heading size='3xl'>Hello!,</Heading>
                <Text fontSize='3xl'>Add your to-do list</Text>
                <Lottie animationData={listAnimation} />
            </Box>

            <form onSubmit={onCreateList} className="flex flex-col w-80 ">
                <label className="text-sm font-bold" htmlFor="nameList">
                    <p>Name List</p>
                </label>
                <input onChange={(e) => setName(e.target.value)} className="h-9 p-2 text-sm text-violet-400 border-2 border-opacity hover:border-violet-800 shadow-md rounded-md" type="text" id="nameList" value={name}
                />
                <div className="flex w-11/12 items-end justify-end">
                    <button type="submit" className="bg-violet-900 mt-4 w-1/3 p-1 rounded-xl hover:bg-violet-700 t text-white">Save</button>
                </div>
            </form>

        </Flex>

    )
}
export default CardAllAddList