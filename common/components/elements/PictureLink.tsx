import styles from '../styles/layout.module.css';
import { ImgProps } from '../types';

const PictureLink = (imgProps : ImgProps) => {
    return (<> 
        <div className={styles.pictureContainer}>
            <a href={`${imgProps.href}`} target="_blank" rel="noreferrer" style={{textDecoration: "none"}}>
                <img 
                    className="mx-auto d-block" 
                    src={imgProps.src} 
                    alt={imgProps.alt} 
                    style={{
                        width: "100%", 
                        height: "auto",
                    }}/>
                <p className="text-success">{imgProps.desc}</p>
            </a>
        </div>
    </>)
}

export default PictureLink