import React, { forwardRef } from "react";
import { InputHTMLAttributes } from "react";
import cn from "classnames";

import styles from "./styles.module.scss";

export enum SizeInputValues {
  BIG = "big",
  MEDIUM = "medium",
  SMALL = "small",
}

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  inputSize: SizeInputValues;
  description?: string;
}

export const PasswordInput = forwardRef<HTMLInputElement, Props>(
  ({ inputSize, description, ...props }, ref) => {
    return (
      <div className={styles.passwordField}>
        {description && (
          <div className={styles.passwordFieldDescription}>{description}</div>
        )}
        <input
          ref={ref}
          type="password"
          className={cn(styles.passwordFieldInput, styles[inputSize])}
          {...props}
        />
      </div>
    );
  },
);
