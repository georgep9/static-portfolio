`
All copyright interest in this file written by George Patterson, pertains to the LICENSE at root.
`

import styles from '../styles/layout.module.css';
import Link from "next/link"
import Button from "../elements/Button"
import PictureLink from "../elements/PictureLink"
import { ImgProps } from "../types"

const ReachMe = () => {
    const linkedInLinkProps : ImgProps = {
        src: "./LinkedIn_Logo.svg.png",
        alt: "linkedin",
        href: "https://www.linkedin.com/in/george-patterson9/"
    }
    const githubLinkProps : ImgProps = {
        src: "./GitHub_Logo.png",
        alt: "github",
        href: "https://github.com/georgep9"
    }
    const coffeeLinkProps : ImgProps = {
        src: "./buymeacoffee.svg",
        alt: "coffee",
        href: "https://www.buymeacoffee.com/gpatt9"
    }
    return (<>
        <h3>Reach out to me @</h3>
        <div className={styles.container}>
            <PictureLink {...linkedInLinkProps}/>
            <PictureLink {...githubLinkProps}/>
            <PictureLink {...coffeeLinkProps}/>
        </div>
        <Link href="/"><a><Button label="home"/></a></Link>
    </>)
}

export default ReachMe