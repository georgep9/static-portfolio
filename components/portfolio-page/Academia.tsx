import { Education, Research } from "../commons/types"
import styles from '../layout.module.css';
import { monthNames } from "../commons/types";

export type AcademiaEntry = {
    education?: Education[]
    research?: Research[]
}

const Academia = (entry: AcademiaEntry) => {

    return (
        <>
            <h3>Academia</h3>
            {entry.education?.map((edu, index) => (
                <div key={"education" + index} className={styles.buttonContainer}>
                    <h4 className="text-primary"><b>{edu.institution.fullname} ({edu.institution.shortname})</b></h4>
                    <h5>
                        &emsp;{edu.course.fullname}
                        &emsp;{(edu.course.level) ? <small className="text-muted">
                            [{edu.course.level}]
                            </small> : null}
                        &emsp; {(edu.course.period) ? <>
                            {monthNames[edu.course.period.start.getMonth()]} {edu.course.period.start.getFullYear()} - 
                            {monthNames[edu.course.period.end.getMonth()]} {edu.course.period.end.getFullYear()}
                            </> : null}
                    </h5>
                    &emsp;&emsp;<small className="text-muted">Major: </small><br></br>
                    &emsp;&emsp;&emsp;{edu.course.major}<br></br>
                    &emsp;&emsp;<small className="text-muted">Minors:</small><br></br>
                    {(edu.course.minors) ? edu.course.minors?.map((minor) => (
                        <>
                            &emsp;&emsp;&emsp;{minor}<br></br>
                        </>
                    )) : null}
                    &emsp;&emsp;{(edu.grade) ? (
                        <>
                            <small className="text-muted">GPA: </small>{edu.grade}<br></br>
                        </>
                    ) : null}
                </div>
            ))}
            {entry.research?.map((res, index) => (
                <div key={"research" + index} className={styles.buttonContainer}>
                    <h4 className="text-primary"><b>{res.project.title}</b>&emsp;<small className="text-muted">[{res.type}]</small></h4>
                    <h5>&emsp;{res.institution.fullname} ({res.institution.shortname})</h5>
                    &emsp;&emsp;{res.project.description}
                </div>
            ))}
        </>
    )
}

export default Academia;