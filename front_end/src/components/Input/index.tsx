import { HtmlHTMLAttributes, InputHTMLAttributes } from "react"
import styles from "./Input.module.css"
interface Props {
    text: string
    typeInput: string

}


export default function Input({ text, typeInput }: Props) {
    return (
        <div className={styles.containerInput}>
            <span className={styles.span}>{text}</span>
            <input type={typeInput} className={styles.input} />
        </div>
    )
}