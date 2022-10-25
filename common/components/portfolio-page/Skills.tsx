`
All copyright interest in this file written by George Patterson, pertains to the LICENSE at root.
`

import Badges from "../elements/Badges";
import { SkillType } from "../types";

interface Props {
    skills : SkillType[]
}

const Skills = ({skills} : Props) => {
    const allSkillLabels = skills
        .map((skill) => (skill.skills?.labels))
        .flat()
        .filter(label=>label!==undefined)
    const skillLabels = [...new Set(allSkillLabels)]

    return (<>
        <Badges labels={skillLabels}/>
    </>)
}

export default Skills