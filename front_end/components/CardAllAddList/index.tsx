import { postList } from "@/services/handler/list_handler"
import { useToast } from "@chakra-ui/react"
import { useState } from "react"
import { useMutation } from "react-query"
import Inputs from "../Input"


const CardAllAddList = () => {
    const [name, setName] = useState('');
    const toast = useToast()
    const mutation = useMutation({mutationFn:postList, onSuccess:() =>{
        toast({
            title: 'Liste create.',
            description: `"List ${name} successfully created."`,
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
    }})
    const onCreateList = () => {
        mutation.mutate({ name })
        setName('')
    }
    return (

        <Inputs onSubmit={onCreateList} onChange={(e) => setName(e.target.value)}  value={name} style=" w-full p-2 flex flex-col justify-start " type='text' nameList="Name List" htmlFor="nameList" id="nameList" defaultValue='"Add Name List"' />

    )
}
export default CardAllAddList