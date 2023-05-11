import React, { ReactNode, useEffect, useState } from "react";
import { Box, Button, Center, Flex, Stack } from "@chakra-ui/react";
import { useColorsPhone } from "@/hooksPerson/colorsPhone";
import Head from "next/head";
import Cookies from "js-cookie";




type Props = {
    children: ReactNode,
};
type Value = {
    active: boolean,
    token: string,
};

export const LayoutContext = React.createContext({} as Value);


export const LayoutProvider = ({
    children
}: Props) => {
    const [active, setActive] = useState(false);
    const [token, setToken] = useState('');
    const allColors = useColorsPhone()
    useEffect(() => {
        const cookie = Cookies.get('session_token')
        if (cookie !== undefined) {
            setToken(cookie)
        }
    }, [token])

    return (
        <LayoutContext.Provider value={{ active, token }}>
            <Box width="100vw" height="100vh">
                <Head>
                    <title>List Task</title>
                    <meta name="description" content="Generated by create next app" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Center margin="0.3vw">

                    {/*token != '' ?*/ <Button width="10vw" onClick={e => { setActive(state => !state) }}>{active == false ? "Web" : "Mobile"}</Button> /*: <></>*/}
                </Center>
                <Flex backgroundColor={allColors.bg} width="100vw" justifyContent="center" alignItems="center" flexDirection="column" height="100vh">
                    {children}
                </Flex>

            </Box>
        </LayoutContext.Provider>
    );
};


