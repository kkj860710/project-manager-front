import {Draggable} from "@hello-pangea/dnd";

interface KanbanCardProps {
    task: {
        id: string;
        title: string;
        description: string;
        priority: string;
        assignedTo: string
    };
    index: number;
}

const getPriorityColor = (priority: string) => {
    switch (priority) {
        case "CRITICAL":
            return "bg-red-600 text-white";
        case "HIGH":
            return "bg-orange-500 text-white";
        case "MEDIUM":
            return "bg-yellow-400 text-black";
        case "LOW":
            return "bg-green-500 text-white";
        default:
            return "bg-gray-300 text-black";
    }
};

export default function KanbanCard({ task, index }: KanbanCardProps) {

    return (

        <Draggable key={task.id} draggableId={task.id} index={index}>
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={`p-2 rounded shadow-md mb-2 ${getPriorityColor(task.priority)}`}
                >
                    <h2 className="text-sm font-medium">{task.title}</h2>
                    <div>{task.description}</div> <br />
                    <div className="text-sm font-small text-right">{task.assignedTo}</div>
                </div>
            )}
        </Draggable>

    )
}