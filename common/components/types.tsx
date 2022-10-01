export const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
];

export type TimeFrame = {
    start: Date
    end: Date
}

export type ImgProps = {
    src: String,
    alt: String,
    href: String
}

export type Skills = {
    labels: String[]
}

export type Institution = {
    fullname: String
    shortname?: String
}

export type Course = {
    fullname: String
    period?: TimeFrame
    level?: String
    major?: String
    minors?: String[]
    description?: String
}

export type Project = {
    title: String
    srcTitle: String
    imgProps: ImgProps
    description?: String
    skills?: Skills
}

export type Experience = {
    org: Institution
    title: String
    period: TimeFrame
    description: String
    projects?: Project[]
    courses?: Course[]
    skills?: Skills
}
export type Education = {
    institution: Institution
    course: Course
    grade?: String
    description?: String
    skills?: Skills
}

export type Research = {
    institution: Institution
    project: Project
    type: String
    period?: TimeFrame
    skills?: Skills
}

export type SkillType = Experience | Education | Research | Project
