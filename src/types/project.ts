export const initialProjectState: ProjectState = {
    id: 0,
    projectId: "",
    name: "",
    description: "",
    ownerId: "",
    userList: []
}

export interface ProjectStore {
    project: ProjectState;
    setProject: (newProject: ProjectState) => void;
    projects: ProjectState[];
    setProjects: (newProject : ProjectState) => void;
}

export interface ProjectState {
    id: number;
    projectId: string;
    name: string;
    description: string;
    ownerId: string;
    userList: string[];
}