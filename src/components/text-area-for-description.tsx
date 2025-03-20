import { UseFormRegisterReturn } from "react-hook-form";

type TextAreaForDescription = {
  registerProps?: UseFormRegisterReturn;
  isDescriptionMinLengthError?: boolean | undefined;
  isDescriptionMaxLengthError?: boolean | undefined;
};
export const TextAreaForDescription = ({
  registerProps,
  isDescriptionMaxLengthError,
  isDescriptionMinLengthError,
}: TextAreaForDescription) => {
  return (
    <div className="flex flex-col gap-[5px]">
      <label className="labelStyle">აღწერა</label>
      <textarea
        className="min-h-[133px] flex flex-row justify-start items-stretch gap-[10px] p-[14px] border border-[#dee2e6] bg-white rounded-[5px] flex-grow-0"
        {...registerProps}
      />
      <div>
        <p
          className="text-[10px] font-normal leading-normal tracking-normal text-left"
          style={{
            color:
              isDescriptionMaxLengthError === true
                ? "red"
                : isDescriptionMinLengthError === false
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
              isDescriptionMinLengthError === true
                ? "red"
                : isDescriptionMaxLengthError === false
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
