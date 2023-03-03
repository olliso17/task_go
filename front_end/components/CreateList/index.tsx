import CardAllAdd from "@/components/CardAll"
import CardStylePhone from "@/components/CardStylePhone"
import TitleList from "@/components/Title"

const Createlist = ()=>(
    <CardStylePhone styleCss="bg-violet-300 w-full h-full rounded-2xl" contentButton1={<TitleList titleList="Create List"/>} contentButton2={<TitleList titleList="ListAll"/>}  content={
        <CardAllAdd />
      } />
)
export default Createlist