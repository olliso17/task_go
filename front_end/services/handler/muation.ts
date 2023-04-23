import { useToast } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { useMutation } from "react-query"
import { postList } from "./list_handler"
import { postLogin, postLogout } from "./login_handler"
import { postUser } from "./user_handler"

const useMutationPostList= () => {
    const toast = useToast()
    const mutation = useMutation({
        mutationFn: postList, onSuccess: ((data) => {
            toast({
                title: 'Liste create.',
                description: `"List successfully created."`,
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
    return mutation
}

const useMutationPostLogin= () => {
    const toast = useToast()
    const router = useRouter();

    const mutation = useMutation({
        mutationFn: postLogin, onSuccess: (data) => {
            if (data.mensage == "Unable to create user please review your credentials") {
                toast({
                    title: 'Unable to create user please review your credentials',
                    status: 'warning',
                    duration: 9000,
                    isClosable: true,

                })

            }
            if (data.mensage == "User created successfully") {
                toast({
                    title: 'User created successfully',
                    status: 'success',
                    duration: 9000,
                    isClosable: true,

                })

                router.push('/lists')
            }

        }, onError(error) {
            toast({
                title: `${error} `,
                status: 'error',
                duration: 9000,
                isClosable: true,

            })
            
        },

    })
    return mutation
}

const useMutationPostUser= () => {
    const toast = useToast()
    const router = useRouter();

    const mutation = useMutation({
        mutationFn: postUser, onSuccess: (data) => {
            if (data.mensage == "Unable to create user please review your credentials") {
                toast({
                    title: 'Unable to create user please review your credentials',
                    status: 'warning',
                    duration: 9000,
                    isClosable: true,

                })

            }
            if (data.mensage == "User created successfully") {
                toast({
                    title: 'User created successfully',
                    status: 'success',
                    duration: 9000,
                    isClosable: true,

                })

                router.push('/lists')
            }

        }, onError(error) {
            toast({
                title: `${error} `,
                status: 'error',
                duration: 9000,
                isClosable: true,

            })
            
        },

    })
    return mutation
}

const useMutationPostLogout= () => {
    const toast = useToast()
    const router = useRouter();

    const mutation = useMutation({
        mutationFn: postLogout, onSuccess: () => {
            router.push('/login')
        }, onError(error) {
            toast({
                title: `${error} `,
                status: 'error',
                duration: 9000,
                isClosable: true,

            })
            
        },

    })
    return mutation
}

export { useMutationPostList, useMutationPostLogin, useMutationPostUser, useMutationPostLogout}