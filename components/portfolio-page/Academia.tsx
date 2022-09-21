
export type AcademiaEntry = {
    education?: {
        institution: {
            fullname: String
            shortname?: String,
        }
        course: {
            fullname: String,
            level?: String
            major?: String
            minors?: String[]
        }
        grade?: String,
        description?: String
    }[]
    research?: {
        institution: {
            fullname: String
            shortname?: String,
        },
        project: {
            title: String,
            description?: String
        },
        type: String
    }[]
}

const Academia = (entry: AcademiaEntry) => {
    return (
        <>
            <h3>Academia</h3>
            {entry.education?.map((edu, index) => (
                <div key={index}>
                    <h4 className="text-primary">{edu.institution.fullname} ({edu.institution.shortname})</h4>
                    <h5>
                        &emsp;{edu.course.fullname} {(edu.course.level) ? <small key={index} className="text-muted">[{edu.course.level}]</small> : null}
                    </h5>
                    &emsp;&emsp;<small className="text-muted">Major: </small><br></br>
                    &emsp;&emsp;&emsp;{edu.course.major}<br></br>
                    &emsp;&emsp;<small className="text-muted">Minors:</small><br></br>
                    {(edu.course.minors) ? edu.course.minors?.map((minor) => (
                        <>
                            &emsp;&emsp;&emsp;{minor}<br></br>
                        </>
                    )) : null}
                    &emsp;&emsp;{(edu.grade) ? (
                        <>
                            <small className="text-muted">Grade: </small>{edu.grade}<br></br>
                        </>
                    ) : null}
                </div>
            ))}
            {entry.research?.map((res, index) => (
                <div key={index}>
                    <h4 className="text-primary">{res.project.title} <small key={index} className="text-muted">[{res.type}]</small></h4>
                    <h5>&emsp;{res.institution.fullname} ({res.institution.shortname})</h5>
                    &emsp;&emsp;{res.project.description}
                </div>
            ))}
        </>
    )
}

export default Academia;