import TaskAdd from "../TaskAdd"
import TooltipTask from "../Tooltip/index"

interface Props {
    nameList: string
    htmlFor: string
    id: string
    defaultValue: string
    type: string
}

export default function Inputs({ nameList, htmlFor, id, defaultValue, type }: Props) {
    return (

        <fieldset className="w-full p-2 flex flex-col justify-start">
            <label className="mb-3 text-sm mt-0 font-bold" htmlFor={htmlFor}>
                {nameList}
            </label>
            <input className="h-9 p-2 text-sm text-violet-400 focus:bg-violet-50" type={type} id={id} defaultValue={defaultValue} />
        </fieldset>


    )
}