import { useColorsPhone } from "@/hooksPerson/colorsPhone"
import { OutputListDto } from "@/services/dto/list_dto"
import { getListAll, getListId } from "@/services/handler/list_handler"
import { useMutationPostTask } from "@/services/handler/muation"
import { Button, Checkbox, Flex, FormControl, FormLabel, Input, Text, useControllableState, useToast } from "@chakra-ui/react"
import { Form, Formik } from 'formik'
import { useEffect, useState } from "react"
import { useQuery } from "react-query"
import TypeTaskCardWeb from "./TypeTaskCardWeb"
import TypeTaskCard from "./TypeTaskCardWeb"
import TypeTaskCheckboxWeb from "./TypeTaskCheckboxWeb"
import TypeTaskCheckbox from "./TypeTaskCheckboxWeb"
import TypeTaskTimeWeb from "./TypeTaskTimeWeb"
import TypeTaskTime from "./TypeTaskTimeWeb"

interface Props {
    list_id: string,
}

const CreateTaskWeb = ({ list_id }: Props) => {
    const [time_select, setTimeSelect] = useState('');
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
                        return setTipeTaskSelect(<TypeTaskCheckboxWeb list_id={list_id} />);
                    case "card":
                        return setTipeTaskSelect(<TypeTaskCardWeb list_id={list_id} />);
                    case "time":
                        return setTipeTaskSelect(<TypeTaskTimeWeb list_id={list_id} />);
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

export default CreateTaskWeb