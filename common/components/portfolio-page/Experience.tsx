import { Experience } from "../types"
import { monthNames } from "../types";
import ButtonLayout from "../layout/ButtonLayout";
import Skills from "./Skills";

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
        </>)
    }

    const expContent = (exp: Experience) => {
        return <>
            <h5>&emsp;{exp.title}</h5>
            <small className="text-muted">
                {monthNames[exp.period.start.getMonth()]} {exp.period.start.getFullYear()} - {monthNames[exp.period.end.getMonth()]} {exp.period.end.getFullYear()}
            </small>
            <p>&emsp;&emsp;{exp.description}</p>
            <Skills skills={[exp]}/>
        </>
    }

    return (
        <>
        {entry.experiences?.map((exp, index) => {
            return (
                <div key={index}>
                    <ButtonLayout 
                    header={expHeader(exp)} 
                    content={expContent(exp)} 
                    toggleContent={<Skills skills={[exp]}/>}/>
                </div>
            )
        })}
        </>
    )
}
export default Experience