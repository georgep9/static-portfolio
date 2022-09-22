export const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
];

export type TimeFrame = {
    start: Date
    end: Date
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
    description?: String
}

export type Education = {
    institution: Institution
    course: Course
    grade?: String
    description?: String
}

export type Research = {
    institution: Institution
    project: Project
    type: String
    period?: TimeFrame
}

export type Experience = {
    org: Institution
    title: String
    period: TimeFrame
    description: String
    projects?: Project[]
    courses?: Course[]
}