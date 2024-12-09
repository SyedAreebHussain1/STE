import { useState } from "react";
import { PageContainer } from "../../helpers/PageContainer/PageContainer";
import { PageHeaderForWallet } from "./helpers/PageHeaderForWallet";
import TransactionHistoryTable from "./helpers/TransactionHistoryTable";
import { Button, Col, Row, Tabs } from "antd";
import WithdrawRequestsTable from "./helpers/WithdrawRequestsTable";
import { PageHeader } from "../../helpers/PageHeader/PageHeader";
import AddAmountModal from "./helpers/AddAmountModal";
import useToggle from "../../hooks/useToggle";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Overview from "./helpers/Overview";
const Wallet = () => {
  const [addAmountModal, toggleAddAmountModal] = useToggle();
  const [hasWindowClosed, setHasWindowClosed] = useState(false);
  const [currentTab, setCurrentTab] = useState<string>("1");
  const navigate = useNavigate();
  const handleDemoButtonClick = () => {
    setCurrentTab("3");
  };
  const items = [
    {
      key: "1",
      label: "Overview",
      children: (
        <Overview
          handleDemoButtonClick={handleDemoButtonClick}
          currentTab={currentTab}
          toggleHasWindowClosed={toggleHasWindowClosed}
          hasWindowClosed={hasWindowClosed}
        />
      ),
    },
    {
      key: "2",
      label: "Withdraw Requests",
      children: <WithdrawRequestsTable currentTab={currentTab} />,
    },

    {
      key: "3",
      label: "Transaction History",
      children: <TransactionHistoryTable currentTab={currentTab} />,
    },
  ];
  function toggleHasWindowClosed(value: boolean) {
    if (value === false) {
      toggleAddAmountModal();
    }
    setHasWindowClosed(value);
  }

  return (
    <PageContainer>
      {addAmountModal && (
        <AddAmountModal
          open={addAmountModal}
          close={toggleAddAmountModal}
          toggleHasWindowClosed={toggleHasWindowClosed}
        />
      )}
      <PageHeader
        title={
          <>
            <div
              className="text-[1rem] flex gap-1 items-center font-semibold text-[#27A3A3] cursor-pointer "
              onClick={() => navigate(-1)}
            >
              <span>
                <IoIosArrowBack />
              </span>
              Back to Home
            </div>
          </>
        }
        subTitle={`Wallet`}
      />
      <Row gutter={16}>
        <Col sm={24} lg={24} md={24} xl={24}>
          <div className="mt-2 bg-[#FFFFFF] p-[15px] rounded-xl mr-2  ">
            <Tabs
              defaultActiveKey="1"
              activeKey={currentTab}
              onChange={(e) => setCurrentTab(e)}
              items={items}
            />
          </div>
        </Col>
      </Row>
    </PageContainer>
  );
};

export default Wallet;
