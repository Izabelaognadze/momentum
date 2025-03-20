import { UseFormRegisterReturn } from "react-hook-form";

interface InputButtonProps {
  required?: boolean;
  inputHeight?: string;
  registerProps?: UseFormRegisterReturn;
  isNameMinLengthError?: boolean | undefined;
  isNameMaxLengthError?: boolean | undefined;
}

export const InputButton = ({
  required,
  inputHeight,
  registerProps,
  isNameMinLengthError,
  isNameMaxLengthError,
}: InputButtonProps) => {
  return (
    <div className="flex flex-col gap-[6px]">
      <label className="labelStyle">სათაური{required && <span>*</span>}</label>

      <input
        type="text"
        {...registerProps}
        style={{
          minHeight: "45px",
          height: inputHeight ? inputHeight : "auto",
        }}
        className="w-[550px] flex items-center justify-start ap-2.5 px-4 border border-[#dee2e6] rounded bg-white"
      />
      <div>
        <p
          className="text-[10px] font-normal leading-normal tracking-normal text-left"
          style={{
            color:
              isNameMinLengthError === true
                ? "red"
                : isNameMinLengthError === false
                  ? "green"
                  : "#6c757d",
          }}
        >
          მინიმუმ 2 სიმბოლო
        </p>
        <p
          className="text-[10px] font-normal leading-normal tracking-normal text-left text-[#6c757d]"
          style={{
            color:
              isNameMaxLengthError === true
                ? "red"
                : isNameMaxLengthError === false
                  ? "green"
                  : "#6c757d",
          }}
        >
          მაქსიმუმ 255 სიმბოლო
        </p>
      </div>
    </div>
  );
};
