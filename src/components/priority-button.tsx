import { useQuery } from "@tanstack/react-query";
import { PATHS, PRIORITIES } from "../constants";
import { Priority } from "../types/priority";
import { priorityApiService } from "../services/instances";

export const PriorityButton = ({ id }: { id: number }) => {
    const { data: priorities, isLoading, isError } = useQuery<Priority[]>({
        queryKey: [PATHS.PRIORITIES],
        queryFn: async () => {
            const data = await priorityApiService.getPriorities();
            return Array.isArray(data) ? data : [];
        },
    });

    if (isLoading) return <p>Loading...</p>;
    if (isError || !priorities) return <p>Error loading priorities</p>;

    const priority = priorities.find(p => p.id === id);
    if (!priority) return <p>Invalid priority</p>;

    return (
        <div className="flex gap-[6px] leading-1.5 FiraGOBold py-1 px-[6px] border rounded w-fit" style={{ borderColor: PRIORITIES[id], color: PRIORITIES[id]}}>
            <img src={priority.icon} alt={priority.name} className="max-w-[20px]" />
            <p className="text-[12px] flex self-center">{priority.name}</p>
        </div>
    );
};
