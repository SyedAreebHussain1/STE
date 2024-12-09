import React, { useEffect, useRef, useState } from "react";
import Slider from "../../../../components/Slider/Slider";
import SliderItem from "../../../../components/Slider/SliderItem";
import ListingsCard from "../../../../components/Listings/ListingsCard";
import Button from "../../../../components/Buttons/Button";
import Container from "../../../../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getInventoriesDetailsApi } from "../../../../redux/api/Inventories";
import { useParams } from "react-router-dom";

const FeaturedListingSection = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const pageLimit = {
    page: 1,
    limit: 5,
  };
  const getlisting = useSelector((state) => state?.getInventoriesDetail);

  useEffect(() => {
    getInventoriesDetailsApi(dispatch, pageLimit, params?.id);
  }, []);
  return (
    <div className="mt-[11.938rem]">
      <Container>
        <div className="flex justify-between items-center  mb-[3rem]">
          <h1 className="text-[#344054] text-[2.5rem] font-semibold">
            Featured Listings
          </h1>
          <Button variant={"outlined"} label="View All Inventories" />
        </div>
      </Container>
      <Slider gap={47}>
        {getlisting?.data?.data?.items?.map((item) => {
          return (
            <SliderItem width={400}>
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
    </div>
  );
};

export default FeaturedListingSection;
