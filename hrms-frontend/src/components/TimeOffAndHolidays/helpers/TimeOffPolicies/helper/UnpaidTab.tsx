import { useState } from "react";
import { Col, Row, Form, Checkbox, Tooltip } from "antd";
import circlenotsignIcon from "../../../../../assets/circlenotsignicon.svg";
const UnpaidTab = () => {
  const [, setCheckLeave] = useState<boolean>(false);
  return (
    <div className="mt-4">
      <Row gutter={16}>
        {/* <Col lg={24} sm={24} md={24}>
          <Form.Item
            name="excludePublicHolidays"
            valuePropName="checked"
            className="mb-0"
          >
            <Checkbox value="excludePublicHolidays  ">
              <span className="flex dark:text-dark-borderColor">
                Exclude public holidays&nbsp;
                <Tooltip
                  placement="bottomRight"
                  color="rgb(66,75,99)"
                  title={
                    <div className="p-[10px]">
                      <p className="text-[rgb(255,255,255)] font-normal text-[.75rem]">
                        Time off balance will not be deducted if the applied
                        time off intersects with a public holiday based on
                        members' assigned calendar.
                      </p>
                    </div>
                  }
                >
                  <img src={circlenotsignIcon} alt="" />
                </Tooltip>
              </span>
            </Checkbox>
          </Form.Item>
        </Col> */}
        {/* <Col lg={24} sm={24} md={24}>
          <Form.Item name="excludeNonWorkingDays" valuePropName="checked">
            <Checkbox value="excludeNonWorkingDays">
              <span className="flex dark:text-dark-borderColor">
                Exclude non working days&nbsp;
                <Tooltip
                  placement="bottomRight"
                  color="rgb(66,75,99)"
                  title={
                    <div className="p-[10px]">
                      <p className="text-[rgb(255,255,255)] font-normal text-[.75rem]">
                        When enabled, time off balance will not be deducted if
                        the applied time off intersects with a rest day based on
                        members' assigned work schedule.
                      </p>
                    </div>
                  }
                >
                  <img src={circlenotsignIcon} alt="" />
                </Tooltip>
              </span>
            </Checkbox>
          </Form.Item>
        </Col> */}
        {/* <Col lg={24} sm={24} md={24}>
          <h3 className="text-[rgb(0,0,0)] text-[.875rem] font-bold flex  dark-input-label">
            BALANCE RULES&nbsp;
            <Tooltip
              placement="bottomRight"
              color="rgb(66,75,99)"
              title={
                <div className="p-[10px]">
                  <p className="text-[rgb(255,255,255)] font-normal text-[.75rem]">
                    Choose if the time off balance will be carried to the next
                    year or past the Accrual End Date.
                  </p>
                </div>
              }
            >
              <img src={circlenotsignIcon} alt="" />
            </Tooltip>
          </h3>
        </Col> */}
        {/* <Col lg={24} sm={24} md={24}>
          <Form.Item name="leave" valuePropName="checked">
            <Checkbox
              value="leave"
              onChange={(e) => setCheckLeave(e.target.checked)}
            >
              <span className="flex dark-input-label dark:text-dark-borderColor">
                Leave balances can be carried forward to the next cycle.&nbsp;
              </span>
            </Checkbox>
          </Form.Item>
        </Col> */}
      </Row>
    </div>
  );
};
export default UnpaidTab;
