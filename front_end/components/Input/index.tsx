import TooltipTask from "../Tooltip/index"

interface Props {
    nameList: string
    titleList: string
    htmlFor: string
    id: string
    defaultValue: string
    type:string
}

export default function Inputs({titleList, nameList, htmlFor, id, defaultValue, type }: Props) {
    return (
        <div>
            <div className="bg-violet-900 p-1 rounded-t-2xl text-center">
                <h1 className="text-white text-xl font-bold">{titleList}</h1>
            </div>
            <fieldset className="w-full p-2 flex flex-col justify-start">
                <label className="mb-3 text-sm mt-0 font-bold" htmlFor={htmlFor}>
                    {nameList}
                </label>
                <input className="h-9 p-2 text-sm text-violet-400 focus:bg-violet-50" type={type} id={id} defaultValue={defaultValue} />
            </fieldset>
            <div className="flex items-center justify-center">
                <TooltipTask onClick={()=>{alert("clicou")}}/>
            </div>
        </div>

    )
}