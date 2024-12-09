import React, { useEffect } from "react";
import Slider from "../../../../components/Slider/Slider";
import SliderItem from "../../../../components/Slider/SliderItem";
import ListingsCard from "../../../../components/Listings/ListingsCard";
import Container from "../../../../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getAllPWProjectListApi } from "../../../../redux/api/Inventories";
import { Empty } from "antd";
import { nanoid } from "nanoid";
import inventoryimg from "../../../../assets/images/inventoryimg.png";

const NoData = () => {
  return <Empty description={false} />;
};

const PwInventories = ({ primaryColor }) => {
  const dispatch = useDispatch();
  const pageLimit = {
    page: 1,
    limit: 20,
  };
  const getlisting = useSelector((state) => state?.getInventoriesDetail);

  useEffect(() => {
    getAllPWProjectListApi(dispatch, pageLimit);
  }, []);
  return (
    <div className="mt-[6.938rem] mb-[6.938rem]">
      <Container>
        <div className="flex flex-col gap-3 md:flex-row justify-between items-center  mb-[3rem]">
          <div className="flex items-center">
            <div className="mt-1 hidden md:block">
              <img src={inventoryimg} className="w-[60px]" alt="" />
            </div>
            <div>
              <h1 className="text-[#344054] text-3xl md:text-[2.5rem] font-semibold">
                Property Wallet Exclusive Inventories
              </h1>
            </div>
          </div>
        </div>
      </Container>
      <Slider
        gap={47}
        totalItems={getlisting?.allPWProjectList?.data?.items?.length || 0}
      >
        {getlisting?.allPWProjectList?.data &&
          getlisting?.allPWProjectList?.data?.items?.map((item) => {
            return (
              <SliderItem width={400} key={nanoid()}>
                <ListingsCard
                  image={item?.propertyWalletProjectPhoto?.[0]?.photo}
                  price={`PKR ${item?.priceRange?.minimum}-${item?.priceRange?.maximum}`}
                  title={item?.projectName}
                  location={item?.address}
                  id={item?.id}
                  type="pwInventory"
                />
              </SliderItem>
            );
          })}
      </Slider>{" "}
      {!getlisting?.allPWProjectList?.data?.items?.length ? <NoData /> : ""}
    </div>
  );
};

export default PwInventories;
