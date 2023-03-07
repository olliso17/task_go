import { getListAll } from "@/services/handler/list_handler";
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Card, CardBody, Container, Flex, Heading, IconButton, Text } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { AiFillDelete } from "react-icons/ai";
import AcordionListTasks from "../AcordionListTask";
import { OutputListDto } from "@/services/dto/list_dto";


const ListAll = () => {
    const { data } = useQuery("lists", getListAll);

    return (

        <Flex className="flex-col overflow-auto w-full h-[680px]">
            {data?.map((lists: OutputListDto) => (
                <AcordionListTasks listId={lists.id} key={lists.id} nameList={lists.name} tasks={lists.tasks} />))}
        </Flex>


    )
}
export default ListAll