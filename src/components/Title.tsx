import * as React from "react";
import styles from '../styles/Title.module.scss'

type Props = {
    type: 'h1' | 'h2' | 'h2Semibold' | 'b1'
    text: string
    cl?: string


}
const Text: React.FC<Props> = ({cl, type, text, ...restProps}) => {
    let className
    switch (type) {

        case "h1":
            className = styles.h1
            break

        case "h2":
            className = styles.h2
            break
        case "h2Semibold":
            className = styles.h2Semibold
            break

        case "b1":
            className = styles.b1
            break
        default:
            className = styles.b1
    }

    return (
        <div className={className + ' ' + cl} {...restProps}>
            {text}
        </div>
    );
};

export default Text;
