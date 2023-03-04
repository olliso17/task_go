import Inputs from "../Input"
import TooltipTask from "../Tooltip"

const CardAllAddList = () => {
    return (
        <div className="flex flex-col m-2 justify-between h-auto items-center">
            <Inputs style=" w-full p-2 flex flex-col justify-start " type='text' nameList="Name List" htmlFor="nameList" id="nameList" defaultValue='"Add Name List"' />

            <div className="flex w-11/12 items-end justify-end">
                <button className="bg-violet-900 mt-4 w-1/3 p-1 rounded-xl hover:bg-violet-700 t text-white">Save</button>
            </div>
        </div>
    )
}
export default CardAllAddList