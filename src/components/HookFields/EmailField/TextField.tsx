import {
  Controller,
  type FieldValues,
  type RegisterOptions,
} from "react-hook-form";
import React, { type FC } from "react";

import { SizeInputValues } from "@/ui/TextInput/TextInput";
import { EmailInput } from "@/ui/EmailInput/TextInput";

interface Props {
  fieldName: string;
  placeholder?: string;
  rules?: Omit<
    RegisterOptions<FieldValues, string>,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
  defaultValue?: string;
  size?: SizeInputValues;
}

export const EmailField: FC<Props> = ({
  fieldName,
  placeholder,
  rules,
  defaultValue,
  size = SizeInputValues.BIG,
}) => {
  return (
    <Controller
      defaultValue={defaultValue || null}
      name={fieldName}
      rules={rules}
      render={({ field }) => (
        <EmailInput
          inputSize={size}
          placeholder={placeholder || ""}
          {...field}
        />
      )}
    />
  );
};
