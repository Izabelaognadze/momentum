import { Select } from "@headlessui/react";
import { Department } from "../types/department";
import { Employee } from "../types/employee";
import { Status } from "../types/status";

interface SelectButtonProps {
  labelName: string;
  data?: Status[] | Employee[] | Department[];
}
export const SelectButton = ({ labelName, data }: SelectButtonProps) => {
  return (
    <div className="flex flex-col gap-[6px] w-full">
      <label className="labelStyle mt-0">{labelName} *</label>
      <Select
        name=""
        className="w-full flex flex-row justify-start items-center gap-[10px] p-[12px] rounded-[5px] border border-[#dee2e6] bg-white flex-grow-0"
      >
        {data?.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </Select>
    </div>
  );
};
