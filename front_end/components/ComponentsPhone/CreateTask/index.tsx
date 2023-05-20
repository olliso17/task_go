import { useColorsPhone } from "@/hooksPerson/colorsPhone"
import { OutputListDto } from "@/services/dto/list_dto"
import { getListAll, getListId } from "@/services/handler/list_handler"
import { useMutationPostTask } from "@/services/handler/muation"
import { AccordionPanel, Box, Button, Card, CardBody, Checkbox, Flex, FormControl, FormLabel, Input, Stack, StackDivider, Text, useControllableState, useToast } from "@chakra-ui/react"
import { Form, Formik } from 'formik'
import { useEffect, useState } from "react"
import { useQuery } from "react-query"
import TypeTaskCard from "./TypeTaskCard"
import TypeTaskCheckbox from "./TypeTaskCheckbox"
import TypeTaskTime from "./TypeTaskTime"

interface Props {
    list: OutputListDto,
}

const CreateTask = ({ list }: Props) => {
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
                return setTipeTaskSelect(<TypeTaskCheckbox list_id={list.id} />);
            case "card":
                return setTipeTaskSelect(<TypeTaskCard list_id={list.id} />);
            case "time":
                return setTipeTaskSelect(<TypeTaskTime list_id={list.id} />);
        }

    }

    return (
        <AccordionPanel padding="0.2vw" margin="0.1vw">
            <Card margin="1vw" backgroundColor={allColors.colorCard}>
                <CardBody>
                    <Stack divider={<StackDivider />} spacing='4'>
                        <Box>
                            {tipeTaskSelect}
                        </Box>
                    </Stack>
                </CardBody>
            </Card>
        </AccordionPanel>
    )
}

export default CreateTask