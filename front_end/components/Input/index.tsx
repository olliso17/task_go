import { Box, Button,Flex, Heading, Text, useColorMode} from "@chakra-ui/react"
import { ChangeEventHandler } from "react"
import { FormEventHandler } from "react"
import Lottie from "lottie-react";
import * as taskAnimation from "public/list.json";

interface Props {
    nameList: string
    htmlFor: string
    id: string
    defaultValue: string
    type: string
    style: string
    value: string
    onSubmit: FormEventHandler<HTMLFormElement>
    onChange: ChangeEventHandler<HTMLInputElement>
}

export default function Inputs({ onChange, onSubmit, value, style, nameList, htmlFor, id, defaultValue, type }: Props) {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <Flex justifyContent="space-between" alignItems="center" className="m-2 h-80 flex-col ">
            <Button onClick={toggleColorMode}>
                Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
            </Button>
            <Box className="mt-7">
                <Heading size='3xl'>Hello!,</Heading>
                <Text fontSize='3xl'>Add your to-do list</Text>
                <Lottie animationData={taskAnimation} />
            </Box>

            <form onSubmit={onSubmit} className="flex flex-col w-80 ">
                <label className="text-sm font-bold" htmlFor={htmlFor}>
                    {nameList}
                </label>
                <input onChange={onChange} className="h-9 p-2 text-sm text-violet-400 border-2 border-opacity hover:border-violet-800 shadow-md rounded-md" type={type} id={id} value={value}
                />
                <div className="flex w-11/12 items-end justify-end">
                    <button type="submit" className="bg-violet-900 mt-4 w-1/3 p-1 rounded-xl hover:bg-violet-700 t text-white">Save</button>
                </div>
            </form>

        </Flex>


    )
}