import React, { useEffect } from "react";
import Container from "../../../../components/Container";
import Slider from "../../../../components/Slider/Slider";
import SliderItem from "../../../../components/Slider/SliderItem";
import ListingsCard from "../../../../components/Listings/ListingsCard";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getInventoriesDetailsApi } from "../../../../redux/api/Inventories";
import { nanoid } from "nanoid";

const SimilarListingsSection = () => {
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
    <div className="mb-14">
      <Container>
        <div className="">
          <h3 className="text-[#191F2B] text-2xl font-semibold mb-4">
            Similar Listings
          </h3>
        </div>
      </Container>
      <Slider gap={47}>
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
    </div>
  );
};

export default SimilarListingsSection;
