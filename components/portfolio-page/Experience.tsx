import { Experience } from "../commons/types"
import styles from './portfolio.module.css';
import { monthNames } from "../commons/types";

export type ExperienceEntry = {
    experiences: Experience[]
}

const Experience = (entry: ExperienceEntry) => {
    return (
        <>
        <h3>Experience</h3>
        {entry.experiences?.map((exp, index) => {
            return (
                <>
                <div className={styles.container}>
                    <h4 className="text-primary" key={index}>
                        <b>{exp.org.shortname}</b>&emsp;
                        <small key={index} className="text-muted"><b>{exp.org.fullname}</b></small>
                    </h4> 
                    <h5>
                        &emsp;<b>{exp.title}</b>
                        &emsp;<small key={index} className="text-muted">
                        {monthNames[exp.period.start.getMonth()]} {exp.period.start.getFullYear()} - {monthNames[exp.period.end.getMonth()]} {exp.period.end.getFullYear()}
                        </small>
                    </h5>
                    <p>&emsp;&emsp;{exp.description}</p>
                </div>
                </>
            )
        })}
        </>
    )
}
export default Experience