import {
  Field,
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { useState, useEffect } from "react";
import { PATHS } from "../constants";
import { priorityApiService } from "../services/instances";
import { useQuery } from "@tanstack/react-query";
import { Priority } from "../types/priority";
import { UseFormRegisterReturn } from "react-hook-form";

type ListBoxElementProps = {
  registerProps: UseFormRegisterReturn;
};

export function ListBoxElement({ registerProps }: ListBoxElementProps) {
  const {
    data: priorities,
    isLoading,
    isError,
  } = useQuery<Priority[]>({
    queryKey: [PATHS.PRIORITIES],
    queryFn: async () => {
      const data = await priorityApiService.getPriorities();
      return Array.isArray(data) ? data : [];
    },
  });

  const [selectedPriority, setSelectedPriority] = useState<Priority | null>(
    null
  );

  useEffect(() => {
    if (priorities && priorities.length > 0) {
      const defaultPriority = priorities.find((priority) => priority.id === 2);
      setSelectedPriority(defaultPriority || priorities[1]);
    }
  }, [priorities]);

  if (isLoading) return <p>Loading...</p>;
  if (isError || !priorities) return <p>Error loading priorities</p>;

  return (
    <Field className="flex flex-col w-full">
      <Label className="labelStyle">პრიორიტეტი *</Label>
      <Listbox
        value={selectedPriority}
        onChange={(priority) => {
          setSelectedPriority(priority);
          registerProps?.onChange({
            target: { value: priority?.id },
          });
        }}
      >
        <ListboxButton>
          {selectedPriority && (
            <div className="flex justify-between p-[14px] rounded-[5px] border border-[#dee2e6] bg-white">
              <div className="flex gap-2">
                <img src={selectedPriority.icon} alt="" />
                <p>{selectedPriority.name}</p>
              </div>
              <img
                src="src/assets/arrow-down.svg"
                alt="arrow down"
                className="max-w-[20px]"
              />
            </div>
          )}
        </ListboxButton>
        <ListboxOptions>
          {priorities.map((priority) => (
            <ListboxOption key={priority.id} value={priority}>
              {() => (
                <div className="flex gap-2 p-2 cursor-pointer">
                  <img
                    src={priority.icon}
                    alt={priority.name}
                    className="min-w-[20px] mr-[6px]"
                  />
                  {priority.name}
                </div>
              )}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </Field>
  );
}
