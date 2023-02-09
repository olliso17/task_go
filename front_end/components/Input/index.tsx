import { HtmlHTMLAttributes } from "react"
import TaskAdd from "../TaskAdd"
import TooltipTask from "../Tooltip/index"

interface Props {
    nameList: string
    htmlFor: string
    id: string
    defaultValue: string
    type: string
    style: string
}

export default function Inputs({style, nameList, htmlFor, id, defaultValue, type }: Props) {
    return (

        <fieldset className={style}>
            <label className="mb-3 text-sm font-bold" htmlFor={htmlFor}>
                {nameList}
            </label>
            <input className="h-9 p-2 text-sm text-violet-400 focus:bg-violet-50" type={type} id={id} defaultValue={defaultValue} />
        </fieldset>


    )
}