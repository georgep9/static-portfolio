import Link from "next/link"
import Button from "../elements/Button"
import PictureLink from "../elements/PictureLink"

const ReachMe = () => {
    return (<>
        <h3>Reach out to me @</h3>
        <PictureLink src="./LinkedIn_Logo.svg.png" alt="linkedin" href="https://www.linkedin.com/in/george-patterson9/"/>
        <PictureLink src="./GitHub_Logo.png" alt="github" href="https://github.com/georgep9"/>
        <PictureLink src="./buymeacoffee.svg" alt="buymeacoffee" href="https://www.buymeacoffee.com/gpatt9"/>
        <Link href="/"><a><Button label="/"/></a></Link>
    </>)
}

export default ReachMe