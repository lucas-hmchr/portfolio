export interface Project {
    name: string,
    time: string,
    technologies: string[],
    img: string,
    liveLink: string,
    githubLink: string,
    id: number,
    descriptions: Description[],
}

export interface Description {
    title: string,
    text: string,
}