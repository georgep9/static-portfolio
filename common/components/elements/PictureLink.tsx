import styles from '../styles/layout.module.css';
import { ImgProps } from '../types';

export const Picture = (imgProps : ImgProps) => {
    return (<>
        <img 
            className="mx-auto d-block" 
            src={imgProps.src} 
            alt={imgProps.alt} 
            style={{
                width: "100%", 
                height: "auto",
            }}/>
        <p className="text-success">{imgProps.desc}</p>
    </>)
}

const PictureLink = (imgProps : ImgProps) => {
    return (<> 
        <div className={styles.pictureContainer}>
            <a href={`${imgProps.href}`} target="_blank" rel="noreferrer" style={{textDecoration: "none"}}>
                <Picture {...imgProps}/>
            </a>
        </div>
    </>)
}

export default PictureLink