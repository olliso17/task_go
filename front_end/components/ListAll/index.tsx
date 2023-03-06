import { getListAll } from "@/services/handler/list_handler";
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Card, CardBody, Container, Flex, IconButton, Text } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { AiFillDelete } from "react-icons/ai";
import AcordionListTasks from "../AcordionListTask";
import { OutputListDto } from "@/services/dto/list_dto";


const ListAll = () => {
    const { data } = useQuery("lists", getListAll);

    return (

        // data?.map((lists: OutputListDto) => (

        //     <div className="w-full flex justify-center items-center">
        //         <button className='flex flex-col w-11/12 mt-3 justify-center items-center hover:bg-violet-600'>
        //             <div key={lists.id.toString()} className='flex flex-col rounded-2xl p-1 w-11/12 bg-white justify-around items-center'>
        //                 <h1>{lists.name}</h1>
        //                 <p>{lists.tasks != null ? lists.tasks.map((task) => <p>{task.title}</p>) : []}</p>
        //             </div>
        //         </button>
        //        <ButtonIconDeleteList id={lists.id}/>
        //     </div>

        // ))
        <Flex className="flex-col overflow-auto w-full h-[680px]">
            {data?.map((lists: OutputListDto) => (
                <AcordionListTasks key={lists.id} nameList={lists.name} tasks={lists.tasks}/>))}
        </Flex>


    )
}
export default ListAll