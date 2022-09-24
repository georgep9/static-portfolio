
import Link from 'next/link';
import { ReactNode } from 'react';
import styles from '../layout.module.css';

interface Props {
    children?: ReactNode
    label: String
}

const Button = ({label} : Props) => {
    return (<>
        <div className={styles.smallButton}>
            <button type="button" className="btn btn-dark">{label}</button>
        </div>
    </>)
}

export default Button