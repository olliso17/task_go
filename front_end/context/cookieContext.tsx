import React, { ReactNode, useContext, useEffect, useState } from "react";
import { useGetCookie } from "@/hooksPerson/getCookie";
import { Button, Center, Flex, Stack } from "@chakra-ui/react";
import { useColorsPhone } from "@/hooksPerson/colorsPhone";
import CardStylePhone from "@/components/ComponentsPhone/CardStylePhone";
import CreateUser from "@/components/ComponentsPhone/CreateUser";
import CardStyleWeb from "@/components/ComponentsWeb/CardStyleWeb";

type Props = {
    children: ReactNode;

};


export const MyContext = React.createContext(false);


export const MyProvider = ({
    children
}: Props) => {
    const [active, setActive] = useState(false);
    const allColors = useColorsPhone()
    return (
        <MyContext.Provider value={active}>

            <Center margin="0.3vw">
                <Button width="10vw" onClick={e => { setActive(state => !state) }}>{active == false ? "Web" : "Mobile"}</Button>
            </Center>

            <Flex backgroundColor={allColors.bg} width="100vw" justifyContent="center" alignItems="center" flexDirection="column" height="100vh">
            {active == false ? <CardStylePhone content= {<CreateUser />} /> : <CardStyleWeb content={<CreateUser />} />}
               
            </Flex>
        </MyContext.Provider>
    );
};

function teste() {

}