const badgeClassNames = [
    "badge rounded-pill bg-primary",
    "badge rounded-pill bg-secondary",
    "badge bg-dark"
]

interface Props {
    labels: Array<String> | undefined
}

const Badges = ({labels} : Props) => {
    return (<>
        {labels? labels.map((label, index) => {
            return (<>
                <span className={badgeClassNames[index % badgeClassNames.length]}><b>{label}</b></span>&ensp;
            </>)
        }) : null}
    </>)
}

export default Badges