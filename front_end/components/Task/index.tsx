import { OutputTaskDto } from "@/services/dto/task_dto"
import TitleList from "../Title"

type ITask = {
  task: OutputTaskDto
  index: string
}

const Task = ({ task, index }: ITask) => (
  <div key={index} className='flex flex-col rounded-2xl w-11/12 p-1 m-1 bg-white justify-around items-center'>
    <h1 className="text-white text-xl font-bold rounded-2xl bg-violet-900 p-1 w-11/12 text-center">{task.title}</h1>
    <p>Description:{task.description}</p>
    <p>{task.status == false ? 'ativo' : 'encerrado'}</p>
    <p>{task.priority == false ? 'false' : 'true'}</p>
    <p>{task.is_deleted == false ? 'false' : 'true'}</p>
    <p>{task.time_select}</p>
  </div>


)
export default Task