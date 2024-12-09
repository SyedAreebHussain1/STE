import { IoIosPlay } from "react-icons/io";

const FlexibilityComponent = () => {
  return (
    <div className="w-full flex justify-center mt-[50px]">
      <div className="xs:w-full lg:w-[1300px]">
        <h1 className="heading-xl text-[#016A70] font-bold">Flexibility</h1>
        <p className="text-[#4A5366] text-[18px] font-normal mt-[30px] leading-[22px]">
          Things change quickly and often when you are building a business. To
          support your journey, we provide the flexibility of choosing between
          monthly and more cost-effective annual subscriptions, with no set
          contract period.
        </p>
        <div className="flex gap-3 w-full mt-[30px]">
          <Cards
            heading="Pay Monthly or Annually"
            list={[
              "Annual subscription provides a full year to refine your business plan as your business grows and evolves.",
              "Annual plans are offered at a 50% discount.",
              "If you need a one-time plan without updates, consider our monthly option.",
            ]}
          />
          <Cards
            heading="Pay Monthly or Annually"
            list={[
              "Annual subscription provides a full year to refine your business plan as your business grows and evolves.",
              "Annual plans are offered at a 50% discount.",
              "If you need a one-time plan without updates, consider our monthly option.",
            ]}
          />
          <Cards
            heading="Pay Monthly or Annually"
            list={[
              "Annual subscription provides a full year to refine your business plan as your business grows and evolves.",
              "Annual plans are offered at a 50% discount.",
              "If you need a one-time plan without updates, consider our monthly option.",
            ]}
          />
        </div>
      </div>
    </div>
  );
};
export default FlexibilityComponent;

const Cards = ({ heading, list }: { heading: string; list: string[] }) => {
  return (
    <div className="w-full bg-[#CCE1E2] rounded-3xl py-[35px] px-[25px] ">
      <div className="flex flex-col gap-6">
        <h1 className="text-[#212838] heading-xs font-bold">{heading}</h1>
        {list?.length > 0 &&
          list?.map((item: string, i: number) => (
            <div className="flex gap-1 items-center w-full" key={i}>
              <div>
                <IoIosPlay className="text-[#016A70] text-[25px] mb-[4px] " />
              </div>
              <p className="text-[15px] text-[#4A5366] !leading-[17px]">
                {item}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};
