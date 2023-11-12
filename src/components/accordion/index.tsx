import styles from '../../styles/Accordion.module.scss'
import {ReactNode, useState} from "react";
import Text from "../Title.tsx";

type Props = {
    title: string
    children: ReactNode
    titleStyle?: 'h1' | 'h2' | 'h2Semibold' | 'b1'
}
const Accordion: React.FC<Props> = ({children, title, titleStyle = 'h2'}) => {
    const [isView, setIsView] = useState(false)

    return (
        <div className={styles.accordion}>
            <div
                className={isView ? `${styles.tab__title} ${styles.active}` : styles.tab__title}
                onClick={() => setIsView(!isView)}
            >
                <Text type={titleStyle} text={title}/>
            </div>
            {isView && <div className={styles.tab__content}>{children}</div>
            }
        </div>
    );
};

export default Accordion;
