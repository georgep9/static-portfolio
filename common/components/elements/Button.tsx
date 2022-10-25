`
All copyright interest in this file written by George Patterson, pertains to the LICENSE at root.
`

import { ReactNode } from 'react';
import styles from '../styles/layout.module.css';

interface Props {
    children?: ReactNode
    label: String
}

const Button = ({label} : Props) => {
    return (<>
        <div className={styles.smallButton}>
            <button type="button" className="btn btn-secondary">{label}</button>
        </div>
    </>)
}

export default Button