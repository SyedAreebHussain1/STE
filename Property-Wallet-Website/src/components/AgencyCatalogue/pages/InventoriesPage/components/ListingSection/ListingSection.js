import React, { useEffect } from "react";
import Slider from "../../../../components/Slider/Slider";
import SliderItem from "../../../../components/Slider/SliderItem";
import ListingsCard from "../../../../components/Listings/ListingsCard";
import Container from "../../../../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getInventoriesDetailsApi } from "../../../../redux/api/Inventories";
import { useParams } from "react-router-dom";
import { Empty } from "antd";
import { nanoid } from "nanoid";

const NoData = () => {
  return <Empty description={false} />;
};

const ListingSection = ({ primaryColor }) => {
  const dispatch = useDispatch();
  const params = useParams();
  const pageLimit = {
    page: 1,
    limit: 20,
  };
  const getlisting = useSelector((state) => state?.getInventoriesDetail);

  useEffect(() => {
    getInventoriesDetailsApi(dispatch, pageLimit, params?.id);
  }, []);
  return (
    <div className="mt-[6.938rem]">
      <Container>
        <div className="flex flex-col gap-3 md:flex-row justify-between items-center  mb-[3rem]">
          <h1 className="text-[#344054] text-3xl md:text-[2.5rem] font-semibold">
            Listings
          </h1>
        </div>
      </Container>
      <Slider gap={47} totalItems={getlisting?.data?.data?.items?.length || 0}>
        {getlisting?.data?.data?.items?.map((item) => {
          return (
            <SliderItem width={400} key={nanoid()}>
              <ListingsCard
                image={item?.inventory?.project?.projectPhotos?.[0]?.photo}
                price={`PKR ${item?.inventory?.price}`}
                title={item?.inventory?.project?.projectName}
                location={item?.inventory?.project?.address}
                size={`${item?.inventory?.landSize} ${item?.inventory?.landArea?.title}`}
                id={item?.inventory?.id}
                listingType={item?.listingType}
                inVentoryType={item?.inventory?.inVentoryType}
              />
            </SliderItem>
          );
        })}
      </Slider>
      {!getlisting?.data?.data?.items?.length ? <NoData /> : ""}
    </div>
  );
};

export default ListingSection;
