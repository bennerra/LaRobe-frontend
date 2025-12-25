import React, { forwardRef, InputHTMLAttributes } from "react";
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

export const NumberInput = forwardRef<HTMLInputElement, Props>(
  ({ inputSize, description, ...props }, ref) => {
    return (
      <div className={styles.textField}>
        {description && (
          <div className={styles.textFieldDescription}>{description}</div>
        )}
        <input
          ref={ref}
          type="number"
          className={cn(styles.textFieldInput, styles[inputSize])}
          {...props}
        />
      </div>
    );
  },
);
