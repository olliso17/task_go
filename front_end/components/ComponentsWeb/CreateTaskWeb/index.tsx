import { useColorsPhone } from "@/hooksPerson/colorsPhone"
import { OutputListDto } from "@/services/dto/list_dto"
import { getListAll, getListId } from "@/services/handler/list_handler"
import { useMutationPostTask } from "@/services/handler/muation"
import { Box, Button, Card, CardBody, Checkbox, Flex, FormControl, FormLabel, Input, Stack, StackDivider, Text, useControllableState, useToast } from "@chakra-ui/react"
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
    list: OutputListDto

}


const CreateTaskWeb = ({ list }: Props) => {
    const [time_select, setTimeSelect] = useState('');
    const allColors = useColorsPhone();
    const [tipeTaskSelect, setTipeTaskSelect] = useState(<></>);
  

    useEffect(() => {
        list
        valueTipeTask()
    }, [list])



    function valueTipeTask() {

        switch (list?.type_task) {
            case "checkbox":
                return setTipeTaskSelect(<TypeTaskCheckboxWeb list_id={list.id} />);
            case "card":
                return setTipeTaskSelect(<TypeTaskCardWeb list_id={list.id} />);
            case "time":
                return setTipeTaskSelect(<TypeTaskTimeWeb list_id={list.id} />);
        }


    }

    return (
        <Card margin="1vw" backgroundColor={allColors.colorCard}>
            <CardBody>
                <Stack divider={<StackDivider />} spacing='4'>
                    <Box>
                        {tipeTaskSelect}
                    </Box>
                </Stack>

            </CardBody>
        </Card >


    )
}

export default CreateTaskWeb