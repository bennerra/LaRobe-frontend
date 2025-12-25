import React, { FC, InputHTMLAttributes, useEffect, useState } from "react";
import cn from "classnames";

import FileImg from "@/assets/images/file-loader.svg";
import { FileListPreview } from "@/ui/FileListPreview/FileListPreview";

import styles from "./styles.module.scss";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  name: string;
  withPreview?: boolean;
  isMultiple?: boolean;
  getValue?: (value: File[]) => void;
}

export const FileInput: FC<Props> = ({
  error,
  name,
  withPreview = false,
  isMultiple = false,
  getValue,
}) => {
  const [files, setFiles] = useState<File[]>([]);
  const acceptedExtensions = [".png", ".jpg", ".bmp"];

  useEffect(() => {
    if (getValue) {
      getValue(files);
    }
  }, [files]);

  const filterByAcceptedExtensions = (files: File[]) => {
    return files.filter((file) => {
      const fileExtension = file.name
        .slice(file.name.lastIndexOf("."))
        .toLowerCase();
      return acceptedExtensions.includes(fileExtension);
    });
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const droppedFiles = event.dataTransfer.files;
    if (droppedFiles.length > 0) {
      const newFiles = filterByAcceptedExtensions(Array.from(droppedFiles));

      if (newFiles.length > 0) {
        setFiles((prevFiles) =>
          isMultiple ? [...prevFiles, ...newFiles] : [newFiles[0]],
        );
      }
    }
  };

  const handleClipboard = async (event: React.ClipboardEvent) => {
    const data = event.clipboardData;

    if (data.items) {
      // @ts-ignore
      for (const item of data.items) {
        if (
          item.kind === "file" &&
          (item.type.startsWith("image/png") ||
            item.type.startsWith("image/jpeg") ||
            item.type.startsWith("image/bmp"))
        ) {
          const blob = item.getAsFile();
          if (blob) {
            setFiles((prevFiles) =>
              isMultiple ? [...prevFiles, blob] : [blob],
            );
          }
        }
      }
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;
    if (selectedFiles && selectedFiles.length > 0) {
      const newFiles = filterByAcceptedExtensions(Array.from(selectedFiles));

      if (newFiles.length > 0) {
        setFiles((prevFiles) =>
          isMultiple ? [...prevFiles, ...newFiles] : [newFiles[0]],
        );
      }
    }
  };

  return (
    <div>
      <div
        className={cn(styles.fileInputInfo, { [styles.error]: !!error })}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
      >
        <FileImg />
        <div className={styles.fileInputText}>
          Загрузите файл в формате .png, .jpg, .bmp
        </div>
        <div className={styles.fileInputButtons}>
          <div className={cn(styles.inputButton, styles.fileInputButtonDark)}>
            <div>Выбрать файл</div>
            <input
              className={styles.input}
              name={name}
              type="file"
              accept=".png,.jpg,.bmp"
              multiple={isMultiple}
              onChange={handleFileChange}
            />
          </div>
          <div onPaste={handleClipboard} className={styles.fileInputBuffer}>
            <input type="text" placeholder="Вставить из буфера" />
          </div>
        </div>
      </div>
      {error && <div className={styles.error}>{error}</div>}
      {files && withPreview && (
        <FileListPreview setFiles={setFiles} files={files} />
      )}
    </div>
  );
};
