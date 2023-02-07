import { HtmlHTMLAttributes } from "react";
import styles from './Title.module.css'


interface Props {
    text: string
}

export default function Title({text}:Props) {
    return (
        <div className={styles.titleDescription}>
            <h3>{text}</h3>
        </div>
    );
}