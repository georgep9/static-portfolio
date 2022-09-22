export type Institution = {
    fullname: String
    shortname?: String
}

export type Course = {
    fullname: String,
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
}

export type Experience = {
    org: Institution
    title: String
    description: String
    projects?: Project[]
    courses?: Course[]
}