import { SetStateAction, useState } from "react";
import DatePicker from "react-datepicker";
import { UseFormRegisterReturn } from "react-hook-form";

type DatePickerFieldProps = {
  registerProps?: UseFormRegisterReturn;
};
export const DatePickerField = ({ registerProps }: DatePickerFieldProps) => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  const handleDateChange = (date: SetStateAction<Date | null>) => {
    setStartDate(date);
  };

  return (
    <div className="flex flex-col gap-[6px] w-full">
      <label className="labelStyle">დედლაინი</label>
      <DatePicker
        className="w-[318px] h-[45px] flex flex-row justify-start items-center gap-[6px] p-[14px] rounded-[5px] border border-[#dee2e6] bg-white"
        {...registerProps}
        selected={startDate}
        onChange={handleDateChange}
        dateFormat="dd/mm/yyyy"
      />
    </div>
  );
};
