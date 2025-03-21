import { Select } from "@headlessui/react";

interface SelectButtonProps {
  labelName: string;
}
export const SelectButton = ({ labelName }: SelectButtonProps) => {
  return (
    <div className="flex flex-col gap-[6px] w-full">
      <label className="labelStyle mt-0">{labelName} *</label>
      <Select
        name="dfs"
        className="w-full flex flex-row justify-start items-center gap-[10px] p-[12px] rounded-[5px] border border-[#dee2e6] bg-white flex-grow-0"
      ></Select>
    </div>
  );
};
