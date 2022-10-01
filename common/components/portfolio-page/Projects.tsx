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
            <Skills skills={[project]}/>
        </>)
    }

    const projContent = (project: Project) => {
        return <>
            <ProjectLink {...project}/>
        </>
    }

    return (<>
        {entry.projects?.map((proj, index) => {
            return (
                <div key={index}>
                    <ButtonLayout header={projHeader(proj)} content={projContent(proj)}/>
                </div>
            )
        })}
    </>)
}

export default Projects