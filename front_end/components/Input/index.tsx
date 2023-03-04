import { ChangeEventHandler } from "react"
import { FormEventHandler } from "react"

interface Props {
    nameList: string
    htmlFor: string
    id: string
    defaultValue: string
    type: string
    style: string
    value: string
    onSubmit: FormEventHandler<HTMLFormElement>
    onChange: ChangeEventHandler<HTMLInputElement>
}

export default function Inputs({ onChange, onSubmit, value, style, nameList, htmlFor, id, defaultValue, type }: Props) {
    return (
        <div className="flex flex-col m-2 justify-between h-auto items-center">
            <form onSubmit={onSubmit} className="flex flex-col w-80 ">
                <label className="text-sm font-bold" htmlFor={htmlFor}>
                    {nameList}
                </label>
                <input onChange={onChange} className="h-9 p-2 text-sm text-violet-400 border-2 border-opacity hover:border-violet-800 shadow-md rounded-md" type={type} id={id} value={value}
                />
                <div className="flex w-11/12 items-end justify-end">
                    <button type="submit" className="bg-violet-900 mt-4 w-1/3 p-1 rounded-xl hover:bg-violet-700 t text-white">Save</button>
                </div>
            </form>

        </div>


    )
}