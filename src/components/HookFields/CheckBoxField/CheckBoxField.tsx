import { Controller } from "react-hook-form";
import { CSSProperties, FC } from "react";

import { Checkbox } from "@/ui/CheckBox/CheckBox";

interface Props {
  name: string;
  label: string;
  styles?: CSSProperties | undefined;
}

export const CheckboxField: FC<Props> = ({ name, label, styles }) => {
  return (
    <Controller
      defaultValue={false}
      name={name}
      render={({ field }) => (
        <Checkbox style={{ ...styles }} label={label} {...field} />
      )}
    />
  );
};
