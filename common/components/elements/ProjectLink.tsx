import { Project } from '../types';
import PictureLink from './PictureLink';

const ProjectLink = (project : Project) => {
    const imgProps = {...project.imgProps, desc: project.description}
    return (<>
        <h5>&emsp;{project.srcTitle}</h5>
        <PictureLink {...imgProps}/>
    </>)
}

export default ProjectLink