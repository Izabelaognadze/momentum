import { useQuery } from "@tanstack/react-query";
import { Department } from "../types/department";
import { PATHS } from "../constants";
import { departmentApiService } from "../services/instances";
import { shortenDepartmentName } from "../functions/shortenDepartmentName";
import { useColumnOvalColor } from "../hooks/use-column-oval-color";

export const Departments = ({ id }: { id: number }) => {
  const {
    data: departments,
    isLoading,
    isError,
  } = useQuery<Department[]>({
    queryKey: [PATHS.DEPARTMENTS],
    queryFn: async () => {
      const data = await departmentApiService.getDepartments();
      return Array.isArray(data) ? data : [];
    },
  });
  const department = departments?.find((data) => data.id === id);
  const bgColor = useColumnOvalColor(department?.name || "");

  if (isLoading) return <p>Loading...</p>;
  if (!department) return <p>Invalid departments</p>;
  if (isError || !departments) return <p>Error loading departments</p>;

  return (
    <div
      className="text-[12px] text-white gap-2.5 p-[5px_9px] rounded-[15px]"
      style={{ backgroundColor: bgColor }}
    >
      {shortenDepartmentName(department.name)}
    </div>
  );
};
