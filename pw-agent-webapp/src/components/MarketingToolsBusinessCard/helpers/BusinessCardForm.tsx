import { Button, Col, Form, Row } from "antd";
import { MdClose } from "react-icons/md";
import Upload from "../../../helpers/Upload/Upload";
import TextInput from "../../../helpers/inputs/TextInput";
import { errorMessage } from "../../../utils/message";
const PreviewCardForm = ({
  form,
  imageOrFile,
  setImageOrFile,
  masterPlanImages,
  setMasterPlanImages,
  filesCountMasterPlan,
  masterPlanImagesPreviews,
  handlePrint,
}: any) => {

  function onFinish(value: any) {
    if (!masterPlanImagesPreviews?.[0]?.url) {
      errorMessage("Please provide agency logo");
      return;
    }
    const { agentName, agencyName, number, email, agencyAddress } = value;
    if (!agentName || !agencyName || !number || !email || !agencyAddress) {
      errorMessage("Please provide all the required fields");
    }
  }
  return (
    <div>
      <Form
        onFinish={onFinish}
        name="businessCard"
        form={form}
        autoComplete="off"
        initialValues={{ remember: true }}
      >
        <Row gutter={16}>
          <Col sm={24} xs={24} lg={16} md={14}>
            <Row gutter={16}>
              <Col sm={24} xs={24} lg={24} md={24}>
                <Row gutter={24}>
                  <Col lg={24} xs={24} md={24} className="mb-4">
                    <span className="text-[#292D35] font-medium text-base mb-1">
                      Upload Agency Logo
                    </span>
                    <Upload
                      name="masterPlanImages"
                      files={masterPlanImages}
                      setFiles={setMasterPlanImages}
                      supportedFileTypes={["png", "jpg", "jpeg"]}
                      supportedText={"Files Supported  JPG,JPEG,PNG"}
                      fileName="INVENTORYIMAGES"
                      fileUploadLimit={1}
                      filesCount={filesCountMasterPlan}
                    />
                  </Col>

                  <Col lg={24} xs={24} md={24}>
                    {imageOrFile?.masterPlan && (
                      <Col xs={16} lg={6} className=" h-[100px] ">
                        <div className="relative inline-block h-full w-full">
                          <img
                            src={imageOrFile?.masterPlan}
                            className="w-full h-full"
                            alt="Your Image"
                          />
                          <button
                            className="absolute top-0 right-0 mt-[2px] mr-[2px] pt-[1px] text-[black] bg-[white]  border-none rounded-full cursor-pointer"
                            onClick={(e: any) => {
                              e.preventDefault();
                              setImageOrFile((pre: any) => ({
                                ...pre,
                                masterPlan: "",
                              }));
                            }}
                          >
                            <MdClose size={16} />
                          </button>
                        </div>
                      </Col>
                    )}
                  </Col>
                </Row>
                <Col>
                  <span className="text-[#292D35] font-medium text-base">
                    Agent Name
                  </span>
                  <TextInput
                    className="h-[44px] "
                    placeholder="Agent Name"
                    rules={[
                      {
                        required: true,
                        message: "Please input your agent name",
                      },
                    ]}
                    name="agentName"
                  />
                </Col>
                <Col>
                  <span className="text-[#292D35] font-medium text-base">
                    Agency Name
                  </span>
                  <TextInput
                    className="h-[44px] "
                    placeholder="Agency Name"
                    rules={[
                      {
                        required: true,
                        message: "Please input your agency name",
                      },
                    ]}
                    name="agencyName"
                  />
                </Col>
                <Col>
                  <span className="text-[#292D35] font-medium text-base">
                    Number
                  </span>
                  <TextInput
                    className="h-[44px] "
                    placeholder="Number"
                    rules={[
                      {
                        required: true,
                        message: "Please input valid number",
                      },
                    ]}
                    name="number"
                    isNumber
                  />
                </Col>
                <Col>
                  <span className="text-[#292D35] font-medium text-base">
                    Email
                  </span>
                  <TextInput
                    className="h-[44px] "
                    placeholder="Email"
                    rules={[
                      {
                        required: true,
                        type: "email",
                        message: "Please input valid email",
                      },
                    ]}
                    name="email"
                  />
                </Col>
                <Col>
                  <span className="text-[#292D35] font-medium text-base">
                    Agency Address
                  </span>
                  <TextInput
                    className="h-[44px] "
                    placeholder="Agency Address"
                    rules={[
                      {
                        required: true,
                        message: "Please input your agency address",
                      },
                    ]}
                    name="agencyAddress"
                  />
                </Col>
                <Col>
                  <Button
                    type="primary"
                    htmlType="button"
                    onClick={handlePrint}
                    className="bg-primary text-[#fff] border-none h-[48px]  text-[1rem] font-semibold"
                  >
                    Save as Pdf
                  </Button>
                </Col>
              </Col>
            </Row>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default PreviewCardForm;
