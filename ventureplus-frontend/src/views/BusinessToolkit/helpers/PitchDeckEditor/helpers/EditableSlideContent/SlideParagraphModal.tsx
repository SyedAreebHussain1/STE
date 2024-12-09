import { Button, Modal } from "antd";
import { cancelIconWhite } from "../../../../../../assets";
import { useState } from "react";
import RoundedButton from "../../../../../../components/button/RoundedButton";
import axios from "axios";
import { infoMessage } from "../../../../../../utils/message";

const SlideParagraphModal = ({
  text,
  open,
  toggle,
  saveModalData,
}: {
  text: string;
  open: boolean;
  toggle: () => void;
  saveModalData: (text: string) => void;
}) => {
  const [selectedText, setSelectedText] = useState<string>("");
  const [newText, setNewText] = useState(text);
  const [newSelectedText, setNewSelectedText] = useState("");
  const [type, setType] = useState("");
  const [loading, setLoading] = useState(false);

  const handleTextSelection = () => {
    if (newSelectedText) {
      setSelectedText(newSelectedText);
      return;
    }
    const elementDiv = document.querySelector("#contentOfParagraph");

    if (!elementDiv) {
      return;
    }

    const selection = document.getSelection();
    if (!selection || !selection.rangeCount) {
      return;
    }

    const range = selection.getRangeAt(0);
    const selectedString = range.toString();

    // Ensure that the selection is inside the elementDiv
    if (!elementDiv.contains(range.commonAncestorContainer)) {
      return;
    }

    if (selectedString === "") {
      if (selectedText !== "") {
        setSelectedText("");
      }
      return;
    }

    if (selectedString === selectedText) {
      return;
    }

    if (selectedString !== selectedText) {
      setSelectedText(selectedString);
    }
  };

  async function apiCall(type: string) {
    setLoading(true);
    try {
      const result: any = await axios.post(
        `${
          import.meta.env.VITE_BASE_URL_LAMDA
        }/enhanceanswer?content=${selectedText}&type=${type}`
      );

      const apiResponse = result?.data?.Answer;

      if (apiResponse && selectedText) {
        setType("");
        replaceSelectedText(apiResponse);
      }

      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  }

  const replaceSelectedText = (replacementText: string) => {
    if (newSelectedText) {
      setNewText(replacementText);
      setNewSelectedText("");
      setSelectedText("");
      const selection = window.getSelection();
      if (selection) {
        selection.removeAllRanges();
      }
      return;
    }
    const selection = document.getSelection();
    if (!selection || !selection.rangeCount) {
      return;
    }

    const range = selection.getRangeAt(0);
    const elementDiv = document.querySelector("#contentOfParagraph");

    if (!elementDiv || !elementDiv.contains(range.commonAncestorContainer)) {
      return;
    }

    range.deleteContents();
    range.insertNode(document.createTextNode(replacementText));
    selection.removeAllRanges();
    setSelectedText("");
  };

  const clickHandler = (type: string) => {
    if (selectedText) {
      setType(type);
      apiCall(type);
    } else {
      infoMessage("First select the Text");
    }
  };
  const saveHandler = () => {
    const contentOfParagraph = document.querySelector("#contentOfParagraph");
    if (contentOfParagraph?.innerHTML) {
      saveModalData(contentOfParagraph?.innerHTML);
    }
  };

  const handleTripleClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    if (event.detail === 3) {
      const selectedTextFromWindow = window.getSelection()?.toString();

      if (selectedTextFromWindow) {
        setNewSelectedText(selectedTextFromWindow);
      }
    } else {
      setNewSelectedText("");
    }
  };

  return (
    <Modal
      centered
      footer={null}
      open={open}
      onCancel={toggle}
      closeIcon={false}
      closable={false}
      maskClosable={false}
      width="100%"
      className="m-0 py-[20px] paragraphforPdf rounded-xl overflow-hidden"
    >
      <div className="flex w-full max-h-max" onMouseMove={handleTextSelection}>
        <div className="flex-1 h-[90vh] overflow-y-auto py-[15px] px-[10px]">
          <h1 className="text-[#040615] text-[23px] font-medium border-b-2 border-[#040615] pb-[8px] px-[8px]">
            Paragraph
          </h1>
          <div
            id={"contentOfParagraph"}
            onClick={handleTripleClick}
            className={`h-[50%] ${
              !loading ? "visible" : "invisible"
            }  overscroll-y-auto custom-scrollbar text-[#040615]  ${
              loading ? "select-none" : "paragraphforPdfSelecText"
            }`}
            dangerouslySetInnerHTML={{
              __html: newText,
            }}
          />
        </div>
        <div className="w-max py-[15px] px-[10px] h-[90vh] flex flex-col bg-[#016A70]">
          <div className="flex justify-between border-b-2 border-[#F8FAFC] items-center px-[8px] pb-[8px]">
            <h1 className="text-[#fff] text-[23px] font-medium">Editor</h1>
            <div onClick={toggle}>
              <img src={cancelIconWhite} alt="cancel icon" />
            </div>
          </div>
          <div className="h-full overflow-y-auto p-[5px]">
            <div className="h-max pb-[5px]">
              <Button
                onClick={() => clickHandler("Expand")}
                disabled={loading}
                loading={loading && type == "Expand"}
                className={`w-[300px] bg-[#fff] mt-[10px] p-[10px] py-[20px] rounded-xl text-[18px] text-left ${
                  type === "Expand"
                    ? "disabled:bg-[#ffffff]"
                    : "disabled:bg-[#ffffff50]"
                }`}
              >
                Expand
              </Button>
            </div>

            <div className="h-max pb-[5px]">
              <Button
                onClick={() => clickHandler("Shorten")}
                disabled={loading}
                loading={loading && type == "Shorten"}
                className={`w-[300px] bg-[#fff] mt-[10px] p-[10px] py-[20px] rounded-xl text-[18px] text-left ${
                  type === "Shorten"
                    ? "disabled:bg-[#ffffff]"
                    : "disabled:bg-[#ffffff50]"
                }`}
              >
                Shorten
              </Button>
            </div>

            <div className="h-max pb-[5px]">
              <Button
                onClick={() => clickHandler("Summarize")}
                disabled={loading}
                loading={loading && type == "Summarize"}
                className={`w-[300px] bg-[#fff] mt-[10px] p-[10px] py-[20px] rounded-xl text-[18px] text-left ${
                  type === "Summarize"
                    ? "disabled:bg-[#ffffff]"
                    : "disabled:bg-[#ffffff50]"
                }`}
              >
                Summarize
              </Button>
            </div>

            <div className="h-max pb-[5px]">
              <Button
                onClick={() => clickHandler("Fix grammar")}
                disabled={loading}
                loading={loading && type == "Fix grammar"}
                className={`w-[300px] bg-[#fff] mt-[10px] p-[10px] py-[20px] rounded-xl text-[18px] text-left ${
                  type === "Fix grammar"
                    ? "disabled:bg-[#ffffff]"
                    : "disabled:bg-[#ffffff50]"
                }`}
              >
                Fix grammar
              </Button>
            </div>

            <div className="h-max pb-[5px]">
              <Button
                onClick={() => clickHandler("Enrich vocabulary")}
                disabled={loading}
                loading={loading && type == "Enrich vocabulary"}
                className={`w-[300px] bg-[#fff] mt-[10px] p-[10px] py-[20px] rounded-xl text-[18px] text-left ${
                  type === "Enrich vocabulary"
                    ? "disabled:bg-[#ffffff]"
                    : "disabled:bg-[#ffffff50]"
                }`}
              >
                Enrich vocabulary
              </Button>
            </div>

            <div className="h-max pb-[5px]">
              <Button
                onClick={() => clickHandler("Clarify")}
                disabled={loading}
                loading={loading && type == "Clarify"}
                className={`w-[300px] bg-[#fff] mt-[10px] p-[10px] py-[20px] rounded-xl text-[18px] text-left ${
                  type === "Clarify"
                    ? "disabled:bg-[#ffffff]"
                    : "disabled:bg-[#ffffff50]"
                }`}
              >
                Clarify
              </Button>
            </div>
          </div>
          <div className="flex w-full pt-[10px]">
            <RoundedButton
              loading={loading}
              disabled={loading}
              title={"Save"}
              sm
              className="rounded-lg w-full"
              type="default"
              onClick={() => saveHandler()}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};
export default SlideParagraphModal;
