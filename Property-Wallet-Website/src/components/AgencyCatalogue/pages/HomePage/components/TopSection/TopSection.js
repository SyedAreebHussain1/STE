import React from "react";
import Container from "../../../../components/Container";

const TopSection = ({ data }) => {
  return (
    <div className=" pt-[3.125rem]">
      <Container>
        <div className="flex flex-col justify-center items-center gap-4  mb-[2rem]">
          {/* <h2 className="max-w-[860.17px] text-[#344054] text-3xl leading-10 md:text-[2.5rem] md:leading-[3.844rem] font-semibold text-center">
            {data?.agencyName && data?.agencyName?.toUpperCase()}
          </h2> */}
          {/* <p className="max-w-[765px] text-[#667085] text-xl font-medium leading-[2.044rem] text-center">
            {data?.agencyDigitalCatalogue?.agencyTagLine || "-"}
          </p> */}
          {data?.agencyDigitalCatalogue?.agencyTagLine?.length > 0 && (
            <section className="agency-tag   text-[1rem] sm:text-4xl">
              <div className="font-semibold agency-div escape">
                {data?.agencyDigitalCatalogue?.agencyTagLine?.split(" ")[0] &&
                  data?.agencyDigitalCatalogue?.agencyTagLine?.split(" ")[0]}
              </div>{" "}
              <div className="font-medium agency-div into-main">
                <span className="amazing">
                  {data?.agencyDigitalCatalogue?.agencyTagLine.substring(
                    data?.agencyDigitalCatalogue?.agencyTagLine?.split(" ")[0]
                      .length,
                    data?.agencyDigitalCatalogue?.agencyTagLine.length
                  )}
                </span>
              </div>
            </section>
          )}
        </div>
      </Container>
    </div>
  );
};

export default TopSection;
