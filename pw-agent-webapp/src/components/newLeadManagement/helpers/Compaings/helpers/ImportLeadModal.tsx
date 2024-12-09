import { useRef, useState } from "react";
import { Button, Col, Form, Modal, Row } from "antd";
import { useForm } from "antd/es/form/Form";
import { useDispatch } from "react-redux";
import TextInput from "../../../../../helpers/inputs/TextInput";
import excelIcon from "../../../../../assets/excelIcon.png";
import uploadIcon from "../../../../../assets/uploadLogo.png";
import deleteIcon from "../../../../../assets/delete.png";
import excelFileIcon from "../../../../../assets/excelFileIcon.png";
import {
  errorMessage,
  infoMessage,
  successMessage,
} from "../../../../../utils/message";
import { getAllLeadByCampaignIdApi, uploadExcelForExistingCampaignApi } from "../../../../../redux/api/Campaigns";
import { getLeadsByCampaignIdApi } from "../../../../../redux/api/TaskOverview";
import excelImg from "../../../../../assets/excelFormatImg.png"

type Props = {
  open: boolean;
  close: () => void;
  setBgBlurBox: any;
  campaignId: any;
};

const ImportLeadModal = ({ open, close, setBgBlurBox, campaignId }: Props) => {
  const [upload, setUpload] = useState(false);
  const [fileData, setFileData] = useState({});
  const [file, setFile] = useState({
    name: "",
    bytes: "",
  });
  const [form] = useForm();
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const onFinish = (formData: any) => {
    setBgBlurBox(false);
  };

  const uploadHandler = () => {
    inputRef?.current?.click();
  };
  const changeHandler = (e: any) => {
    const { files } = e.target;
    const fileName = files[0]?.name;
    const size = files[0]?.size;

    if (!fileName.includes(".xlsx")) {
      infoMessage("File Not Support");
      if (inputRef.current) {
        inputRef.current.value = "";
      }
      return;
    }

    setFile({ name: fileName, bytes: size });
    setUpload(!upload);
    setFileData(files[0]);
  };

  const onSuccess = () => {
    successMessage("File Upload Success");
    if (inputRef.current) {
      inputRef.current.value = "";
      close();
    }

    getAllLeadByCampaignIdApi(dispatch,{page: 1, limit: 10}, campaignId, "Descending" );
  };

  const fetchLeads = () => {
    if (!file.name) {
      errorMessage("Please attach the required document");
      return;
    }

    uploadExcelForExistingCampaignApi(
      { Excel: fileData, campaignId },
      dispatch,
      onSuccess
    );
  };

  return (
    <Modal
      title={
        <span className="text-[#475467] text-[1rem] font-medium">
          Upload File
        </span>
      }
      centered
      width={561}
      open={open}
      onCancel={close}
      footer={false}
    >
      <Form
        onFinish={onFinish}
        autoComplete="off"
        form={form}
        encType="multipart/form-data"
      >
        <Row gutter={16} className="py-1">
          <Col sm={24}>
            <div className="min-h-[156px] rounded-[5px] p-[20px] bg-[#F2F4F7]">
              <div className="flex justify-between gap-1">
                <div>
                  <img src={excelIcon} alt="" />
                </div>
                <div>
                  <h1 className="text-[#344054] text-[1rem] font-medium">
                    Upload file of your leads
                  </h1>
                  <p className="text-[#667085] font-medium text-[.8125rem]">
                    please ensure that the uploaded file is in CSV format and
                    does not exceed 2MB in size.
                  </p>
                  <h1 className="text-[#344054] text-[1rem] font-medium mt-3">Sample Data:</h1>
                  <img src={excelImg} alt="excelFormat" className="object-cover"/>

                  <div className="mt-3">
                    <Button
                      onClick={uploadHandler}
                      className=" gap-[8px] w-[146px] h-[48px] border rounded-lg flex justify-center items-center cursor-pointer"
                    >
                      <input
                        type="file"
                        ref={inputRef}
                        onChange={changeHandler}
                        className="hidden w-0"
                      ></input>
                      <span className="text-[#475467] text-[1rem] font-semibold">
                        Upload File
                      </span>
                    </Button>
                  
                  </div>
                  
                  {upload && (
                    <div className="flex justify-between">
                      <div className="w-full">
                        <div className="bg-[rgb(255,255,255)] p-2 flex rounded-[5px] justify-between items-center mt-5">
                          <div className="flex items-center gap-1">
                            <div>
                              <img src={excelFileIcon} alt="" />
                            </div>
                            <div>
                              <p className="font-medium text-[.8125rem] text-[#344054] cursor-pointer flex items-center gap-1">
                                {file.name}
                              </p>
                              <p className="text-[#98A2B3] text-[.75rem] font-medium">
                                {file.bytes} bytes
                              </p>
                            </div>
                          </div>
                          <div>
                            <button onClick={() => setUpload(!upload)}>
                              <img src={deleteIcon} alt="" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <div className="flex justify-end w-[100%] mt-10">
          <Button
            htmlType="button"
            type="primary"
            onClick={() => fetchLeads()}
            className="bg-primary text-[#fff] h-[45px] border-none  py-[10px] px-[20px]  text-[1rem] font-semibold"
          >
            Fetch Leads
          </Button>
        </div>
      </Form>
    </Modal>
  );
};
export default ImportLeadModal;
