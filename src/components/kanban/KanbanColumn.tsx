import {Droppable} from "@hello-pangea/dnd";
import KanbanCard from "@/components/kanban/KanbanCard";

interface KanbanColumnProps {
    columnId: string;
    tasks: {
        id: string;
        title: string;
        description: string;
        priority: string;
        assignedTo: string
    }[];
}

export default function KanbanColumn({ columnId, tasks }: KanbanColumnProps) {
    return (
        <Droppable droppableId={columnId}>
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="w-72 bg-gray-900 p-4 rounded-lg shadow-md border border-gray-700"
                >
                    <h2 className="text-lg font-bold mb-3 capitalize text-white">{columnId}</h2>
                    {tasks.map((task, index) => (
                        <KanbanCard key={task.id} task={task} index={index} />
                    ))}
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    )
}