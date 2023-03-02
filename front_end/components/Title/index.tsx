
interface Props{
    titleList: string
}


const TitleList = ({titleList}:Props) => (
    <h1 className="text-white text-xl font-bold">{titleList}</h1>
)

export default TitleList