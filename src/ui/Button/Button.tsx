import { FC } from "react";
import cn from "classnames";

import { useResize } from "@/hooks/useResize";

import styles from "./styles.module.scss";

type Props = {
  onClick?: () => void;
  type?: "submit" | "reset" | "button" | undefined;
  text?: string;
  view: "accent" | "primary";
};

export const Button: FC<Props> = (props) => {
  const { onClick, type, view, text } = props;
  const { isScreenLg } = useResize();

  return (
    <button
      onClick={onClick}
      type={type}
      className={cn(styles.button, styles[view], {
        [styles.isMobile]: isScreenLg,
      })}
    >
      {text}
    </button>
  );
};
