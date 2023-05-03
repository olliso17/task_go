import { useColorsPhone } from "@/hooksPerson/colorsPhone"
import { OutputListDto } from "@/services/dto/list_dto"
import { OutputTaskDto } from "@/services/dto/task_dto"
import { getListAll, getListId } from "@/services/handler/list_handler"
import { useMutationPostTask } from "@/services/handler/muation"
import { patchTaskEdit } from "@/services/handler/task_handler"
import { Button, Checkbox, Flex, FormControl, FormLabel, Input, Text, useControllableState, useToast } from "@chakra-ui/react"
import { Form, Formik } from 'formik'
import { useEffect, useState } from "react"
import { useMutation, useQuery } from "react-query"
import AccordionTasksCard from "./AcordionTasksCard"
import AccordionTasksCheckbox from "./AcordionTasksCheckbox"


interface Props {
    task: OutputTaskDto
    list_id: string
}

const AcordionTasks = ({ task, list_id }: Props) => {
    const allColors = useColorsPhone();
    const [tipeTaskSelect, setTipeTaskSelect] = useState(<></>);
    const { data: lists } = useQuery("lists", getListAll);

    useEffect(() => {
        lists
        valueTipeTask()
    }, [])
    function valueTipeTask() {
        lists?.map((list: OutputListDto) => {
            if (list.id == list_id) {
                switch (list?.type_task) {
                    case "checkbox":
                        return setTipeTaskSelect(<AccordionTasksCheckbox key={task.toString()} task={task}  />);
                    case "card":
                        return setTipeTaskSelect(<AccordionTasksCard key={task.toString()} task={task}  />);
                }
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