import React, { FC, forwardRef } from "react";

import styles from "./styles.module.scss";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox: FC<Props> = forwardRef<HTMLInputElement, Props>(
  ({ label, style, ...props }, ref) => {
    return (
      <label style={{ ...style }} className={styles.appCheckbox}>
        <input
          ref={ref}
          className={styles.appCheckboxInput}
          type="checkbox"
          {...props}
        />
        <span className={styles.appCheckboxBox}></span>
        <span className={styles.appCheckboxLabel}>{label}</span>
      </label>
    );
  },
);
