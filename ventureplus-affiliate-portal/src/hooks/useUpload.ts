import { useEffect, useState } from "react";

interface ImagePreview {
  url: string;
  name: string;
  size: number;
  type: string;
}

interface UploadState {
  progress: number;
  resetProgress: () => void;
}

interface FilesCountState {
  count: number;
  setState: React.Dispatch<React.SetStateAction<number>>;
}

export function useUpload(): [
  File[],
  React.Dispatch<React.SetStateAction<File[]>>,
  ImagePreview[],
  (name: string) => void,
  UploadState,
  FilesCountState
] {
  const [files, setFiles] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<ImagePreview[]>([]);
  const [progress, setProgress] = useState<number>(0);
  const [filesCount, setFilesCount] = useState<number>(0);

  useEffect(() => {
    if (files.length > 0) {
      setImagePreviews([]);
      setProgress(0);

      const loadFiles = async () => {
        for (let i = 0; i < files.length; i++) {
          const data = new FileReader();

          data.onload = () => {
            setImagePreviews((prev) => [
              ...prev,
              {
                url: data.result as string,
                name: files[i].name,
                size: files[i].size,
                type: files[i].type,
              },
            ]);
          };

          data.onprogress = (event) => {
            const percent = (event.loaded / event.total) * 100;
            setProgress(Number(percent.toFixed(2)));
          };

          data.readAsDataURL(files[i]);
        }
      };

      loadFiles();
    } else {
      setImagePreviews([]);
    }
  }, [files]);

  const deleteFile = (name: string): void => {
    const updatedFiles = files.filter((file) => name !== file.name);
    setFiles(updatedFiles);
    setProgress(0);
  };

  const resetProgress = (): void => {
    setProgress(0);
    setFiles([]);
    setImagePreviews([]);
  };

  return [
    files,
    setFiles,
    imagePreviews,
    deleteFile,
    { progress, resetProgress },
    { count: filesCount, setState: setFilesCount },
  ];
}
