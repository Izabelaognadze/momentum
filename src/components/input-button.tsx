import { useCreateTaskForm } from "../hooks/use-create-task-form";

interface InputButtonProps {
  label: string;
  required?: boolean;
  fieldName: string;
  errorMessages?: boolean;
  inputHeight?: string;
}

export const InputButton = ({
  label,
  required,
  fieldName,
  inputHeight,
  errorMessages,
}: InputButtonProps) => {
  const { registerField, isNameMinLengthError, isNameMaxLengthError } =
    useCreateTaskForm();
  return (
    <div>
      <label className="text-[16px] font-normal leading-normal tracking-normal text-left text-[#343a40] mt-1">
        {label} {required && <span>*</span>}
      </label>

      <input
        type="text"
        {...registerField(fieldName)}
        style={{
          minHeight: "45px",
          height: inputHeight ? inputHeight : "auto",
        }}
        className="w-[550px] flex items-center justify-start ap-2.5 px-4 border border-[#dee2e6] rounded bg-white"
      />

      {errorMessages && (
        <>
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
        </>
      )}
    </div>
  );
};
