import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  Typography,
} from "@material-ui/core";
import { formatBytes, renameFile } from "../utils";
import {errorMessage} from './../message'

const Upload = ({
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
  compressImages = true
}) => {
  const drop = useRef(null);
  const inputRef = useRef(null);
  const sizeLimit = fileLimit * 1048576;
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const element = drop.current;
    element.addEventListener("dragover", handleDragOver);
    element.addEventListener("drop", handleDrop);

    return () => {
      element.removeEventListener("dragover", handleDragOver);
      element.removeEventListener("drop", handleDrop);
    };
  }, []);

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  function extractExtensionFromFileName(name) {
    const re = /(?:\.([^.]+))?$/;
    return re.exec(name)[1];
  }

  useEffect(() => {
    if(filesCount){
      filesCount.setState(filesState.length)
    }
  }, [filesState])

  function compressImage(file, compressionQuality) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = function() {
        const img = new Image();
        img.onload = function() {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");
          canvas.width = img.width / 2;
          canvas.height = img.height / 2;
          ctx.drawImage(img, 0, 0, img.width / 2, img.height / 2);
          canvas.toBlob(
            function(blob) {
              const compressedFile = new File([blob], file.name, {
                type: "image/jpeg", // Set desired output format
                lastModified: Date.now(), // Set the modified timestamp
              });
              resolve(compressedFile);
            },
            "image/jpeg",
            compressionQuality
          );
        };
        img.onerror = function() {
          reject(new Error("Failed to load the image."));
        };
        img.src = reader.result;
      };
      reader.onerror = function() {
        reject(new Error("Failed to read the file."));
      };
      reader.readAsDataURL(file);
    });
  }

  const handleDrop = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    setLoading(true);
    const { files } = e.dataTransfer;

    const newFiles = [];

    if (inputRef.current.disabled) {
      setLoading(false);
      return;
    }
    if (files.length > 0) {
      if (
        fileUploadLimit &&
        (files.length > fileUploadLimit ||
          Number(filesCount.count) + Number(files.length) > fileUploadLimit)
      ) {
        errorMessage(
          `Limit Exceded, you can only upload ${fileUploadLimit} files`
        );
        inputRef.current.value = null;
        setLoading(false);
        return;
      }
      const cases = [];
      for (let i = 0; i < files.length; i++) {
        // check if there is size props and if there this check if file size is not less then or equal to given size
        // show error message if its not less then or equal to given size
        if (sizeLimit && !(files[i].size <= sizeLimit)) {
          errorMessage(
            "File Size must be less then or equal to " + formatBytes(sizeLimit)
          );
          inputRef.current.value = null;
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
                fileName + "." + extractExtensionFromFileName(files[i].name)) ||
                files[i].name.replace(/[ \-\/\[\]{}()]+/g, "")}`
            )
          );
          cases.push(true);
        } else {
          cases.push(false);
        }
      }
      if (cases.includes(false)) {
        errorMessage("File Types not supported");
        inputRef.current.value = null;
      } else {
        if (multiple) {
          const imageArr = [];
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
            } catch (error) {
              errorMessage(error);
            }
          }
          setFiles((prev) => [...prev, ...imageArr]);
          inputRef.current.value = null;
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

            inputRef.current.value = null;
          } catch (error) {
            errorMessage(error);
          }
          // setFiles(newFiles);
          // inputRef.current.value = null;
        }
      }
    }
    setLoading(false);
  };
  const handleClick = () => {
    // 👇️ open file input box on click of another element
    inputRef.current.click();
  };

  async function handleChange(e) {
    // if(filesState.length >= 5){
    //   errorMessage("Files Limit Exceded")
    //   return;
    // }
    setLoading(true);
    const { files } = e.target;
    const newFiles = [];
    if (files.length > 0) {
      if (
        fileUploadLimit &&
        (files.length > fileUploadLimit ||
          Number(filesCount.count) + Number(files.length) > fileUploadLimit)
      ) {
        errorMessage(
          `Limit Exceded, you can only upload ${fileUploadLimit} files`
        );
        inputRef.current.value = null;
        setLoading(false);
        return;
      }
      const cases = [];
      for (let i = 0; i < files.length; i++) {
        // check if there is size props and if there this check if file size is not less then or equal to given size
        // show error message if its not less then or equal to given size
        if (sizeLimit && !(files[i].size <= sizeLimit)) {
          errorMessage(
            "File Size must be less then or equal to " + formatBytes(sizeLimit)
          );
          inputRef.current.value = null;
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
                fileName + "." + extractExtensionFromFileName(files[i].name)) ||
                files[i].name.replace(/[ \-\/\[\]{}()]+/g, "")}`
            )
          );
          cases.push(true);
        } else {
          cases.push(false);
        }
      }
      if (cases.includes(false)) {
        errorMessage("File Types not supported");
        inputRef.current.value = null;
      } else {
        if (multiple) {
          const imageArr = [];
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
            } catch (error) {
              errorMessage(error);
            }
          }
          setFiles((prev) => [...prev, ...imageArr]);
          inputRef.current.value = null;
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

            inputRef.current.value = null;
          } catch (error) {
            errorMessage(error);
          }
          // setFiles(newFiles);
          // inputRef.current.value = null;
        }
      }
    }
    setLoading(false);
  }
  return (
    // Inside your component
    <InputLabel htmlFor={name}>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#79C7C705",
          cursor: "pointer",
          borderRadius: "5px",
          border: "2px solid #27a3a3",
          borderStyle: "dashed",
        }}
        ref={drop}
      >
        <Box p={2}>
          <Box style={{ display: "flex", justifyContent: "center" }}>
            <img src={require("./../../api/icons/cloudiconadd.png")} alt="" />
          </Box>
          <Box
            p={1}
            style={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              flexDirection: "column",
            }}
          >
            <Box>
              <Typography variant="subtitle1" color="textPrimary" style={{ fontWeight: 600 }}>
                Drag and Drop Files
              </Typography>
              <Typography variant="body2" color="textSecondary" mt={1} mb={2}>
                {supportedText}
              </Typography>
            </Box>
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "3px",
                marginTop: 10
              }}
            >
              <Button
                onClick={handleClick}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#27A3A3",
                  border: "1px solid #27A3A3",
                  color: "#fff",
                  fontSize: "12px",
                  fontWeight: "bold",
                  gap: "2px",
                  padding: '7px 20px',
                  borderRadius: '8px'
                }}
              >
                <span>Browse</span>
              </Button>
              <input
                type="file"
                onChange={handleChange}
                id={name}
                style={{ display: "none" }}
                ref={inputRef}
                multiple={multiple}
                disabled={disabled || filesCount?.count >= fileUploadLimit}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      {loading && <CircularProgress />}
    </InputLabel>
  );
};

export default Upload;
