import {create} from "zustand/react";
import {initialProjectState, ProjectState, ProjectStore} from "@/types/project";


export const useProjectStore = create<ProjectStore>(set => ({
    project: initialProjectState,
    setProject: (newProject: ProjectState) => set({project: newProject}),
    projects: [],
    setProjects: (newProject : ProjectState) =>
        set((value) => ({
            projects: [...value.projects, newProject],
        })),
}))

export default useProjectStore;