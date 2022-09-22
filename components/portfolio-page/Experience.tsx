import { Experience } from "../commons/types"

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
                <h4 className="text-primary" key={index}><b>{exp.org.shortname}</b>&emsp;&emsp;<small key={index} className="text-muted">({exp.org.fullname})</small></h4>
                <h5>&emsp;{exp.title}</h5>
                <p>&emsp;&emsp;{exp.description}</p>
                </>
            )
        })}
        </>
    )
}
export default Experience