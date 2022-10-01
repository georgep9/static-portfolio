import styles from '../styles/layout.module.css';
import { Project } from '../types';
import PictureLink from './PictureLink';

const ProjectLink = (project : Project) => {
    return (<>
        <PictureLink {...project.imgProps}/>
        <h5>&emsp;{project.srcTitle}</h5>
        <p>{project.description}</p>
    </>)
}

export default ProjectLink