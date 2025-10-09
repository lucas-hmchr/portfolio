export interface Project {
    name: string,
    time: string,
    technologies: string[],
    img: string,
    liveLink: string,
    githubLink: string | null,
    id: number,
    descriptions: Description[],
}

export interface Description {
    title: string,
    text: string,
}