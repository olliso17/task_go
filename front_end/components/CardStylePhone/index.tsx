import ButtonCardHome from "../ButtonCardHomeHome/ButtonCardHome"
import ListAll from "../ListAll"

interface Props {
    content: JSX.Element
    styleCss: string

}

const CardStylePhone = ({ styleCss, content }: Props) => (
    <div className="bg-black w-96 h-4/5 p-2 rounded-2xl shadow-[0_10px_6px_4px_rgba(0,0,0,0.3)]">
        <div className={styleCss}>
            {content}
        </div>

    </div>
)


export default CardStylePhone