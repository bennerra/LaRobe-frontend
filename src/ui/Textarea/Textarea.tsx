import { ChangeEvent, FC } from "react";
import classNames from "classnames/bind";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

type Props = {
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
  isRequired?: boolean;
  errorMessage?: string;
  maxLength?: number;
  id?: string;
  height?: string;
};

export const Textarea: FC<Props> = ({
  onChange,
  placeholder,
  value = "",
  errorMessage,
  id,
  isRequired,
  maxLength,
  height,
}) => {
  const isError = !!errorMessage;

  const containerClassNames = cx("container", { container__error: isError });

  return (
    <div className={containerClassNames} style={{ height }}>
      <textarea
        className={cx("textarea")}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={isRequired}
        maxLength={maxLength}
        id={id}
        style={{ height }}
      />
      <span className={cx("container__error-message")}>{errorMessage}</span>
    </div>
  );
};
