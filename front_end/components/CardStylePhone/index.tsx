
interface Props {
    content: JSX.Element
    contentButton1: JSX.Element
    contentButton2: JSX.Element
}

const CardStylePhone = ({ content, contentButton1, contentButton2 }: Props) => (
    <div className="bg-black w-96 h-4/5 p-2 rounded-2xl shadow-[0_10px_6px_4px_rgba(0,0,0,0.3)]">
        <div className="bg-violet-300 w-full h-full rounded-2xl">
            <div className="flex">
                <button className="w-48 h-20 bg-violet-300 hover:bg-violet-400 border-violet-400 border-solid border-l-0 border-b-0 border-r border-t-0 rounded-t-lg  ">{contentButton1}</button >
                <button className="w-48 h-20 bg-violet-500 hover:bg-violet-400 border-violet-400 border-solid border-l-0 border-b-0 border-r border-t-0 rounded-t-lg ">{contentButton2}</button>
            </div>
            {content}
        </div>

    </div>
)

export default CardStylePhone