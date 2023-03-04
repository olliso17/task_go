import { postList } from "@/services/handler/list_handler"
import { useState } from "react"
import { useMutation } from "react-query"
import Inputs from "../Input"


const CardAllAddList = () => {
    const [name, setName] = useState('');
    const mutation = useMutation({mutationFn:postList, onSuccess:() =>{
        alert('create list successfully added')
    }})
    const onCreateList = (e) => {
        e.preventDefault()
        mutation.mutate({ name })
        setName('')
    }
    return (

        <Inputs onSubmit={onCreateList} onChange={(e) => setName(e.target.value)}  value={name} style=" w-full p-2 flex flex-col justify-start " type='text' nameList="Name List" htmlFor="nameList" id="nameList" defaultValue='"Add Name List"' />

    )
}
export default CardAllAddList