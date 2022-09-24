import styles from '../layout.module.css';

interface Props {
    src: String
    alt: String
}

const Picture = ({src, alt}: Props) => {

    return (<>
        <div className={styles.pictureContainer}>
            <img className="rounded mx-auto d-block" src={src.toString()} alt={alt.toString()} style={{width: "50%", height: "auto"}}/>
        </div>
    </>)

}

export default Picture