import { useEffect, useState } from "react";
import BookedSlotImage from "../../../assets/BookedSlots.png";
import BookedSlotsCards from "./BookedSlotsCards";
import Slider from "../../../helpers/Slider/Slider";
import SliderItem from "../../../helpers/Slider/SliderItems";
import { getBookingSlotsApi } from "../../../redux/api/StaffManagement";
import { useDispatch, useSelector } from "react-redux";

const BookedSlots = ({ data }: { data: any }) => {
  const [pageLimit, setPageLimit] = useState({ page: 1, limit: 10 });
  const getBookingSlots = useSelector((state: any) => state.getBookingSlots);
  const dispatch = useDispatch();
  useEffect(() => {
    getBookingSlotsApi(data.id, dispatch, pageLimit);
  }, []);
  return (
    <div
      className={` justify-between bg-[#FFFFFF] items-center p-[20px] rounded-xl `}
    >
      <div className="flex items-center gap-1">
        <img src={BookedSlotImage} className="w-[25px] h-[25px]" />
        <h1 className="text-[1rem] font-medium">Booked Slots</h1>
      </div>
      <div className="mt-[20px]">
        {getBookingSlots?.data?.items?.length > 0 && (
          <Slider
            gap={30}
            totalItems={getBookingSlots?.data?.meta?.totalItems}
            itemsPerScreen={2}
          >
            {getBookingSlots?.data?.items?.map((val: any) => (
              <SliderItem key={val.id}>
                <BookedSlotsCards data={val} />
              </SliderItem>
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
};

export default BookedSlots;
