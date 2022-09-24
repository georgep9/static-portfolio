import Badges from "../commons/Badges";
import { Experience } from "../commons/types"
import { monthNames } from "../commons/types";
import ButtonLayout from "../layout/ButtonLayout";

export type ExperienceEntry = {
    experiences: Experience[]
}

const Experience = (entry: ExperienceEntry) => {

    const header = (exp: Experience) => {

        const skillLabels: String[] | undefined = exp.skills?.labels

        return (<>
            <h4 className="text-primary">
                <b>{exp.org.shortname}</b>&emsp;
                <small className="text-muted"><b>{exp.org.fullname}</b></small>
            </h4> 
            <h5>
                &emsp;<b>{exp.title}</b>
            </h5>
            &emsp;<small className="text-muted">
                {monthNames[exp.period.start.getMonth()]} {exp.period.start.getFullYear()} - {monthNames[exp.period.end.getMonth()]} {exp.period.end.getFullYear()}
            </small>&emsp;
            <Badges labels={skillLabels}/>
        </>)
    }

    const content = (exp: Experience) => {
        return ( <p>&emsp;&emsp;{exp.description}</p> )
    }

    return (
        <>
        <h3>Experience</h3>
        {entry.experiences?.map((exp, index) => {
            return (
                <div key={index}>
                    <ButtonLayout header={header(exp)} content={content(exp)}/>
                </div>
            )
        })}
        </>
    )
}
export default Experience