import { getRandomHexColor } from "./geRandomHexColor"
import statisticsStyle from './style.module.css'


const Statistics = ({ data }) => {
    return (
        <section className={statisticsStyle.statistics}>
            <h2 className={statisticsStyle.title}>Upload stats</h2>
            <ul className={statisticsStyle.statList}>
                {data.map(elem => (
                    <li className={statisticsStyle.item} key={elem.id} style={{ backgroundColor: getRandomHexColor() }}>
                        <span className={statisticsStyle.label}>{elem.label}</span>
                        <span className={statisticsStyle.percentage}>{elem.percentage}%</span>
                </li>
                )) }
            </ul>
        </section>
    );
};

export default Statistics


  