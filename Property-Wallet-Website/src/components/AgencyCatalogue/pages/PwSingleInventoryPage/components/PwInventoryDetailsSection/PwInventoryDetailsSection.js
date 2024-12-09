import React from "react";
import Container from "../../../../components/Container";
import DocumentPreviewer from "../../../../components/DocumentPreviewer";

const PwInventoryDetailsSection = ({ data }) => {
  return (
    <div>
      <Container>
        <div className="mb-[3.25rem]">
          <h2 className="text-[#191F2B] text-[2rem] font-bold mb-2">
            {`PKR ${data?.data?.priceRange?.minimum}-${data?.data?.priceRange?.maximum}`}
          </h2>
          <h3 className="text-[#344054] font-semibold text-[1.75rem]">
            {data?.data?.projectName || "-"}
          </h3>
          <p className="text-[#667085] text-lg">
            {data?.data?.address || "-"}, {data?.data.city || "-"}
          </p>
        </div>
        <div className="mb-[3.25rem]">
          <h3 className="text-[#191F2B] text-2xl font-semibold">NOC</h3>
          <p className="text-[#667085] text-lg leading-[1.814rem] mt-2 max-w-[1003px]">
            {data?.data?.NOC ? "Approved" : "Not Approved"}
          </p>
        </div>
        <div className="mb-[3.25rem]">
          <h3 className="text-[#191F2B] text-2xl font-semibold">Sizes</h3>
          {data?.data?.landSizeRange?.data?.length &&
            data?.data?.landSizeRange?.data?.map((item) => {
              return (
                <p className="text-[#667085] text-lg leading-[1.814rem] mt-2 max-w-[1003px]">
                  {item.propertyWalletInventory_landSize}, {item.landArea_title}
                </p>
              );
            })}
        </div>
        <div className="mb-[3.25rem]">
          <h3 className="text-[#191F2B] text-2xl font-semibold">Description</h3>
          <p className="text-[#667085] text-lg leading-[1.814rem] mt-2 max-w-[1003px]">
            {data?.data?.description || "-"}
          </p>
        </div>
        {data?.data?.propertyWalletProjectDocument?.length > 0 && (
          <div className="mb-[3.25rem]">
            <h3 className="text-[#191F2B] text-2xl font-semibold mb-2">
              Attachments
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {data?.data?.propertyWalletProjectDocument?.map((item) => {
                return (
                  <DocumentPreviewer
                    fileName={item?.doc?.split("/").at(-1).split("-")[1]}
                    url={item?.doc}
                  />
                );
              })}
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default PwInventoryDetailsSection;
