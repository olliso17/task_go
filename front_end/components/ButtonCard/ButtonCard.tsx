import { HTMLAttributes, MouseEventHandler } from "react";
import ListAll from "../ListAll";

type Props = {
    content:JSX.Element
    styleCss: string
    tipoVoid: () => JSX.Element
    
}


const ButtonCard = ({tipoVoid, content, styleCss}:Props)=>(
    <button onClick={()=>tipoVoid} className={styleCss}>{content}</button >
)

export default ButtonCard;