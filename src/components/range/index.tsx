import styles from '../../styles/Range.module.scss'
import {InputHTMLAttributes} from "react";
import {useFormContext} from "react-hook-form";

type Props = {
    name: string

}
const Range: React.FC<Props & InputHTMLAttributes<any>> = (props) => {

    const {name, min, max, ...restProps} = props

    const {register} = useFormContext()

    return (
        <div className={styles.div}>
            <input type="range" {...register(name)} {...restProps} min={min} max={max} />
            <div className={styles.min__max__container}>
                <div>{min}</div>
                <div>{max}</div>
            </div>
        </div>
    );
};

export default Range;
