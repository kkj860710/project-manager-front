'use client'
import React from "react";
import useCommonStore from "@/store/commons";
import useProjectStore from "@/store/projects";
import {ProjectState} from "@/types/project";

interface Project {
    id: number;
    name: string;
}

interface DropdownProps {
    projects: ProjectState[];
    onSelect: (project: Project) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ projects, onSelect }) => {
    // const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    // const [isOpen, setIsOpen] = useState(false);
    const {project, setProject} = useProjectStore();
    const {isOpen, setIsOpen} = useCommonStore();

    const handleSelect = (selected: ProjectState) => {
        setProject(selected);
        setIsOpen(false);
        onSelect(project);
    };

    return (
        <div className="relative w-64">
            <button
                className="w-full px-4 py-2 text-left bg-gray-200 rounded-md focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                {project ? project.name : "Select a project"}
            </button>
            {isOpen && (
                <ul className="absolute left-0 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                    {projects.map((project) => (
                        <li
                            key={project.id}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleSelect(project)}
                        >
                            {project.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;
