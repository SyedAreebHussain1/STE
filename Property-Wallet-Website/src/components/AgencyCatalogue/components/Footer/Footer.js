import React, { useEffect } from "react";
import Container from "../Container";
import Logo from "./../../assets/images/logo.png";
import { FaFacebookF, FaLinkedin, FaInstagram } from "react-icons/fa6";
import { useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { scrollToTop } from "../../utils/utils";
import moment from "moment";
import pwfooterImg from "./../../assets/images/pwfooter.png";
const Footer = () => {
  const history = useHistory();
  const params = useParams();

  const getAgencyDetails = useSelector((state) => state.getAgencyDetails);

  return (
    <>
      {getAgencyDetails?.data && getAgencyDetails?.data?.data?.pageStatus && (
        <div className="bg-[#18191B] pt-[90px] !text-center md:!text-left">
          <Container>
            <div className="flex flex-col items-center gap-4 md:flex-row md:items-start h-full justify-between flex-wrap border-b border-[#FFFFFF26] mb  pb-[45px]">
              <div
                className=" cursor-pointer"
                onClick={() => {
                  history.push(`/${params?.name}/${params.id}`);
                  scrollToTop();
                }}
              >
                <div className="w-[200px] h-[80px]">
                  <img
                    src={getAgencyDetails?.data?.data?.logo_Url}
                    className="h-[80px] w-[200px] object-contain"
                    alt={getAgencyDetails?.data?.data?.agencyName}
                  />
                </div>
                <div className="object-contain">
                  <h2 className="text-white font-bold text-2xl mb-[1rem] mt-10 ">
                    {getAgencyDetails?.data?.data?.agencyName.length > 0 &&
                      getAgencyDetails?.data?.data?.agencyName}
                  </h2>
                </div>
              </div>
              <div>
                <h2 className="text-white font-bold text-2xl mb-[1.625rem]">
                  Quick Links
                </h2>
                <ul className="flex flex-col flex-wrap">
                  <li
                    className="text-white font-normal text-lg transition-all hover:text-[#7C47FF] cursor-pointer mb-[1.2rem] mt-0"
                    onClick={() =>
                      history.push(`/${params?.name}/${params?.id}/inventories`)
                    }
                  >
                    Inventories
                  </li>
                  <li
                    onClick={() =>
                      history.push(
                        `/${params?.name}/${params?.id}/meet-our-team`
                      )
                    }
                    className="text-white font-normal text-lg transition-all hover:text-[#7C47FF] cursor-pointer mb-[1.2rem] mt-0"
                  >
                    Meet Our Team
                  </li>
                  {/* <li className="text-white font-normal text-lg transition-all hover:text-[#7C47FF] cursor-pointer mb-[1.2rem] mt-0">
                Contact Us
              </li> */}
                  <a href="#about">
                    <li
                      onClick={() =>
                        history.push(`/${params?.name}/${params?.id}`)
                      }
                      className="text-white font-normal text-lg transition-all hover:text-[#7C47FF] cursor-pointer mb-[1.2rem] mt-0"
                    >
                      About Us
                    </li>
                  </a>
                </ul>
              </div>
              {/* <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-[0.5rem]">
              <h3 className="text-sm text-[#D4D5D9] font-medium">CONTACT US</h3>
              <p className="text-lg text-[#fff]">+1 999 888-76-54</p>
            </div>
            <div className="flex flex-col gap-[0.5rem]">
              <h3 className="text-sm text-[#D4D5D9] font-medium">Email</h3>
              <p className="text-lg text-[#fff]">hello@logoipsum.com</p>
            </div>
          </div> */}
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-[0.5rem]">
                  <h3 className="text-sm text-[#D4D5D9] font-medium">
                    Working Days
                  </h3>
                  <p className="text-lg text-[#fff]">
                    {getAgencyDetails?.data?.data?.openDays?.length > 0
                      ? getAgencyDetails?.data?.data?.openDays?.join("-")
                      : "-"}{" "}
                    <br />
                    {moment(getAgencyDetails?.data?.data?.openHours).format(
                      "LT"
                    )}
                    -
                    {moment(getAgencyDetails?.data?.data?.closeHours).format(
                      "LT"
                    )}
                  </p>
                </div>
                {getAgencyDetails?.data?.data?.agencyDigitalCatalogue
                  ?.agencyEmail && (
                  <div className="flex flex-col gap-[0.5rem]">
                    <h3 className="text-sm text-[#D4D5D9] font-medium">
                      Agency Email
                    </h3>
                    <p className="text-lg text-[#fff]">
                      {
                        getAgencyDetails?.data?.data?.agencyDigitalCatalogue
                          ?.agencyEmail
                      }
                    </p>
                  </div>
                )}
                {getAgencyDetails?.data?.data?.address && (
                  <div className="flex flex-col gap-[0.5rem]">
                    <h3 className="text-sm text-[#D4D5D9] font-medium">
                      Address
                    </h3>
                    <p className="max-w-[100%] md:max-w-[400px] break-words text-white">
                      {getAgencyDetails?.data?.data?.address}
                    </p>
                    {/* {getAgencyDetails?.data?.data?.address &&
                  getAgencyDetails?.data?.data?.address?.length > 80 ? (
                    <Popover
                      placement="top"
                      title={
                        <p className="max-w-[100%] md:max-w-[400px] break-words">
                          {getAgencyDetails?.data?.data?.address}
                        </p>
                      }
                    >
                      <p className=" text-[#fff] max-w-[226px] text-xs leading-[1.635rem] font-medium mb-6  break-words line-clamp-2 cardDesLength">
                        {getAgencyDetails?.data?.data?.address}
                      </p>
                    </Popover>
                  ) : (
                    <p className=" text-[#fff] max-w-[226px] text-xs leading-[1.635rem] font-medium mb-6  break-words line-clamp-2 cardDesLength">
                      {getAgencyDetails?.data?.data?.address || "-"}
                    </p>
                  )} */}
                  </div>
                )}
              </div>
              <div>
                {getAgencyDetails?.data?.data?.agencyDigitalCatalogue
                  ?.facebookUrl ||
                getAgencyDetails?.data?.data?.agencyDigitalCatalogue
                  ?.linkedInUrl ||
                getAgencyDetails?.data?.data?.agencyDigitalCatalogue
                  ?.InstagramUrl ? (
                  <h2 className="text-white font-bold text-2xl mb-[2.25rem]">
                    Social Media LInks
                  </h2>
                ) : (
                  ""
                )}
                <div className="flex  gap-1 justify-center  md:justify-start">
                  {getAgencyDetails?.data?.data?.agencyDigitalCatalogue
                    ?.facebookUrl && (
                    <a
                      href={
                        getAgencyDetails?.data?.data?.agencyDigitalCatalogue
                          ?.facebookUrl
                      }
                      className="w-[41px] h-[41px] bg-[#fff] rounded-full flex justify-center items-center cursor-pointer"
                    >
                      <FaFacebookF color="#222222" size="20" />
                    </a>
                  )}
                  {getAgencyDetails?.data?.data?.agencyDigitalCatalogue
                    ?.linkedInUrl && (
                    <a
                      href={
                        getAgencyDetails?.data?.data?.agencyDigitalCatalogue
                          ?.linkedInUrl
                      }
                      className="w-[41px] h-[41px] bg-[#fff] rounded-full flex justify-center items-center cursor-pointer"
                    >
                      <FaLinkedin color="#222222" size="20" />
                    </a>
                  )}
                  {getAgencyDetails?.data?.data?.agencyDigitalCatalogue
                    ?.InstagramUrl && (
                    <a
                      href={
                        getAgencyDetails?.data?.data?.agencyDigitalCatalogue
                          ?.InstagramUrl
                      }
                      className="w-[41px] h-[41px] bg-[#fff] rounded-full flex justify-center items-center cursor-pointer"
                    >
                      <FaInstagram color="#222222" size="20" />
                    </a>
                  )}
                </div>
              </div>
            </div>
            <div className="pt-11 pb-[1rem]">
              <h4 className="text-center text-lg text-[white] font-normal">
                Powered by{" "}
                <span
                  onClick={() => window.location.assign("/")}
                  className="text-[#27A3A3] cursor-pointer"
                >
                  Property Wallet
                </span>
              </h4>
              <div className="flex justify-center mt-2">
                <img className="w-[140px]" src={pwfooterImg} alt="" />
              </div>
            </div>
          </Container>
        </div>
      )}
    </>
  );
};

export default Footer;
