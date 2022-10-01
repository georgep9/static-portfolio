import styles from '../styles/layout.module.css';
import { ImgProps } from '../types';


const PictureLink = ({src, alt, href}: ImgProps) => {
    return (<>
        <div className={styles.pictureContainer}>
            <a href={`${href}`} target="_blank" rel="noreferrer"><img className="rounded mx-auto d-block" src={src.toString()} alt={alt.toString()} style={{width: "100%", height: "auto"}}/></a>
        </div>
    </>)
}

export default PictureLink