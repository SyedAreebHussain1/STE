import React, {
  ChangeEvent,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { Button, Spin } from "antd";
import { errorMessage } from "../../../../utils/message";
import { defaultImageForPlan } from "../../../../assets";

interface UploadProps {
  data: { url: string; file: File };
  setData: React.Dispatch<React.SetStateAction<any>>;
  name: string;
  supportedFileTypes: string[];
  supportedText?: string;
  multiple?: boolean;
  fileLimit?: number;
  fileName?: string;
  disabled?: boolean;
  fileUploadLimit?: number;
  filesCount?: { count: number };
  compressImages?: boolean;
  label?: string;
  icon?: ReactNode;
  index: number;
}

function renameFile(originalFile: File, newName: string): File {
  return new File([originalFile], newName, {
    type: originalFile.type,
    lastModified: originalFile.lastModified,
  });
}

function formatBytes(bytes: number, decimals: number = 2): string {
  if (!+bytes) return "0 Bytes";

  const k: number = 1024;
  const dm: number = decimals < 0 ? 0 : decimals;
  const sizes: string[] = [
    "Bytes",
    "KB",
    "MB",
    "GB",
    "TB",
    "PB",
    "EB",
    "ZB",
    "YB",
  ];

  const i: number = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}

const UploadImageInPlan: React.FC<UploadProps> = ({
  setData,
  name,
  supportedFileTypes,
  supportedText,
  multiple = false,
  fileLimit = 0,
  fileName,
  fileUploadLimit,
  filesCount,
  compressImages = true,
  label,
  icon,
  data,
  index,
}) => {
  const drop = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const sizeLimit = fileLimit * 1048576;
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageURL] = useState("");
  useEffect(() => {
    if (data.file) {
      setImageURL(URL.createObjectURL(data.file));
    }
  }, [data.file]);

  useEffect(() => {
    const element = drop.current;
    element?.addEventListener("dragover", handleDragOver);
    element?.addEventListener("drop", handleDrop);

    return () => {
      element?.removeEventListener("dragover", handleDragOver);
      element?.removeEventListener("drop", handleDrop);
    };
  }, []);
  const handleDragOver = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
  };
  function extractExtensionFromFileName(name: string) {
    const re = /(?:\.([^.]+))?$/;
    return re.exec(name)![1];
  }

  function compressImage(
    file: File,
    compressionQuality: number
  ): Promise<File> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = function () {
        const img = new Image();
        img.onload = function () {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");
          canvas.width = img.width / 2;
          canvas.height = img.height / 2;
          ctx?.drawImage(img, 0, 0, img.width / 2, img.height / 2);
          canvas.toBlob(
            function (blob) {
              const compressedFile = new File([blob!], file.name, {
                type: "image/jpeg", // Set desired output format
                lastModified: Date.now(), // Set the modified timestamp
              });
              resolve(compressedFile);
            },
            "image/jpeg",
            compressionQuality
          );
        };
        img.onerror = function () {
          reject(new Error("Failed to load the image."));
        };
        img.src = reader.result as string;
      };
      reader.onerror = function () {
        reject(new Error("Failed to read the file."));
      };
      reader.readAsDataURL(file);
    });
  }

  const handleDrop = async (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setLoading(true);
    const { files } = e.dataTransfer;

    const newFiles: File[] = [];

    if (inputRef.current?.disabled) {
      setLoading(false);
      return;
    }
    if (files.length > 0) {
      if (
        fileUploadLimit &&
        (files.length > fileUploadLimit ||
          Number(filesCount?.count) + Number(files.length) > fileUploadLimit)
      ) {
        errorMessage(
          `Limit Exceeded, you can only upload ${fileUploadLimit} files`
        );
        if (inputRef.current) {
          inputRef.current.value = "";
        }
        setLoading(false);
        return;
      }
      const cases: boolean[] = [];
      for (let i = 0; i < files.length; i++) {
        if (sizeLimit && !(files[i].size <= sizeLimit)) {
          errorMessage(
            "File Size must be less than or equal to " + formatBytes(sizeLimit)
          );
          if (inputRef.current) {
            inputRef.current.value = "";
          }
          setLoading(false);
          return;
        }
        if (supportedFileTypes.includes(files[i].type.split("/")[1])) {
          newFiles.push(
            renameFile(
              files[i],
              `${Math.floor(
                Math.random() * Math.floor(Math.random() * Date.now())
              )}-${
                (fileName &&
                  fileName +
                    "." +
                    extractExtensionFromFileName(files[i].name)) ||
                files[i].name.replace(/[ \-\/\[\]{}()]+/g, "")
              }`
            )
          );
          cases.push(true);
        } else {
          cases.push(false);
        }
      }
      if (cases.includes(false)) {
        errorMessage("File Types not supported");
        if (inputRef.current) {
          inputRef.current.value = "";
        }
      } else {
        if (multiple) {
          const imageArr: File[] = [];
          for (let i = 0; i < newFiles.length; i++) {
            try {
              if (
                ["jpg", "png", "jpeg"].includes(
                  newFiles[i].type.split("/")[1]
                ) &&
                compressImages
              ) {
                const compressedImageUrl = await compressImage(
                  newFiles[i],
                  0.7
                );
                imageArr.push(compressedImageUrl);
              } else {
                imageArr.push(newFiles[i]);
              }
            } catch (error: any) {
              errorMessage(error.message);
            }
          }
          setData((prev: any) => {
            return prev.map((item: any, ind: number) =>
              ind === index
                ? { ...item, url: data.url, file: newFiles[0] }
                : item
            );
          });
          if (inputRef.current) {
            inputRef.current.value = "";
          }
        } else {
          try {
            if (
              ["jpg", "png", "jpeg"].includes(newFiles[0].type.split("/")[1]) &&
              compressImages
            ) {
              const compressedImageUrl = await compressImage(newFiles[0], 0.7);
              setData((prev: any) => {
                return prev.map((item: any, ind: number) =>
                  ind === index
                    ? {
                        ...item,
                        url: compressedImageUrl,
                        file: compressedImageUrl,
                      }
                    : item
                );
              });
            } else {
              setData((prev: any) => {
                return prev.map((item: any, ind: number) =>
                  ind === index
                    ? { ...item, url: data.url, file: newFiles[0] }
                    : item
                );
              });
            }
            if (inputRef.current) {
              inputRef.current.value = "";
            }
          } catch (error: any) {
            errorMessage(error.message);
          }
        }
      }
    }
    setLoading(false);
  };

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    setLoading(true);
    const { files } = e.target;
    const newFiles: File[] = [];
    if (files) {
      if (files.length > 0) {
        if (
          fileUploadLimit &&
          (files.length > fileUploadLimit ||
            Number(filesCount?.count) + Number(files.length) > fileUploadLimit)
        ) {
          errorMessage(
            `Limit Exceeded, you can only upload ${fileUploadLimit} files`
          );
          if (inputRef.current) {
            inputRef.current.value = "";
          }
          setLoading(false);
          return;
        }
      }

      const cases: boolean[] = [];
      for (let i = 0; i < files.length; i++) {
        if (sizeLimit && !(files[i].size <= sizeLimit)) {
          errorMessage(
            "File Size must be less than or equal to " + formatBytes(sizeLimit)
          );
          if (inputRef.current) {
            inputRef.current.value = "";
          }
          setLoading(false);
          return;
        }
        if (supportedFileTypes.includes(files[i].type.split("/")[1])) {
          newFiles.push(
            renameFile(
              files[i],
              `${Math.floor(
                Math.random() * Math.floor(Math.random() * Date.now())
              )}-${
                (fileName &&
                  fileName +
                    "." +
                    extractExtensionFromFileName(files[i].name)) ||
                files[i].name.replace(/[ \-\/\[\]{}()]+/g, "")
              }`
            )
          );
          cases.push(true);
        } else {
          cases.push(false);
        }
      }
      if (cases.includes(false)) {
        errorMessage("File Types not supported");
        if (inputRef.current) {
          inputRef.current.value = "";
        }
      } else {
        if (multiple) {
          const imageArr: File[] = [];
          for (let i = 0; i < newFiles.length; i++) {
            try {
              if (
                ["jpg", "png", "jpeg"].includes(
                  newFiles[i].type.split("/")[1]
                ) &&
                compressImages
              ) {
                const compressedImageUrl = await compressImage(
                  newFiles[i],
                  0.7
                );
                imageArr.push(compressedImageUrl);
              } else {
                imageArr.push(newFiles[i]);
              }
            } catch (error: any) {
              errorMessage(error.message);
            }
          }
          setData((prev: any) => {
            return prev.map((item: any, ind: number) =>
              ind === index
                ? { ...item, url: data.url, file: newFiles[0] }
                : item
            );
          });

          if (inputRef.current) {
            inputRef.current.value = "";
          }
        } else {
          try {
            if (
              ["jpg", "png", "jpeg"].includes(newFiles[0].type.split("/")[1]) &&
              compressImages
            ) {
              const compressedImageUrl = await compressImage(newFiles[0], 0.7);
              setData((prev: any) => {
                return prev.map((item: any, ind: number) =>
                  ind === index
                    ? { ...item, url: data.url, file: compressedImageUrl }
                    : item
                );
              });
            } else {
              setData((prev: any) => {
                return prev.map((item: any, ind: number) =>
                  ind === index
                    ? { ...item, url: data.url, file: newFiles[0] }
                    : item
                );
              });
            }

            if (inputRef.current) {
              inputRef.current.value = "";
            }
          } catch (error: any) {
            if (error && error.message) {
              errorMessage(error.message);
            }
          }
        }
      }
    }
    setLoading(false);
  };

  return (
    <Spin spinning={loading}>
      <label htmlFor={name}>
        <div
          className="flex justify-center bg-transparent items-center cursor-pointer rounded-md overflow-hidden p-[0] "
          ref={drop}
        >
          <img
            src={imageUrl || data.url || defaultImageForPlan}
            className="w-[280px]"
          />
          <input
            type="file"
            onChange={handleChange}
            id={name}
            className="!hidden h-0"
            ref={inputRef}
            multiple={multiple}
          ></input>
        </div>
      </label>
    </Spin>
  );
};

export default UploadImageInPlan;
