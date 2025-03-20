interface InputButtonProps {
  label: string;
  required?: boolean;
}

export const InputButton = ({ label, required }: InputButtonProps) => {
  return (
    <div>
      <label className="text-[16px] font-normal leading-normal tracking-normal text-left text-[#343a40] mt-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
    </div>
  );
};
