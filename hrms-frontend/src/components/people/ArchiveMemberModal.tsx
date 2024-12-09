import React from "react";
import { Button, Modal, Col, Row } from "antd";
import circlenotsignicon from "../../assets/circlenotsignicon.svg";

type DeleteFaceDataModalProps = {
  modalOpen?: boolean;
  setModalOpen?: any;
};

const ArchiveMemberModal: React.FC<DeleteFaceDataModalProps> = ({
  modalOpen,
  setModalOpen,
}: DeleteFaceDataModalProps) => {
  const title = (
    <>
      <h3 className="text-[30px] text-[#000000de] font-semibold">
        Archive Aman khan
      </h3>
      <p className="text-[#00000099] font-normal text-[.875rem] leading-10">
        Are you sure you want to archive the member?
      </p>
    </>
  );

  return (
    <div className="people-delete">
      <Modal
        title={title}
        centered
        footer={null}
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
      >
        <div className="bg-[#f6f8fb]">
          <div className="p-[15px]">
            <Row gutter={16}>
              <Col md={24} sm={24} lg={12}>
                <div className="flex mt-[20px] items-center gap-[5px] ">
                  <div>
                    <img src={circlenotsignicon} className=" w-[30px]" alt="" />
                  </div>
                  <div>
                    <p className="text-[.8125rem] font-medium text-[#424b63]">
                      No Access
                    </p>
                    <p className="text-[.8125rem] font-medium text-[#00000099]">
                      User will no longer be able to access or use Jibble.
                    </p>
                  </div>
                </div>
              </Col>
              <Col md={24} sm={24} lg={12}>
                <div className="flex mt-[20px] items-center gap-[5px]">
                  <div>
                    <img src={circlenotsignicon} className=" w-[30px]" alt="" />
                  </div>
                  <div>
                    <p className="text-[.8125rem] font-medium text-[#424b63]">
                      Saved Data
                    </p>
                    <p className="text-[.8125rem] font-medium text-[#00000099]">
                      User will no longer be able to access or use Jibble.
                    </p>
                  </div>
                </div>
              </Col>
              <Col md={24} sm={24} lg={12}>
                <div className="flex mt-[20px] items-center gap-[5px]">
                  <div>
                    <img src={circlenotsignicon} className=" w-[30px]" alt="" />
                  </div>
                  <div>
                    <p className="text-[.8125rem] font-medium text-[#424b63]">
                      Restorable
                    </p>
                    <p className="text-[.8125rem] font-medium text-[#00000099]">
                      User will no longer be able to access or use Jibble.
                    </p>
                  </div>
                </div>
              </Col>
              <Col md={24} sm={24} lg={12}>
                <div className="flex mt-[20px] items-center gap-[5px]">
                  <div>
                    <img src={circlenotsignicon} className=" w-[30px]" alt="" />
                  </div>
                  <div>
                    <p className="text-[.8125rem] font-medium text-[#424b63]">
                      Clock-out while Archived
                    </p>
                    <p className="text-[.8125rem] font-medium text-[#00000099]">
                      User will no longer be able to access or use Jibble.
                    </p>
                  </div>
                </div>
              </Col>
              <Col md={24} sm={24} lg={12}>
                <div className="flex mt-[20px] items-center gap-[5px]">
                  <div>
                    <img src={circlenotsignicon} className=" w-[30px]" alt="" />
                  </div>
                  <div>
                    <p className="text-[.8125rem] font-medium text-[#424b63]">
                      Time off
                    </p>
                    <p className="text-[.8125rem] font-medium text-[#00000099]">
                      User will no longer be able to access or use Jibble.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="flex justify-end mt-[30px] gap-3">
          <Button
            className="h-[40px] font-normal"
            onClick={() => setModalOpen(false)}
          >
            Cancel
          </Button>
          <Button
            className="bg-[#c41446] text-[#fff] border-none h-[40px] font-normal"
            onClick={() => setModalOpen(false)}
            type="primary"
          >
            Conform
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default ArchiveMemberModal;
