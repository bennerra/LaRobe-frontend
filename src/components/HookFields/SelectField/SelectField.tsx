import { Controller, FieldValues, RegisterOptions } from "react-hook-form";
import { FC } from "react";

import { Select } from "@/ui/Select";
import { Option } from "@/ui/Select/type";

type Props = {
  label: string;
  options: Option[];
  selectedOption: Option | null;
  name: string;
  rules?: Omit<
    RegisterOptions<FieldValues, string>,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
};

export const SelectField: FC<Props> = ({ name, options, rules, ...props }) => {
  return (
    <Controller
      name={name}
      rules={rules}
      render={({ field }) => (
        <Select
          options={options}
          {...field}
          {...props}
          selectedOption={
            options.find((option) => option.id === field.value) || null
          }
          onSelect={(option) => {
            field.onChange(option.id);
          }}
        />
      )}
    />
  );
};
