
interface Props{
    titleList: string
}


const TitleList = ({titleList}:Props) => (
    <div className="bg-violet-900 p-1 w-full rounded-t-2xl text-center">
        <h1 className="text-white text-xl font-bold">{titleList}</h1>
    </div>
)

export default TitleList