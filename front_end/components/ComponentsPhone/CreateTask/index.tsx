import { useColorsPhone } from "@/hooksPerson/colorsPhone"
import { getListId } from "@/services/handler/list_handler"
import { useMutationPostTask } from "@/services/handler/muation"
import { Button, Checkbox, Flex, FormControl, FormLabel, Input, Text, useControllableState, useToast } from "@chakra-ui/react"
import { Form, Formik } from 'formik'
import { useEffect, useState } from "react"
import { useQuery } from "react-query"
import TypeTaskCheckbox from "./TipeTaskCheckbox"

interface Props {
    list_id: string,
}

const CreateTask = ({ list_id }: Props) => {

    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState(false);
    const [time_select, setTimeSelect] = useState('');
    const allColors = useColorsPhone();
    const [tipeTaskSelect, setTipeTaskSelect] = useState(<></>);
    const { data: list } = useQuery("list", () => getListId(list_id));

    useEffect(() => {
        list
        valueTipeTask()
    })
    function valueTipeTask() {
        switch (list?.type_task) {
            case "checkbox":
                return setTipeTaskSelect(<TypeTaskCheckbox list_id={list_id} />);
                break
        }
    }
    return (
        <>
            {tipeTaskSelect}
        </>


    )
}

export default CreateTask