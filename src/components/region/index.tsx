import Text from "../Title.tsx";
import styles from '../../styles/Region.module.scss'
import Select from "../select";
import {options} from "./data.ts";


const Region = () => {
    return (
        <div>
            <Text cl={styles.title} type={"h2"} text={'Район'}/>
            <div>
                <Select
                    options={options}
                    name={'region'}
                    type={"checkbox"}
                    placeholder={'Любой'}
                />
            </div>
        </div>
    );
};

export default Region;
