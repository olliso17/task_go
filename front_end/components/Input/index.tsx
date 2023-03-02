
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
            <label className="text-sm font-bold" htmlFor={htmlFor}>
                {nameList}
            </label>
            <input className="h-9 p-2 text-sm text-violet-400 focus:bg-violet-50 shadow-[10px_10px_6px_-4px_rgba(0,0,0,0.3)]" type={type} id={id} defaultValue={defaultValue} />
        </fieldset>


    )
}