type Props = { data: any };

const PropertiesDetails = ({ data }: Props) => {
  return (
    <div className="mb-8">
      <h4 className="text-[#475467] text-[19.2px] font-medium mb-5">
        Property Details
      </h4>
      <div className="grid grid-cols-4 gap-3">
        {data?.price && (
          <div className="flex items-center gap-4">
            <span className="text-[#667085] font-medium text-base">Price</span>
            <span className="text-[#1D2939] font-medium text-base">
              {data?.price}
            </span>
          </div>
        )}
        {data?.projectType?.title && (
          <div className="flex items-center gap-4">
            <span className="text-[#667085] font-medium text-base">
              Project Type
            </span>
            <span className="text-[#1D2939] font-medium text-base">
              {data?.projectType?.title}
            </span>
          </div>
        )}
        {data?.projectSubType?.title && (
          <div className="flex items-center gap-4">
            <span className="text-[#667085] font-medium text-base">
              Project Sub Type
            </span>
            <span className="text-[#1D2939] font-medium text-base">
              {data?.projectSubType?.title}
            </span>
          </div>
        )}
        {data?.InstallmentDealCommissionAmount && (
          <div className="flex items-center gap-4">
            <span className="text-[#667085] font-medium text-base">
              Installment Comission
            </span>
            <span className="text-[#1D2939] font-medium text-base">
              {data?.InstallmentDealCommissionAmount}
            </span>
          </div>
        )}
        {data?.cashDealCommissionAmount && (
          <div className="flex items-center gap-4">
            <span className="text-[#667085] font-medium text-base">
              Cash Commission
            </span>
            <span className="text-[#1D2939] font-medium text-base">
              {data?.cashDealCommissionAmount}
            </span>
          </div>
        )}
        {data?.noOfUnit && (
          <div className="flex items-center gap-4">
            <span className="text-[#667085] font-medium text-base">
              No of Units
            </span>
            <span className="text-[#1D2939] font-medium text-base">
              {data?.noOfUnit}
            </span>
          </div>
        )}
        {data?.noOfSold >= 0 && (
          <div className="flex items-center gap-4">
            <span className="text-[#667085] font-medium text-base">
              No of Units Sold
            </span>
            <span className="text-[#1D2939] font-medium text-base">
              {data?.noOfSold}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertiesDetails;
