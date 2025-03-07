import {useState} from "react";
import {DragDropContext, DropResult} from "@hello-pangea/dnd";
import KanbanColumn from "@/components/kanban/KanbanColumn";

interface Task {
    id: string;
    title: string;
    description: string;
    priority: string;
    assignedTo: string
}

type TaskState = Record<string, Task[]>;

const initialTasks: TaskState = {
    "todo": [
        {
            id: "1"
            , title: "디자인 작업"
            , description: "UI 디자인 작업"
            , priority: "HIGH"
            , assignedTo: "이정재"
        },
        {
            id: "2"
            , title: "프론트 작업"
            , description: "프론트 디자인 작업"
            , priority: "MEDIUM"
            , assignedTo: "김길동"
        },
    ],
    "inProgress": [
        {
            id: "3"
            , title: "백엔드 작업"
            , description: "Spring Boot API 개발"
            , priority: "CRITICAL"
            , assignedTo: "김광진"
        },
    ],
    "done": [
        {
            id: "4"
            , title: "DB 설정"
            , description: "MariaDB 연결 설정"
            , priority: "LOW"
            , assignedTo: "김광진"
        },
    ],
};

export default function KanbanBoard() {
    const [tasks, setTasks] = useState<TaskState>(initialTasks);

    const onDragEnd = (result: DropResult) => {
        const { source, destination } = result;
        if (!destination) return;

        const sourceColumn = tasks[source.droppableId];
        const destColumn = tasks[destination.droppableId];
        const task = sourceColumn[source.index];

        const newSourceColumn = [...sourceColumn];
        newSourceColumn.splice(source.index, 1);

        const newDestColumn = [...destColumn];
        newDestColumn.splice(destination.index, 0, task);

        setTasks({
            ...tasks,
            [source.droppableId]: newSourceColumn,
            [destination.droppableId]: newDestColumn,
        });
    };

    return (
        <div className="flex space-x-4 p-4">
            <DragDropContext onDragEnd={onDragEnd}>
                {Object.entries(tasks).map(([columnId, tasks]) => (
                    <KanbanColumn key={columnId} columnId={columnId} tasks={tasks} />
                ))}
            </DragDropContext>
        </div>
    );
}
