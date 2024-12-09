import { IoIosPlay } from "react-icons/io";
import RoundedButton from "../../../../../components/button/RoundedButton";

const Subscriptions = () => {
  return (
    <div className="mt-[80px] flex justify-center  ">
      <div className="xs:w-full lg:w-[1300px] flex min-h-[480px] gap-[12px] px-[20px]">
        <div className="flex flex-col gap-[50px] pr-[40px]">
          <div className="mt-[40px] ">
            <h1 className="heading-l !leading-[46.87px]">Subscriptions</h1>
            <p className="text-[15px] !leading-[19.53px] text-[#4A5366]">
              We offer two options, each provide full access to all features.
              The choice is simply a matter of how many plans you wish to
              create.
            </p>
          </div>
          <div>
            <div className="flex gap-1 items-center">
              <IoIosPlay className="text-[#016A70] text-[20px] mb-[4px]" />
              <h1 className="heading-xs text-[#212838] !leading-[29.95px]">
                Business Subscription
              </h1>
            </div>
            <p className="text-[15px] !leading-[19.53px] text-[#4A5366]">
              For entrepreneurs and others looking to create a single
              professional business plan.
            </p>
          </div>
          <div>
            <div className="flex gap-1 items-center">
              <IoIosPlay className="text-[#016A70] text-[20px] mb-[4px]" />
              <h1 className="heading-xs text-[#212838] !leading-[29.95px]">
                Business Subscription
              </h1>
            </div>
            <p className="text-[15px] !leading-[19.53px] text-[#4A5366]">
              For entrepreneurs and others looking to create a single
              professional business plan.
            </p>
          </div>
        </div>
        <div>
          <Cards
            heading="Business Plan"
            list={[
              " Max Three Businesses / Plans",
              "Financial Forecasting",
              "7 Chapters / 30+ Sections",
              "PDF & Word Export",
              "Multiple User Access",
              "Priority Support",
              "No Contract",
            ]}
            className="subscriptionCardGreen "
          />
        </div>
        <div>
          <Cards
            heading="Business Plan"
            list={[
              " Max Three Businesses / Plans",
              "Financial Forecasting",
              "7 Chapters / 30+ Sections",
              "PDF & Word Export",
              "Multiple User Access",
              "Priority Support",
              "No Contract",
            ]}
            className="subscriptionCardGray "
          />
        </div>
      </div>
    </div>
  );
};
export default Subscriptions;

const Cards = ({
  heading,
  list,
  className,
}: {
  heading: string;
  list: string[];
  className: string;
}) => {
  return (
    <div
      className={`w-[400px] h-[480px] bg  rounded-3xl rounded-br-xl relative ${className}`}
    >
      <div className="text-[#F8FAFC] px-[35px] pt-[30px]">
        <h1 className="heading-l font-normal">{heading}</h1>
        <div className="mt-[20px] flex flex-col gap-5">
          {list?.length > 0 &&
            list?.map((item: string, key: number) => (
              <div className="flex gap-2 items-center" key={key}>
                <div className="rounded-full border-[1px] border-[#CDD4DF] p-[1px] w-[18px] h-[18px]">
                  <div className="rounded-full w-full h-full bg-[#CDD4DF]"></div>
                </div>
                <p className="text-[15px] font-normal text-[#F8FAFC]">{item}</p>
              </div>
            ))}
        </div>
        <div className="flex items-end mt-[30px]">
          <h1 className="text-[#F8FAFC] heading-xl font-semibold !leading-[34px]">
            $30
          </h1>
          <p className="text-[#E3E7EF] text-[15px] leading-[15px] ">/month</p>
        </div>
      </div>
      <div className="absolute bottom-0 w-full flex justify-end">
        <RoundedButton
          title={"Start Trial"}
          type="primary"
          className="w-[150px] z-10 rounded-xl font-semibold py-[25px]"
        />
      </div>
      <div className="SubscriptionCardsmain">
        <div className="SubscriptionCardssvga"></div>
        <div className="SubscriptionCardsdiv"></div>
        <div className="SubscriptionCardssvgb"></div>
      </div>
    </div>
  );
};
