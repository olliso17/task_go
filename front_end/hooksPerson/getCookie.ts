import Cookies from "js-cookie";
import { useRouter } from "next/router"
import { useState } from "react";

export const useGetCookie = () => {
    const router = useRouter();
    const cookie = Cookies.get('session_token');
    const [token, setToken] = useState<boolean>(false);

    if (cookie == undefined) {
        setToken(false)
    }
    setToken(true);
    return token
}