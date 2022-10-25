`
All copyright interest in this file written by George Patterson, pertains to the LICENSE at root.
`

import ProjectLink from "../elements/ProjectLink";
import ButtonLayout from "../layout/ButtonLayout";
import { Project } from "../types";
import Skills from "./Skills";

export type ProjectsEntry = {
    projects: Project[]
}


const Projects = (entry : ProjectsEntry) => {

    const projHeader = (project: Project) => {
        return (<>
            <h4 className="text-primary">
                <b>{project.title}</b>&emsp;
            </h4>
        </>)
    }

    const projContent = (project: Project) => {
        return <>
            <ProjectLink {...project}/>
            <br/>
            <Skills skills={[project]}/>
        </>
    }

    return (<>
        {entry.projects?.map((proj, index) => {
            return (
                <div key={index}>
                    <ButtonLayout 
                    header={projHeader(proj)} 
                    content={projContent(proj)}
                    toggleContent={<Skills skills={[proj]}/>}/>
                </div>
            )
        })}
    </>)
}

export default Projects