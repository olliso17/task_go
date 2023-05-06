import { useToast } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { useMutation } from "react-query"
import { deleteList, postList } from "./list_handler"
import { postLogin, postLogout } from "./login_handler"
import { postUser } from "./user_handler"
import { getCookie } from 'cookies-next';
import { patchTaskCompleted, postTask } from "./task_handler"


const useMutationPostList = () => {
    const toast = useToast()
    const router = useRouter();
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

const useMutationPostTask = () => {
    const toast = useToast()
    const router = useRouter();
    const token = getCookie('session_token');
    const mutation = useMutation({
        mutationFn: postTask, onSuccess: () => {
            toast({
                title: 'Task created successfully.',
                status: 'success',
                duration: 9000,
                isClosable: true,
            })
            window.location.reload()
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

const useMutationPostLogin = () => {
    const toast = useToast()
    const router = useRouter();
    const token = getCookie('session_token');
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
            if (data.mensage == "Login successfully") {
                toast({
                    title: 'Login successfully',
                    status: 'success',
                    duration: 9000,
                    isClosable: true,

                })
                if (token != "") {
                    router.push(`/lists`)

                }
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

const useMutationPostUser = () => {
    const toast = useToast()
    const router = useRouter();
    const token = getCookie('session_token');
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

                if (token != "") {
                    router.push(`/lists`)

                }
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

const useMutationPostLogout = () => {
    const toast = useToast()
    const router = useRouter();
    const mutation = useMutation({
        mutationFn: postLogout, onSuccess: () => {
            console.log('success')
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

const useMutationPostTaskCompleted = () => {
    const toast = useToast()
    const mutation = useMutation({
        mutationFn: patchTaskCompleted, onSuccess: () => {
            toast({
                title: 'Task finished.',
                status: 'success',
                duration: 9000,
                isClosable: true,
            })
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

const useMutationDeleteList = () => {
    const toast = useToast()
    const router = useRouter();
    const mutation = useMutation({
        mutationFn: deleteList, onSuccess: () => {
            toast({
                title: 'List deleted.',
                status: 'success',
                duration: 9000,
                isClosable: true,
            })
            // window.location.reload()

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
export { useMutationPostList, useMutationPostLogin, useMutationPostUser, useMutationPostLogout, useMutationPostTask, useMutationPostTaskCompleted, useMutationDeleteList }