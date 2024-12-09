import React, {
  ChangeEvent,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { Spin } from "antd";
import { IoCloudCircleOutline } from "react-icons/io5";
import { errorMessage } from "../../message";
import file from "../../../assets/upload.svg";
import { Button } from "../../../components";

interface UploadProps {
  files: File[];
  setFiles: React.Dispatch<React.SetStateAction<File[]>>;
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

const Upload: React.FC<UploadProps> = ({
  files: filesState,
  setFiles,
  name,
  supportedFileTypes,
  supportedText,
  multiple = false,
  fileLimit = 0,
  fileName,
  disabled = false,
  fileUploadLimit,
  filesCount,
  compressImages = true,
  label,
  icon,
}) => {
  const drop = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const sizeLimit = fileLimit * 1048576;
  const [loading, setLoading] = useState(false);

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
              )}-${(fileName &&
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
          setFiles((prev) => [...prev, ...imageArr]);
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
              setFiles([compressedImageUrl]);
            } else {
              setFiles([newFiles[0]]);
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

  const handleClick = (e: any) => {
    e.preventDefault();
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
              )}-${(fileName &&
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
          setFiles((prev) => [...prev, ...imageArr]);
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
              setFiles([compressedImageUrl]);
            } else {
              setFiles([newFiles[0]]);
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
          className={`flex justify-center bg-transparent items-center ${disabled ? "cursor-not-allowed" : "cursor-pointer"
            } rounded-[5px] border-2 border-primary border-dashed  py-[22px]`}
          ref={drop}
        >
          <div>
            <div className="flex justify-center  ">
              {icon ? icon : <img src={file} alt="" />}
            </div>
            <div className="p-[10px] flex justify-center items-center flex-col">
              <p className="text-[.9375rem] font-medium text-[#3D4350] text-center">
                Drag & drop your files
              </p>
              {supportedText && (
                <p className="text-[12px] font-medium text-[#929292] mt-[2px] mb-[10px]">
                  {supportedText}
                </p>
              )}
            </div>
            <div className="flex justify-center items-center ">
              <Button
                onClick={(e: any) => handleClick(e)}
                label={"Browse"}
                variant="filled"
                disabled={disabled}
              />
              <input
                type="file"
                onChange={handleChange}
                id={name}
                disabled={disabled}
                className="!hidden"
                ref={inputRef}
                multiple={multiple}
              ></input>
            </div>
          </div>
        </div>
      </label>
    </Spin>
  );
};

export default Upload;
