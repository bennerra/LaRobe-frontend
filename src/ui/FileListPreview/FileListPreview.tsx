import React, { FC } from "react";
import { v4 as uuidv4 } from "uuid";

import Remove from "@/assets/images/close.svg";

import styles from "./styles.module.scss";

interface Props {
  files: File[];
  setFiles: React.Dispatch<React.SetStateAction<File[]>>;
}

export const FileListPreview: FC<Props> = ({ files, setFiles }) => {
  const onRemove = (id: number) => {
    const filteredFiles = files.filter((file) => file.lastModified !== id);
    setFiles(filteredFiles);
  };

  return (
    <div className={styles.fileList}>
      {files.map((file) => {
        const src = URL.createObjectURL(file);
        return (
          <div className={styles.fileListItem} key={uuidv4()}>
            <div
              onClick={() => onRemove(file.lastModified)}
              className={styles.remove}
            >
              <Remove />
            </div>
            <div className={styles.img}>
              <img src={src} alt="" />
            </div>
            <div className={styles.name}>{file.name}</div>
          </div>
        );
      })}
    </div>
  );
};
