import { Button, Col, Row } from "antd";
import newAddIcon from "../../../../../assets/earn.png";
import noPipelineImg from "../../../../../assets/pipelineCreate.png";
import useToggle from "../../../../../hooks/useToggle";
import CreatePipelineModal from "./CreatePipelineModal";
import { BsEye } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import RoundedButton from "../../../../../helpers/button/RoundedButton";
type LeadsCardProps = {
  items: any;
  setActive: any;
  selectCampaign: any;
};
const LeadsCard = ({ items, setActive, selectCampaign }: LeadsCardProps) => {
  const [createPipeline, toggleCreatePipeline] = useToggle();
  const navigate = useNavigate();
  return (
    <>
      {createPipeline && (
        <CreatePipelineModal
          open={createPipeline}
          close={toggleCreatePipeline}
        />
      )}
      <Row gutter={16} className="mt-6">
        {items.map((item: any, i: any) => {
          return (
            <Col xs={8} lg={12} sm={24} md={24} xl={8} key={i}>
              <div className="bg-[rgb(249,250,251)] dark:bg-dark-grayprimary !h-auto md:h-[133px] mt-1 rounded-[10px] p-[20px] border overflow-hidden">
                <h4 className="text-[#667085] dark:text-[#D0D5DD] text-[1rem] font-medium">
                  {item.lead}
                </h4>
                <p className="text-[#104141] dark:text-white text-[1.44rem] font-medium mt-3 ">
                  {item.count}
                </p>
                <div className="mt-2"></div>
              </div>
            </Col>
          );
        })}
        <Col xs={8} lg={12} sm={24} md={24} xl={8}>
          <div className="bg-[#F4F3FF] dark:bg-dark-primary mt-1 h-[120px] rounded-[10px] overflow-hidden">
            <div className="flex justify-between overflow-hidden gap-2">
              <div className="pl-[20px] py-[20px] flex-1 md:pr-[20px] pr-0">
                <h3 className="text-[1rem] text-[#344054] dark:text-[#D0D5DD]  font-medium">
                  Pipeline Board
                </h3>
                <p className="text-xs font-medium text-[#667085] dark:text-white tracking-tight text-ellipsis">
                  Nurture your leads.
                </p>
                <div className="mt-2">
                  <RoundedButton
                    disabled={!selectCampaign}
                    onClick={() =>
                      navigate(`/sales-plus/pipline/${selectCampaign?.id}`, {
                        state: selectCampaign,
                      })
                    }
                    title={
                      <div className="flex items-center gap-1 text-xs w-auto  ">
                        <BsEye />
                        <span className=" text-xs font-semibold">
                          View Campaign Pipeline
                        </span>
                      </div>
                    }
                    className="dark:bg-white dark:text-dark-primary  bg-light-primary text-white"
                    sm
                  />
                </div>
              </div>
              <div className="pt-2">
                <img
                  src={noPipelineImg}
                  alt=""
                  className="h-full object-cover"
                />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default LeadsCard;
