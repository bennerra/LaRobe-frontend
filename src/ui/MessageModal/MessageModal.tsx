import { Dispatch, FC, SetStateAction, useEffect } from "react";
import { createPortal } from "react-dom";

import Close from "@/assets/images/close.svg";

import styles from "./styles.module.scss";

type Props = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  text: string;
};

export const MessageModal: FC<Props> = (props) => {
  const { isOpen, setIsOpen, text } = props;

  const handleClose = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    return () => setIsOpen(false);
  }, []);

  if (!isOpen) return;

  return (
    <>
      {createPortal(
        <div className={styles.messageModal}>
          <div className={styles.close} onClick={handleClose}>
            <Close />
          </div>
          <div className={styles.text}>{text}</div>
        </div>,
        document.body,
      )}
    </>
  );
};
