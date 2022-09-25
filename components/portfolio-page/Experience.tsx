import Badges from "../commons/Badges";
import { Experience } from "../commons/types"
import { monthNames } from "../commons/types";
import ButtonLayout from "../layout/ButtonLayout";

export type ExperienceEntry = {
    experiences: Experience[]
}

const Experience = (entry: ExperienceEntry) => {

    const expHeader = (exp: Experience) => {
        return (<>
            <h4 className="text-primary">
                <b>{exp.org.shortname}</b>&emsp;
                <small className="text-muted"><b>{exp.org.fullname}</b></small>
            </h4> 
            <h5>
                &emsp;{exp.title}
            </h5>
        </>)
    }

    const expContent = (exp: Experience) => {
        const skillLabels: String[] | undefined = exp.skills?.labels
        return <>
            <small className="text-muted">
                {monthNames[exp.period.start.getMonth()]} {exp.period.start.getFullYear()} - {monthNames[exp.period.end.getMonth()]} {exp.period.end.getFullYear()}
            </small>
            <p>&emsp;&emsp;{exp.description}</p>
            <Badges labels={skillLabels}/>
        </>
    }

    return (
        <>
        {entry.experiences?.map((exp, index) => {
            return (
                <div key={index}>
                    <ButtonLayout header={expHeader(exp)} content={expContent(exp)}/>
                </div>
            )
        })}
        </>
    )
}
export default Experience