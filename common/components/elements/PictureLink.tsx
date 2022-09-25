import styles from '../styles/layout.module.css';

interface Props {
    src: String
    alt: String
    href: String
}

const PictureLink = ({src, alt, href}: Props) => {
    return (<>
        <div className={styles.pictureContainer}>
            <a href={`${href}`} target="_blank" rel="noreferrer"><img className="rounded mx-auto d-block" src={src.toString()} alt={alt.toString()} style={{width: "50%", height: "auto"}}/></a>
        </div>
    </>)
}

export default PictureLink