import React from "react";
import Container from "../Container";
import Logo from "./../../assets/images/logo.png";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa6";
import { useNavigate } from "react-router";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#18191B] pt-[90px]">
      <Container>
        <div className="flex h-full justify-between flex-wrap border-b border-[#FFFFFF26] mb  pb-[45px]">
          <div className="">
            <img src={Logo} alt="Logo" />
          </div>
          <div>
            <h2 className="text-white font-bold text-2xl mb-[1.625rem]">
              Quick Links
            </h2>
            <ul className="flex flex-col flex-wrap">
              <li
                className="text-white font-normal text-lg transition-all hover:text-[#7C47FF] cursor-pointer mb-[1.2rem]"
                onClick={() => navigate("inventories")}
              >
                Inventories
              </li>
              <li className="text-white font-normal text-lg transition-all hover:text-[#7C47FF] cursor-pointer mb-[1.2rem]">
                Meet Our Team
              </li>
              <li className="text-white font-normal text-lg transition-all hover:text-[#7C47FF] cursor-pointer mb-[1.2rem]">
                Contact Us
              </li>
              <li className="text-white font-normal text-lg transition-all hover:text-[#7C47FF] cursor-pointer mb-[1.2rem]">
                About Us
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-[0.5rem]">
              <h3 className="text-sm text-[#D4D5D9] font-medium">CONTACT US</h3>
              <p className="text-lg text-[#fff]">+1 999 888-76-54</p>
            </div>
            <div className="flex flex-col gap-[0.5rem]">
              <h3 className="text-sm text-[#D4D5D9] font-medium">Email</h3>
              <p className="text-lg text-[#fff]">hello@logoipsum.com</p>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-[0.5rem]">
              <h3 className="text-sm text-[#D4D5D9] font-medium">
                Opening hours
              </h3>
              <p className="text-lg text-[#fff]">9am—6pm</p>
            </div>
            <div className="flex flex-col gap-[0.5rem]">
              <h3 className="text-sm text-[#D4D5D9] font-medium">Address</h3>
              <p className="text-xs text-[#fff] max-w-[226px]">
                2118 Thornridge Cir. Syracuse, Connecticut 35624
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-white font-bold text-2xl mb-[2.25rem]">
              Social Media LInks
            </h2>
            <div className="flex flex-wrap justify-between items-center">
              <span className="w-[41px] h-[41px] bg-[#fff] rounded-full flex justify-center items-center cursor-pointer">
                <FaFacebookF color="#222222" size="20" />
              </span>
              <span className="w-[41px] h-[41px] bg-[#fff] rounded-full flex justify-center items-center cursor-pointer">
                <FaTwitter color="#222222" size="20" />
              </span>
              <span className="w-[41px] h-[41px] bg-[#fff] rounded-full flex justify-center items-center cursor-pointer">
                <FaLinkedin color="#222222" size="20" />
              </span>
              <span className="w-[41px] h-[41px] bg-[#fff] rounded-full flex justify-center items-center cursor-pointer">
                <FaInstagram color="#222222" size="20" />
              </span>
            </div>
          </div>
        </div>
        <div className="pt-11 pb-[6.5rem]">
          <h4 className="text-center text-lg text-[white] font-normal">
            Powered by{" "}
            <a className="text-[#27A3A3]" href="https://www.propertywallet.pk/">
              Property Wallet
            </a>
          </h4>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
