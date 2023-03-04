import { MouseEventHandler } from "react"

type Props = {
    content:JSX.Element
    styleCss: string
    tipoButton: MouseEventHandler<HTMLButtonElement>
    
}


const ButtonCardHome = ({tipoButton, content, styleCss}:Props)=>(
    <button onClick={tipoButton} className={styleCss}>{content}</button >
)

export default ButtonCardHome;