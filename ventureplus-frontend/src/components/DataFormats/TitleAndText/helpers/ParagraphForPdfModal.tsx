import { Button, Form, Modal } from "antd";
import { cancelIconWhite, settingIconBlack } from "../../../../assets";
import React, { useEffect, useRef, useState } from "react";
import RoundedButton from "../../../button/RoundedButton";
import axios from "axios";
import { errorMessage, infoMessage } from "../../../../utils/message";
import useToggle from "../../../../hooks/useToggle";
import TextArea from "antd/es/input/TextArea";
import { useForm } from "antd/es/form/Form";
import { getFromStorage } from "../../../../utils/storage";
import {
  loadingEditPlan,
  RefineFurtherIcon,
  useCustomPromptIcon,
} from "../../../../assets/viewPlanAssets";
import { io, Socket } from "socket.io-client";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";

const SOCKET_SERVER_URL = import.meta.env.VITE_BASE_URL_SOCKET;

const ParagraphForPdfModal = ({
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
  const [previousType, setPreviousType] = useState("");
  const [newSelectedText, setNewSelectedText] = useState("");
  const [type, setType] = useState("");
  const [loading, setLoading] = useState(false);
  const [customPromptOpen, toggleCustomPromptOpen] = useToggle();
  const [dataChange, setDataChange] = useState(false);
  const [socket, setSocket] = useState<Socket | null>(null);
  const getSelectedBusinessPlanId = useSelector(
    (state: RootState) => state?.currentSelectedBusinessPlan?.businessPlan?.id
  );
  const selectedTextRef = useRef("");

  const handleTextSelection = () => {
    if (newSelectedText) {
      setSelectedText(newSelectedText);
      selectedTextRef.current = newSelectedText;
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
        selectedTextRef.current = "";
      }
      return;
    }

    if (selectedString === selectedText) {
      return;
    }

    if (selectedString !== selectedText) {
      setSelectedText(selectedString);
      selectedTextRef.current = selectedString;
    }
  };

  useEffect(() => {
    const newSocket: Socket = io(SOCKET_SERVER_URL);
    setSocket(newSocket);
    return () => {
      newSocket.close();
    };
  }, []);

  useEffect(() => {
    if (!socket) {
      return;
    }
    if (getSelectedBusinessPlanId) {
      socket.on(`enhanceAnswer-${getSelectedBusinessPlanId}`, (data: any) => {
        console.log(data);
        if (data?.error) {
          console.error(data?.error);
          errorMessage(data.error);
          setLoading(false);
          return;
        }
        const apiResponse = data?.Answer;
        if (apiResponse && selectedTextRef.current) {
          setType("");
          replaceSelectedText(apiResponse);
          setDataChange(true);
        }
        setLoading(false);
      });
    }
  }, [getSelectedBusinessPlanId, socket]);

  async function apiCall(type: string) {
    setLoading(true);
    console.log({
      content: selectedText,
      type: type,
      businessPlanId: getSelectedBusinessPlanId,
    });
    socket?.emit(`enhanceAnswer`, {
      content: selectedText,
      type: type,
      businessPlanId: getSelectedBusinessPlanId,
    });
  }

  const replaceSelectedText = (replacementText: string) => {
    if (newSelectedText) {
      setNewText(replacementText);
      setNewSelectedText("");
      setSelectedText("");
      selectedTextRef.current = "";
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
    selectedTextRef.current = "";
  };

  const clickHandler = (type: string) => {
    if (selectedText) {
      setPreviousType(type);
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

  const triggerTripleClick = (element: HTMLDivElement) => {
    let clickCount = 0;

    const selectText = (element: HTMLDivElement) => {
      const range = document.createRange();
      const selection = window.getSelection();
      range.selectNodeContents(element);
      selection?.removeAllRanges();
      selection?.addRange(range);
    };

    const interval = setInterval(() => {
      clickCount++;

      selectText(element);

      const clickEvent = new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        detail: clickCount,
      });

      element.dispatchEvent(clickEvent);

      if (clickCount === 3) {
        clearInterval(interval); // Stop after 3 clicks
      }
    }, 0);
  };

  const moreLikeAndThisButHandler = () => {
    setSelectedText("");
    const myElement = document.querySelector("#contentOfParagraph");
    if (myElement) {
      triggerTripleClick(myElement as HTMLDivElement);
    }
  };

  const RefinefurtherHandler = (type: string, forLoading: string) => {
    if (selectedText) {
      setType(forLoading);
      apiCall(type);
    } else {
      infoMessage("Something went wrong please try again.");
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
      className={`m-0 py-[20px] paragraphforPdf rounded-xl overflow-hidden max-w-[1300px]  `}
    >
      <div className="flex w-full max-h-max" onMouseMove={handleTextSelection}>
        <div className="flex-1 h-[90vh] overflow-y-auto py-[15px] px-[10px] relative overflow-hidden">
          <h1 className="text-[#040615] text-[23px] font-medium border-b-2 border-[#040615] pb-[8px] px-[8px]">
            Customize your content
          </h1>
          <div className="bg-[#F8FAFC] p-[20px] mt-[10px] rounded-lg">
            <div
              className={`h-[50px] ${
                loading ? "block" : "hidden"
              } flex items-center justify-center w-full absolute `}
            >
              <img src={loadingEditPlan} className="h-[40px]" />
            </div>

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

            {dataChange && (
              <RefinefurtherComponent
                loading={loading}
                type={type}
                previousType={previousType}
                moreLikeAndThisButHandler={moreLikeAndThisButHandler}
                apiHandler={RefinefurtherHandler}
                selectedText={selectedText}
                setLoading={setLoading}
              />
            )}
          </div>
        </div>
        <div className=" h-[90vh]  relative">
          <CustomPromptComponent
            open={customPromptOpen}
            toggle={toggleCustomPromptOpen}
            loading={loading}
            type={type}
            clickHandler={clickHandler}
          />
          <div className="h-full flex flex-col bg-[#016A70] w-max py-[15px] px-[10px] relative rounded-tr-lg">
            <div className="flex justify-between border-b-2 border-[#F8FAFC] items-center px-[8px] pb-[8px]">
              <h1 className="text-[#fff] text-[23px] font-medium">Editor</h1>
              <button disabled={loading} onClick={toggle}>
                <img src={cancelIconWhite} alt="cancel icon" />
              </button>
            </div>
            <div className="h-full overflow-y-auto p-[5px]">
              <div className="h-max pb-[5px]">
                <Button
                  onClick={() => clickHandler("Expand")}
                  disabled={loading}
                  loading={loading && type == "Expand"}
                  className={`w-[250px] bg-[#fff] font-medium mt-[10px] px-[15px] py-[20px] rounded-lg text-[14px] justify-start ${
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
                  className={`w-[250px] bg-[#fff] font-medium mt-[10px] px-[15px] py-[20px] rounded-lg text-[14px] justify-start ${
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
                  className={`w-[250px] bg-[#fff] font-medium mt-[10px] px-[15px] py-[20px] rounded-lg text-[14px] justify-start ${
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
                  className={`w-[250px] bg-[#fff] font-medium mt-[10px] px-[15px] py-[20px] rounded-lg text-[14px] justify-start ${
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
                  className={`w-[250px] bg-[#fff] font-medium mt-[10px] px-[15px] py-[20px] rounded-lg text-[14px] justify-start ${
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
                  className={`w-[250px] bg-[#fff] font-medium mt-[10px] px-[15px] py-[20px] rounded-lg text-[14px] justify-start ${
                    type === "Clarify"
                      ? "disabled:bg-[#ffffff]"
                      : "disabled:bg-[#ffffff50]"
                  }`}
                >
                  Clarify
                </Button>
              </div>
              <div className="h-max pb-[5px]">
                <Button
                  onClick={() => toggleCustomPromptOpen()}
                  disabled={loading}
                  className={`w-[250px] bg-transparent !hover:bg-transparent font-medium text-[#fff] mt-[10px] px-[15px] py-[20px] rounded-lg text-[15px] justify-start gap-1 
                  `}
                >
                  <img src={useCustomPromptIcon} />
                  Add Custom Prompt
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
      </div>
    </Modal>
  );
};
export default ParagraphForPdfModal;

const CustomPromptComponent = ({
  open,
  toggle,
  loading,
  type,
  clickHandler,
}: {
  open: boolean;
  toggle: () => void;
  loading: boolean;
  type: string;
  clickHandler: (type: string) => void;
}) => {
  const [form] = useForm();
  const [text, setText] = useState("");

  const onFinish = (val: any) => {
    clickHandler(val.customPrompt);
  };

  return (
    <div
      className={`absolute w-[300px]  transform-all duration-500 p-[24px] pt-[20px] bottom-[100px]  h-max bg-[#F8FAFC] rounded-lg ${
        open ? "-left-[310px]" : "left-0"
      }`}
    >
      <div className=" w-full h-full ">
        <div className="flex gap-2 items-center mb-[8px]">
          <img src={settingIconBlack} className="w-[20px]" />
          <span className="text-[#212838] text-[16px] font-medium ">
            Create Your Custom Prompt
          </span>
        </div>
        <Form form={form} onFinish={onFinish}>
          <Form.Item
            className="w-full mb-[10px]"
            name="customPrompt"
            id="customPrompt"
          >
            <TextArea
              autoSize={{ minRows: 4, maxRows: 4 }}
              disabled={loading}
              placeholder="Enter your custom prompt here. For example: ‘What are the best strategies for expanding my target audience?’"
              className="text-[12px] select-none"
              onChange={(e) => setText(e.target.value)}
            />
          </Form.Item>
          <div className="flex justify-end w-full h-max ">
            <div className="flex gap-2">
              <RoundedButton
                title={<span className="text-[#4A5366]">Cancel</span>}
                className="w-max bg-[white] border-0 rounded-md text-[12px] "
                htmlType="button"
                disabled={loading}
                onClick={() => {
                  toggle();
                }}
                xs
              />
              <RoundedButton
                title={"Apply"}
                disabled={loading || !text}
                loading={loading && type == form.getFieldValue("customPrompt")}
                className="w-max  rounded-md text-[12px]  "
                type="primary"
                htmlType="submit"
                xs
              />
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

const RefinefurtherComponent = ({
  loading,
  type,
  moreLikeAndThisButHandler,
  apiHandler,
  selectedText,
  setLoading,
  previousType,
}: {
  loading: boolean;
  type: string;
  moreLikeAndThisButHandler: () => void;
  apiHandler: (type: string, forLoading: string) => void;
  selectedText: string;
  previousType: string;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [thisBut, setThisBut] = useState(false);
  const [text, setText] = useState("");
  const [form] = useForm();
  const morelikethisRef = useRef(false);
  const thisButRef = useRef(false);

  const onFinish = (val: any) => {
    // for This but
    thisButRef.current = true;
    setLoading(true);
    moreLikeAndThisButHandler();
  };

  // when click on (More like this) button and selectedText is true
  useEffect(() => {
    if (morelikethisRef.current && selectedText) {
      morelikethisRef.current = false;
      apiHandler(previousType, "morelikethis");
    }
  }, [selectedText, morelikethisRef.current]);

  // when click on (this but) button and selectedText is true
  useEffect(() => {
    if (thisButRef.current && selectedText && text) {
      thisButRef.current = false;
      apiHandler(`${previousType} but ${text}`, "thisbut");
    }
  }, [selectedText, thisButRef.current, text]);

  return (
    <div className="border-t-[1px] border-[#E3E7EF] pt-[12px] mt-[20px] ">
      <div className="flex gap-1 items-center">
        <img src={RefineFurtherIcon} className="select-none" />
        <p className="text-[#67A6A9] text-[15px] font-medium select-none">
          Refine further using AI...
        </p>
      </div>
      {!thisBut ? (
        <div className="flex gap-1 mt-[7px]">
          <Button
            className="text-[15px] text-[#363F52] font-medium rounded-lg"
            style={{ border: "ipx solid rgba(205, 212, 223, 0.5)" }}
            disabled={loading}
            loading={loading && type == "morelikethis"}
            onClick={() => {
              morelikethisRef.current = true;
              setLoading(true);
              moreLikeAndThisButHandler();
            }}
          >
            More like this
          </Button>
          <Button
            className="text-[15px] text-[#363F52] font-medium rounded-lg"
            style={{ border: "ipx solid rgba(205, 212, 223, 0.5)" }}
            onClick={() => setThisBut(true)}
          >
            This but..
          </Button>
        </div>
      ) : (
        <div className="mt-[7px]">
          <Form form={form} onFinish={onFinish}>
            <Form.Item
              className="w-full mb-[10px]"
              name="whatElse"
              id="whatElse"
            >
              <TextArea
                autoSize={{ minRows: 3, maxRows: 3 }}
                placeholder="Enter what else needs to be added..."
                className="text-[12px] select-none"
                onChange={(e) => setText(e.target.value)}
                disabled={loading}
              />
            </Form.Item>
            <div className="flex justify-end w-full h-max ">
              <div className="flex gap-2">
                <RoundedButton
                  title={<span className="text-[#4A5366]">Cancel</span>}
                  className="w-max bg-[white] border-0 rounded-md text-[12px] "
                  htmlType="button"
                  disabled={loading}
                  onClick={() => {
                    setThisBut(false);
                  }}
                  xs
                />
                <RoundedButton
                  title={"Apply"}
                  disabled={loading || !text}
                  loading={loading && type == "thisbut"}
                  className="w-max  rounded-md text-[12px]  "
                  type="primary"
                  htmlType="submit"
                  xs
                />
              </div>
            </div>
          </Form>
        </div>
      )}
    </div>
  );
};
