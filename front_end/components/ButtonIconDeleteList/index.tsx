
import { DeleteListInputDto } from "@/services/dto/list_dto";
import { deleteList } from "@/services/handler/list_handler";
import { useState } from "react";
import { useMutation } from "react-query";

interface Props{
    id: string
}


const ButtonIconDeleteList = ({id}:Props)=>{
  
    const mutation = useMutation(({mutationFn:deleteList, onSuccess:() =>{
        alert('list successfully deleted')
    }}))
   
    return(
        <button className="w-9 h-9 mt-2 rounded-full hover:bg-violet-600 focus:bg-violet-800 mr-2 flex justify-center items-center" onClick={()=>mutation.mutate(id)}><img src="delete.png" alt="" className="w-8 h-8"  /></button>
    )
}

export default ButtonIconDeleteList