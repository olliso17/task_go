import { useColorsPhone } from "@/hooksPerson/colorsPhone"
import { OutputListDto } from "@/services/dto/list_dto"
import { OutputTaskDto } from "@/services/dto/task_dto"
import { getListAll } from "@/services/handler/list_handler"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { useQuery } from "react-query"
import AccordionTasksCard from "./ListTasksCardWeb"
import AccordionTasksCheckbox from "./ListTasksCheckboxWeb"
import AccordionTasksTime from "./ListTasksTimeweb"
import ListTasksCardWeb from "./ListTasksCardWeb"
import ListTasksCheckboxWeb from "./ListTasksCheckboxWeb"
import ListTasksTimeweb from "./ListTasksTimeweb"
import { Box, Card, CardBody, Stack, StackDivider } from "@chakra-ui/react"


interface Props {
    task: OutputTaskDto
    list_id: string

}

const ListTasksWeb = ({ task, list_id }: Props) => {
    const allColors = useColorsPhone();
    const [tipeTaskSelect, setTipeTaskSelect] = useState(<></>);
    const { data: lists } = useQuery("lists", getListAll);

    useEffect(() => {
        task
        list_id
        valueTipeTask()
    }, [task, list_id])
    function valueTipeTask() {
        lists?.map((list: OutputListDto) => {
            if (list.id == list_id) {
                switch (list?.type_task) {
                    case "checkbox":
                        return setTipeTaskSelect(<ListTasksCheckboxWeb key={task.id} task={task} />);
                    case "card":
                        return setTipeTaskSelect(<ListTasksCardWeb key={task.id} task={task} />);
                    case "time":
                        return setTipeTaskSelect(<ListTasksTimeweb key={task.id} task={task} />);
                }
            }
        })

    }

    return (
        <Card backgroundColor={allColors.bg}>
            <CardBody>
                <Stack divider={<StackDivider />} spacing='4'>
                    <Box>
                        {tipeTaskSelect}

                    </Box>
                </Stack>
            </CardBody>
        </Card>


    )
}

export default ListTasksWeb