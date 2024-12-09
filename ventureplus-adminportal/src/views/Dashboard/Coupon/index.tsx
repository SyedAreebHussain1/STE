import React, { useState } from "react";
import { PageContainer } from "../../../utils/helpers/PageContainer/PageContainer";
import { PageHeader } from "../../../utils/helpers/PageHeader/PageHeader";
import { Button } from "antd";
import CouponModal from "./helpers/CouponModal";
import CouponTable from "./helpers/CouponTable";

const CreateCoupon = () => {
  const [modal, setModal] = useState<boolean>(false);
  return (
    <React.Fragment>
      {modal && <CouponModal open={modal} close={setModal} />}
      <PageContainer>
        <PageHeader
          title="Coupon"
          subTitle="Manage all your Coupon"
          extra={
            <div className="flex gap-3">
              <Button onClick={() => setModal(true)}>Add new Coupon</Button>
            </div>
          }
        />
        <CouponTable />
      </PageContainer>
    </React.Fragment>
  );
};

export default CreateCoupon;
