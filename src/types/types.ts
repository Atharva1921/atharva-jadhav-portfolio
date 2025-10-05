export type ProjectDetails = {
    title: string;
    company: string;
    role: string;
    duration: string;
    description: string;
    technologies: string[];
    achievements: string[];
    impact: string;
};

export type ExperienceNode = {
    id: string;
    type: "file";
    label: string;
    details: ProjectDetails;
};

export type ExperienceData = {
    id: string;
    type: "folder";
    label: string;
    children?: ExperienceNode[];
};
