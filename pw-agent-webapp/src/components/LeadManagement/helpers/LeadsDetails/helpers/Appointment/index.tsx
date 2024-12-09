import { Col, Row } from "antd";
import Availabliity from "./helpers/Availabliity";
import { PageContainer } from "../../../../../../helpers/PageContainer/PageContainer";
import { PageHeader } from "../../../../../../helpers/PageHeader/PageHeader";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate, } from "react-router-dom";
import AvailabliityList from "./helpers/AvailabliityList";
import { useState } from "react";

const Appointment = () => {
  const navigate = useNavigate();
  const [selectDate, setSelectDate] = useState<string>("");
  const [selectDateForCreate, setSelectDateForCreate] = useState<string>("");
  const [history, setHistory] = useState<boolean>(false)

  return (
    <div>
      <PageContainer>
        <PageHeader
          title={
            <>
              <div
                className="text-[1rem] flex gap-1 items-center font-semibold text-[#27A3A3] cursor-pointer "
                onClick={history ? () => setHistory(false) : () => navigate(-1)}
              >
                <span>
                  <IoIosArrowBack />
                </span>
                Back to Home
              </div>
            </>
          }
          subTitle={`WebEstate / Agent Calendar ${history ? "/ History" : ""}`}
        />
        <Row gutter={16}>
          {!history && <Col xl={6} sm={24} lg={6} md={6}>
            <Availabliity
              setSelectDate={setSelectDate}
              selectDate={selectDate}
              setSelectDateForCreate={setSelectDateForCreate}
              setHistory={setHistory}
            />
          </Col>
          }
          <Col xl={history ? 24 : 18} sm={history ? 24 : 24} lg={history ? 24 : 18} md={history ? 24 : 18}>
            <AvailabliityList selectDate={selectDate} selectDateForCreate={selectDateForCreate} />
          </Col>
        </Row>
      </PageContainer>
    </div>
  );
};

export default Appointment;
