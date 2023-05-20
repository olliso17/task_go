import { useColorsPhone } from "@/hooksPerson/colorsPhone"
import { OutputListDto } from "@/services/dto/list_dto"
import { OutputTaskDto } from "@/services/dto/task_dto"
import { getListAll } from "@/services/handler/list_handler"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { useQuery } from "react-query"
import AccordionTasksCard from "./AcordionTasksCard"
import AccordionTasksCheckbox from "./AcordionTasksCheckbox"
import AccordionTasksTime from "./AcordionTasksTime"


interface Props {
    list: OutputListDto

}

const AcordionTasks = ({ list }: Props) => {
    const allColors = useColorsPhone();
    const [tipeTaskSelect, setTipeTaskSelect] = useState(<></>);
    useEffect(() => {
        list
        valueTipeTask()
    }, [list])


    function valueTipeTask() {
        list.tasks?.map(task => {
            console.log(task)
            switch (list?.type_task) {
                case "checkbox":
                    return setTipeTaskSelect(<AccordionTasksCheckbox key={task.id} task={task} />);
                case "card":
                    return setTipeTaskSelect(<AccordionTasksCard key={task.id} task={task} />);
                case "time":
                    return setTipeTaskSelect(<AccordionTasksTime key={task.id} task={task} />);

            }
        })

    }

    return (
        <>
            {tipeTaskSelect}
        </>


    )
}

export default AcordionTasks