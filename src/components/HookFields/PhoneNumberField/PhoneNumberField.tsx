import { formatPhoneNumber } from "@/helpers/formatPhoneNumber";
import { ChangeEvent, FC, useEffect, useState } from "react";
import {
  Controller,
  FieldValues,
  RegisterOptions,
  useFormContext,
} from "react-hook-form";
import {
  PhoneNumberInput,
  SizeInputValues,
} from "@/ui/PhoneNumberInput/PhoneNumberInput";

type Props = {
  name: string;
  placeholder: string;
  isRequired?: boolean;
  errorMessage?: string;
  maxLength?: number;
  id?: string;
  rules?: Omit<
    RegisterOptions<FieldValues, string>,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
  defaultValue?: string;
};

export const PhoneNumberField: FC<Props> = ({
  name,
  rules,
  defaultValue,
  ...props
}) => {
  const { setValue } = useFormContext();
  const [phone, setPhone] = useState("");

  useEffect(() => {
    setValue(name, phone);
  }, [name, phone, setValue]);

  const handlePhoneChange = (
    e: ChangeEvent<HTMLInputElement>,
    fieldOnChange: (value: string) => void,
  ) => {
    const formattedValue = formatPhoneNumber(e.target.value);
    setPhone(formattedValue);
    fieldOnChange(formattedValue);
  };

  return (
    <Controller
      name={name}
      defaultValue={defaultValue || ""}
      rules={rules}
      render={({ field }) => (
        <PhoneNumberInput
          inputSize={SizeInputValues.BIG}
          type="tel"
          {...props}
          {...field}
          onChange={(e) => handlePhoneChange(e, field.onChange)}
        />
      )}
    />
  );
};
