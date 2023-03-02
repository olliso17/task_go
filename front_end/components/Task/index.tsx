import { OutputTaskDto } from "@/services/dto/task_dto"

type ITask={
    task: OutputTaskDto
    index: string
}

const Task = ({task, index}: ITask) =>(
  <div key={index}>
    <li>{task.title}</li>
    <li>{task.description}</li>
    <li>{task.status==false?'false':'true'}</li>
    <li>{task.priority==false?'false':'true'}</li>
    <li>{task.is_deleted==false?'false':'true'}</li>
    <li>{task.time_select}</li>
  </div>
)
export default Task