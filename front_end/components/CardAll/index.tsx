import Inputs from "../Input"
import TooltipTask from "../Tooltip"




const CardAllAdd = () => (
    <div className="flex flex-col m-2 justify-between h-auto items-center">
        <Inputs style="w-full p-2 flex flex-col justify-start" type='text' nameList="Name List" htmlFor="nameList" id="nameList" defaultValue='"Add Name List"' />
        <div className="flex items-center justify-center">
            <TooltipTask onClick={() => { alert("clicou") }} />
        </div>
        {/* <div className="bg-white w-11/12 h-auto rounded-2xl">
            <TaskAdd />
        </div> */}
    </div>
)
export default CardAllAdd