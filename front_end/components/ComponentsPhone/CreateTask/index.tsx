import { useColorsPhone } from "@/hooksPerson/colorsPhone"
import { OutputListDto } from "@/services/dto/list_dto"
import { getListAll, getListId } from "@/services/handler/list_handler"
import { useMutationPostTask } from "@/services/handler/muation"
import { Button, Checkbox, Flex, FormControl, FormLabel, Input, Text, useControllableState, useToast } from "@chakra-ui/react"
import { Form, Formik } from 'formik'
import { useEffect, useState } from "react"
import { useQuery } from "react-query"
import TypeTaskCard from "./TipeTaskCard"
import TypeTaskCheckbox from "./TipeTaskCheckbox"

interface Props {
    list_id: string,
}

const CreateTask = ({ list_id }: Props) => {
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
                        return setTipeTaskSelect(<TypeTaskCheckbox list_id={list_id} />);
                    case "card":
                        return setTipeTaskSelect(<TypeTaskCard list_id={list_id} />);
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

export default CreateTask