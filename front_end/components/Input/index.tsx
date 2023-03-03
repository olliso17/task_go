
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

        <div className="flex flex-col w-80 ">
            <label className="text-sm font-bold" htmlFor={htmlFor}>
                {nameList}
            </label>
            <input className="h-9 p-2 text-sm text-violet-400 focus:bg-violet-50 shadow-md rounded-md" type={type} id={id} defaultValue={defaultValue} />
        </div>

    )
}