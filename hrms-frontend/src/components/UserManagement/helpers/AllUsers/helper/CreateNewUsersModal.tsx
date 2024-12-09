import React from "react";
import { Button, Col, Divider, Modal, Row, Select } from "antd";
import TextInput from "../../../../../helpers/inputs/TextInput";

type ArchiveModalProps = {
  open?: boolean;
  setOpen?: any;
};

const CreateNewUsersModal: React.FC<ArchiveModalProps> = ({
  open,
  setOpen,
}: ArchiveModalProps) => {
  const title = (
    <h3 className="!text-[1.17rem] dark:text-white text-[#1D2939] !font-semibold ">
      Add New User
    </h3>
  );

  return (
    <div className="people-delete">
      <Modal
        title={title}
        centered
        open={open}
        width={739}
        footer={null}
        onCancel={() => setOpen(false)}
      >
        <Divider />
        <Row gutter={16}>
          <Col lg={12} sm={24} xs={24} md={24}>
            <span className="text-[#667085] font-medium text-[.975rem]  ">
              Name
            </span>
            <TextInput className="h-[48px] rounded-md" />
          </Col>
          <Col lg={12} sm={24} xs={24} md={24}>
            <span className="text-[#667085] font-medium text-[.975rem]  ">
              Email
            </span>

            <TextInput className="h-[48px] rounded-md" />
          </Col>
          <Col lg={12} sm={24} xs={24} md={24}>
            <span className="text-[#667085] font-medium text-[.975rem]  ">
              Phone No
            </span>

            <TextInput className="h-[48px] rounded-md" />
          </Col>
          <Col lg={12} sm={24} xs={24} md={24}>
            <span className="text-[#667085] font-medium text-[.975rem]  ">
              User ID
            </span>

            <TextInput className="h-[48px] rounded-md" />
          </Col>
          <Col lg={12} sm={24} xs={24} md={24}>
            <span className="text-[#667085] font-medium text-[.975rem]  ">
              Designation
            </span>
            <TextInput className="h-[48px] rounded-md" />
          </Col>
          <Col lg={12} sm={24} xs={24} md={24}>
            <span className="text-[#667085] font-medium text-[.975rem]  ">
              Assign Role
            </span>
            <Select
              placeholder="Assign Role"
              className="h-[48px] w-full rounded-md "
            >
              <Select.Option value="designTeam">Design Team</Select.Option>
            </Select>
          </Col>
        </Row>
        <div className="flex justify-end mt-[30px] gap-3">
          <Button
            className="text-[#344054] text-[1.17rem] h-[47px] font-semibold rounded-full"
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>
          <Button
            className="dark:bg-dark-primary bg-light-primary text-[1.17rem] text-[#F9FAFB] border-none h-[47px] font-semibold rounded-full"
            onClick={() => setOpen(false)}
            type="primary"
          >
            Add User
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default CreateNewUsersModal;
