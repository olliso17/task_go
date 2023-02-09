import Inputs from "../Input"
import TaskAdd from "../TaskAdd"
import TitleList from "../Title"
import TooltipTask from "../Tooltip"




const CardAllAdd = () => (
    <div className="flex flex-col justify-between h-auto items-center">
        <TitleList titleList="Add List"/>
        <Inputs style="w-full p-2 flex flex-col justify-start" type='text' nameList="Name List" htmlFor="nameList" id="nameList" defaultValue='"Add Name List"' />
        <div className="flex items-center justify-center">
            <TooltipTask onClick={() => { alert("clicou") }} />
        </div>
        <div className="bg-white w-11/12 h-auto rounded-2xl">
            <TaskAdd />
        </div>
    </div>
)
export default CardAllAdd