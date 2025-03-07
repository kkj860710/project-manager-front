import { useState } from "react";
import { DragDropContext, Droppable, Draggable, DropResult } from "@hello-pangea/dnd";

interface Task {
    id: string;
    content: string;
}

type TaskState = Record<string, Task[]>;

const initialTasks: TaskState = {
    "todo": [
        { id: "1", content: "UI 디자인 작업" },
        { id: "2", content: "Next.js 프로젝트 설정" },
    ],
    "inProgress": [
        { id: "3", content: "Spring Boot API 개발" },
    ],
    "done": [
        { id: "4", content: "MariaDB 연결 설정" },
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
                    <Droppable key={columnId} droppableId={columnId}>
                        {(provided) => (
                            <div
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                className="w-64 bg-gray-100 p-4 rounded-lg shadow-md"
                            >
                                <h2 className="text-lg font-bold mb-2 capitalize">{columnId}</h2>
                                {tasks.map((task, index) => (
                                    <Draggable key={task.id} draggableId={task.id} index={index}>
                                        {(provided) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                className="p-2 bg-white rounded shadow-md mb-2"
                                            >
                                                {task.content}
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                ))}
            </DragDropContext>
        </div>
    );
}
