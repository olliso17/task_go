import { OutputListDto } from "@/services/dto/list_dto"
import { getListAll } from "@/services/handler/list_handler";
import { count } from "console";
import { useQuery } from "react-query";
import Task from "../Task";


const ListAll = () => {
    const { data } = useQuery("lists", getListAll);

    return (

        data?.map((lists: OutputListDto) => (
            <button className='flex flex-col w-full mt-3 justify-center items-center hover:bg-violet-600'>
                <div key={lists.id.toString()} className='flex flex-col rounded-2xl w-11/12 p-1 m-1 bg-white justify-around items-center'>
                    <h1>{lists.name}</h1>
                    <p>{lists.tasks != null ? lists.tasks.map((task) => <p>{task.title}</p>) : []}</p>
                </div>
            </button>
        ))

    )
}
export default ListAll