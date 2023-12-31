import styles from '../../styles/Rating.module.scss'
import React from "react";
import Star from "../../assets/img/icon/star.tsx";

type Props = {
    countStar:number
    viewText?: boolean
}
const Rating: React.FC<Props> = ({viewText=true,countStar}) => {
    return (
        <div className={styles.container}>
            {Array(countStar).fill(1).map((_, key) => <Star key={key}/>)}
            {viewText && <span>и больше</span>}
        </div>
    );
};

export default Rating;
