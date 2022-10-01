import { Education, Research } from "../types"
import { monthNames } from "../types"
import ButtonLayout from "../layout/ButtonLayout"
import ProjectLink from "../elements/ProjectLink"
import Skills from "./Skills"

export type AcademiaEntry = {
    education: Education[]
    research: Research[]
}

const Academia = (entry: AcademiaEntry) => {


    const eduHeader = (edu: Education) => {
        return (<>
            <h4 className="text-primary"><b>{edu.institution.fullname} ({edu.institution.shortname})</b></h4>
            <h5>
                &emsp;{edu.course.fullname}
                &emsp;{(edu.course.level) ? <small className="text-muted">
                    [{edu.course.level}]
                    </small> : null}
            </h5>
        </>)
    }

    const eduContent = (edu: Education) => {
        return (<>
            <small className="text-muted">
                {(edu.course.period) ? <>
                {monthNames[edu.course.period.start.getMonth()]} {edu.course.period.start.getFullYear()} - 
                {monthNames[edu.course.period.end.getMonth()]} {edu.course.period.end.getFullYear()}
                </> : null}
            </small><br></br>
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
        </>)
    }

    const resHeader = (res: Research) => {
        return (<>
            <h4 className="text-primary"><b>{res.project.title}</b>&emsp;<small className="text-muted">[{res.type}]</small></h4>
            <h5>&emsp;{res.institution.fullname} ({res.institution.shortname})</h5>
            <Skills skills={[res]}/>
        </>)
    }

    const resContent = (res: Research) => {
        return (<>
            <ProjectLink {...res.project}/>
        </>)
    }

    return (
        <>
            {entry.education?.map((edu, index) => (
                <ButtonLayout key={index} header={eduHeader(edu)} content={eduContent(edu)} />
            ))}
            {entry.research?.map((res, index) => (
                <ButtonLayout key={index} header={resHeader(res)} content={resContent(res)} />
            ))}
        </>
    )
}

export default Academia;