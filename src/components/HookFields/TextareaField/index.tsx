import { FC } from "react";
import { Controller, FieldValues, RegisterOptions } from "react-hook-form";
import { Textarea } from "@/ui/Textarea/Textarea";

type Props = {
  name: string;
  placeholder: string;
  isRequired?: boolean;
  errorMessage?: string;
  maxLength?: number;
  noResize?: boolean;
  height?: string;
  id?: string;
  rules?: Omit<
    RegisterOptions<FieldValues, string>,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
  defaultValue?: string;
};

export const TextareaField: FC<Props> = ({
  name,
  rules,
  defaultValue,
  ...props
}) => {
  return (
    <Controller
      name={name}
      defaultValue={defaultValue || ""}
      rules={rules}
      render={({ field }) => <Textarea {...props} {...field} />}
    />
  );
};
