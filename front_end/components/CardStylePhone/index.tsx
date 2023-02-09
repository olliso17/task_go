
interface Props{
    content: JSX.Element
}

const CardStylePhone = ({content}:Props) => (
    <div className="bg-violet-300 w-1/4 h-5/6 rounded-2xl">
        {content}
    </div>
)

export default CardStylePhone