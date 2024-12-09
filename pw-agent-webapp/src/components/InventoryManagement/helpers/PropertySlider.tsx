import { useEffect, useState } from "react";
import Slider from "../../../helpers/Slider/Slider";
import SliderItem from "../../../helpers/Slider/SliderItems";
import PropertyCard from "../../PropertyCard";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPropertiesApi } from "../../../redux/api/InventoryManagement";

const PropertySlider = () => {
  const [pageLimit] = useState({ page: 1, limit: 10 });

  const getPropertiesInventory = useSelector(
    (state: any) => state.getPropertiesInventory
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    getPropertiesApi(dispatch, pageLimit);
  }, []);

  return (
    <div className="bg-white mt-3 rounded-xl p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-subHeadingColor font-medium text-[1.2rem]">
          All Properties
        </h2>
        <button
          className="text-[1.2rem] text-primary font-medium"
          onClick={() => navigate("/inventory-management/properties")}
        >
          View All
        </button>
      </div>
      <div className="mt-[20px]">
        {getPropertiesInventory?.data?.items?.length > 0 && (
          <Slider gap={30} totalItems={5}>
            {getPropertiesInventory?.data?.items?.map((item: any, i: any) => (
              <SliderItem width={377} key={i}>
                <PropertyCard
                  id={item?.inventory?.[0]?.id}
                  img={item?.projectPhotos?.[0]?.photo}
                  address={`${
                    item?.address.length > 40
                      ? `${item?.address.substring(0, 32)}.....`
                      : item?.address
                  }`}
                  areaSize={item?.inventory?.[0]?.landSize}
                  areaTitle={item?.inventory?.[0]?.landArea?.title}
                  commission={item?.inventory?.[0]?.cashDealCommissionAmount}
                  price={`PKR ${item?.inventory?.[0]?.price}`}
                  bed={item?.inventory?.[0]?.bedRooms}
                  baths={item?.inventory?.[0]?.washRooms}
                />
              </SliderItem>
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
};

export default PropertySlider;
