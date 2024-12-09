import moment from "moment";
import { useSelector } from "react-redux";
import {
  mailIcon,
  personIcon,
  phoneIcon,
} from "../../../assets/ViewPlanAndDownloadPdf";
import { businessCoverPageBg } from "../../../assets/filledPlanSetupAssets";
import { RootState } from "../../../redux/store";

type Props = {
  item: any;
};

const BusinessPlanCoverPage = ({ item }: Props) => {
  const currentSelectedBusiness = useSelector(
    (state: RootState) => state.currentSelectedBusiness
  );
  const currentSelectedBusinessPlan = useSelector(
    (state: RootState) => state.currentSelectedBusinessPlan
  );

  const { isAuth, userData } = useSelector((state: RootState) => state.user);

  return (
    <div
      style={{ backgroundImage: `url(${businessCoverPageBg})` }}
      className="page-break border-[5px] border-strokes h-[1040px] w-full mb-4 flex flex-col"
    >
      <div className="flex justify-end items-center p-4">
        <h1 className="text-body font-semibold heading-xs leading-6">
          {" "}
          {moment(item?.createdAt).format("MMM YYYY")}
        </h1>
      </div>
      <div className="flex flex-col flex-1 justify-end mx-5 px-4">
        <div className="flex flex-col w-fit p-2 border-l-4 border-primary">
          <h1 className="text-title font-bold heading-xl mb-4">
            {currentSelectedBusiness?.business?.name}
          </h1>
        </div>
        <hr className="border-strokes my-4" />
        <h2 className="text-[20px] font-semibold ml-3">Business Plan</h2>
      </div>
      <div className="flex items-end justify-between flex-1">
        <div className="bg-[white] w-full flex justify-between items-center mb-4 p-5">
          <div className="flex gap-2 flex-col">
            <h1 className="text-title font-semibold heading-xs">Prepared By</h1>
            <div className="flex gap-2 items-center">
              <img src={personIcon} alt="" />
              <p className="text-title paragraph">
                {userData?.companyUser?.name}
              </p>
            </div>
            {userData?.companyUser?.phoneNo && (
              <div className="flex gap-2 items-center">
                <img src={phoneIcon} alt="" />
                <p className="text-title paragraph">
                  {userData?.companyUser?.phoneNo}
                </p>
              </div>
            )}
          </div>
          <div className="flex gap-2 flex-col">
            <div className="flex gap-2 items-center">
              <img src={mailIcon} alt="" />
              <p className="text-title paragraph">
                {userData?.companyUser?.email}
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BusinessPlanCoverPage;
