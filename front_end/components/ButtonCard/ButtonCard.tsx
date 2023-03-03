import { HTMLAttributes } from "react";

type Props = {
    content:JSX.Element
    styleCss: string
}

const ButtonCard = ({content, styleCss}:Props)=>(
    <button className={styleCss}>{content}</button >
)

export default ButtonCard;