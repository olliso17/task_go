import { OutputTaskDto } from "@/services/dto/task_dto"
import { getTasks } from "@/services/handler/task_handler"
import { useQuery } from "react-query"
import TitleList from "../Title"



const Task = () => {
  const { data } = useQuery("tasks", getTasks);

  return (
    data?.map((task: OutputTaskDto) => (
      <div className='flex flex-col justify-around items-center'>
        <div key={task.id.toString()} className='flex flex-col rounded-2xl w-11/12 p-1 m-1 bg-white justify-around items-center'>
          <h1 className="text-white text-xl font-bold rounded-2xl bg-violet-900 p-1 w-11/12 text-center">{task.title}</h1>
          <p>Description:{task.description}</p>
          <p>List:{task.list_id}</p>
          <p>{task.status == false ? 'ativo' : 'encerrado'}</p>
          <p>{task.priority == false ? 'false' : 'true'}</p>
          <p>{task.is_deleted == false ? 'false' : 'true'}</p>
          <p>{task.time_select}</p>
        </div>
      </div>
    )

    ))}
export default Task