"use client";

import { FC, PropsWithChildren, useEffect, MouseEvent, useState } from "react";
import { createPortal } from "react-dom";
import cn from "classnames";

import Close from "@/assets/images/close.svg";

import styles from "./style.module.scss";

export type ModalProps = {
  isOpen: boolean;
  onClose?: () => void;
  withBackground?: boolean;
  title?: string;
};

export const Modal: FC<PropsWithChildren<ModalProps>> = ({
  isOpen,
  children,
  onClose,
  title,
  withBackground = true,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      setIsClosing(false);
      if (onClose) {
        onClose();
      }
    }, 300);
  };

  const handleModalClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      setTimeout(() => setIsVisible(false), 300);
    }
  }, [isOpen]);

  return (
    <>
      {isOpen &&
        createPortal(
          <div className={styles.modalContainer}>
            <div
              onClick={handleClose}
              className={cn(styles.modalWrapper, {
                [styles.isVisible]: isVisible,
                [styles.isClosing]: isClosing,
              })}
            >
              <div
                className={cn(styles.modal, {
                  [styles.isVisible]: isVisible,
                  [styles.isClosing]: isClosing,
                })}
              >
                <div
                  onClick={handleModalClick}
                  className={cn(styles.modalContent, {
                    [styles.withBackground]: withBackground,
                  })}
                >
                  <div onClick={handleClose} className={styles.modalClose}>
                    <Close />
                  </div>
                  {!!title && <div className={styles.title}>{title}</div>}
                  {children}
                </div>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
};
