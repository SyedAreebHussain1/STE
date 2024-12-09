import React, { useEffect, useState } from "react";
import {
  Col,
  DatePicker,
  Divider,
  Form,
  Input,
  Modal,
  Row,
  Select,
  Rate,
  Dropdown,
} from "antd";
import dayjs from "dayjs";
import { getTeamDetailApi } from "../../../redux/api/MeetOurTeam";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const TeamMemberStep = ({ id, form }) => {
  const dispatch = useDispatch();
  const params = useParams();
  const [selectedUser, setSelectedUser] = useState("");
  const { data, loading } = useSelector((state) => state?.getTeamDetail);
  useEffect(() => {
    if (params?.id) {
      getTeamDetailApi(dispatch, { page: 1, limit: 999 }, params?.id);
    }
  }, [dispatch, params?.id, id]);

  useEffect(() => {
    if (id) {
      form.setFieldValue("userId", id);
    }
  }, [id]);
  useEffect(() => {
    if (data && id) {
      const name = data?.data.items?.filter((item) => item?.id === id);
      if (name.length > 0) {
        setSelectedUser(name[0].profile?.fullName);
      }
    }
  }, [data, id]);

  const items = data?.data?.items?.filter(item => !item?.isDisabled)?.map((item, i) => {
      return {
        label: (
          <div
            className="flex gap-2 items-center"
            onClick={() => {
              form.setFieldValue("userId", item?.id);
              setSelectedUser(item?.profile?.fullName);
            }}
          >
            <div className="w-[40px] h-[40px] object-cover rounded-full overflow-hidden">
              <img
                src={
                  item?.profile?.profile_picture_url ||
                  "https://placehold.co/23x23"
                }
                alt=""
                className="w-[40px] h-[40px] object-cover"
              />
            </div>
            <div className="flex flex-col gap-1">
              <span style={{ marginTop: "10px" }}>
                {item?.profile?.fullName}
              </span>
              <span style={{ marginTop: "-5px" }}>
                {item?.role?.title === "agentOwner"
                  ? "Agency Owner"
                  : item?.role?.title === "agentManager"
                  ? "Agency Manager"
                  : "Agent"}
              </span>
              <Rate
                style={{ fontSize: "10px", marginTop: "-20px" }}
                value={
                  item?.agentReview?.length > 0
                    ? Math.round(
                        item?.agentReview
                          ?.map((item) => item.rateStar)
                          ?.reduce((prev, curr) => prev + curr) /
                          item?.agentReview?.length
                      )
                    : "0"
                }
                disabled={true}
              />
            </div>
          </div>
        ),
        key: i,
      };
  });
  return (
    <Row gutter={20}>
      <Col xs={24} sm={24} lg={24}>
        <div>
          <h2>Select Team Member</h2>

          <Dropdown
            menu={{
              items,
            }}
            trigger={["click"]}
            overlayClassName="max-h-[400px] overflow-auto"
          >
            <Input
              placeholder="Select Team Member"
              className="cursor-pointer"
              value={selectedUser}
              style={{ height: 51 }}
              classNames={"mt-[10px]"}
            />
          </Dropdown>
          <Form.Item
            name={"userId"}
            rules={[
              {
                required: true,
                message: "Team member is required",
              },
            ]}
          >
            <Select
              className="rounded-[8px] invisible"
              size="large"
              labelInValue // Add this line
              disabled
            >
              {data?.data?.items?.map((item, i) => (
                <Select.Option key={i} value={item?.id}>
                  <div className="flex gap-2 items-center">
                    <div className="w-[23px] h-[23px] object-cover rounded-full overflow-hidden">
                      <img
                        src={
                          item?.profile?.profile_picture_url ||
                          "https://placehold.co/23x23"
                        }
                        alt=""
                        className="w-[23px] h-[23px] object-cover"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span>{item?.profile?.fullName}</span>
                      <Rate
                        style={{ fontSize: "10px" }}
                        value={
                          item?.agentReview?.length > 0
                            ? Math.round(
                                item?.agentReview
                                  ?.map((item) => item.rateStar)
                                  ?.reduce((prev, curr) => prev + curr) /
                                  item?.agentReview?.length
                              )
                            : "0"
                        }
                        disabled={true}
                      />
                    </div>
                  </div>
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            name={"step-1"}
            rules={[
              {
                required: true,
                message: "required",
              },
            ]}
            initialValue={"step-1"}
          >
            <Input type="hidden" />
          </Form.Item>
        </div>
      </Col>
    </Row>
  );
};

export default TeamMemberStep;
