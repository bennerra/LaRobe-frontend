import {
  Controller,
  type FieldValues,
  type RegisterOptions,
} from "react-hook-form";
import React, { type FC } from "react";

import { SizeInputValues } from "@/ui/TextInput/TextInput";
import { NumberInput } from "@/ui/NumberInput/NumberInput";

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

export const NumberField: FC<Props> = ({
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
        <NumberInput
          inputSize={size}
          placeholder={placeholder || ""}
          {...field}
        />
      )}
    />
  );
};
