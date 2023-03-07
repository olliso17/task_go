import { getListAll } from "@/services/handler/list_handler";
import { Flex } from "@chakra-ui/react";
import { useQuery } from "react-query";
import AcordionListTasks from "../AcordionListTask";
import { OutputListDto } from "@/services/dto/list_dto";


const ListAll = () => {
    const { data } = useQuery("lists", getListAll);

    return (

        <Flex overflow="auto" height="60vh" width="16vw">
            {data?.map((lists: OutputListDto) => (
                <AcordionListTasks listId={lists.id} key={lists.id} nameList={lists.name} tasks={lists.tasks} />))}
        </Flex>


    )
}
export default ListAll