`
All copyright interest in this file written by George Patterson, pertains to the LICENSE at root.
`

const badgeClassNames = [
    "badge rounded-pill bg-primary",
    "badge rounded-pill bg-success",
    "badge rounded-pill bg-info",
    "badge rounded-pill bg-secondary"
]

interface Props {   
    labels: Array<String | undefined> | undefined
}

interface SpanInterface {
    index: number,
    label: String | undefined
}


const Badges = ({labels} : Props) => {
    return (<>
        {labels? labels.map((label, index) => {
            return (<>
                <span className={badgeClassNames[index % badgeClassNames.length]} key={index}>{label}</span>&ensp;&emsp;
            </>)
        }) : null}
        <br/>
    </>)
}

export default Badges