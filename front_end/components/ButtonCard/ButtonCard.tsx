import { HTMLAttributes, MouseEventHandler } from "react";
import ListAll from "../ListAll";

type Props = {
    content:JSX.Element
    styleCss: string
    tipoButton: MouseEventHandler<HTMLButtonElement>
    
}


const ButtonCard = ({tipoButton, content, styleCss}:Props)=>(
    <button onClick={tipoButton} className={styleCss}>{content}</button >
)

export default ButtonCard;