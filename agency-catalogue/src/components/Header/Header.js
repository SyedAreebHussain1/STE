import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../Container";
import Logo from "./../../assets/images/logo.png";
import Button from "../Buttons/Button";
import { FaFacebookF } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

// import { useNavigate } from "react-router-dom";

import { useNavigate, useParams } from "react-router-dom";

const Header = () => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const navigate = useNavigate();
  const params = useParams();
  console.log(params);
  return (
    <>
      <div className="h-[91px] bg-[#6C47FF]">
        <Container>
          <div className="hidden justify-between items-center h-full flex-wrap lg:flex cursor-pointer">
            <div onClick={() => navigate(`/${params.id}`)}>
              <img src={Logo} alt="Logo" />
            </div>
            <div>
              <ul className="flex items-center gap-[54px] flex-wrap">
                <li
                  className="text-white font-semibold text-base transition-all hover:bg-white hover:text-[#7C47FF] cursor-pointer p-3 rounded-lg"
                  onClick={() => navigate(`/${params?.id}/inventories`)}
                >
                  Inventories
                </li>
                <li className="text-white font-semibold text-base transition-all hover:bg-white hover:text-[#7C47FF] cursor-pointer p-3 rounded-lg">
                  <Link to={`/meet-our-team/${4}`}>Meet Our Team</Link>
                </li>
                <li className="text-white font-semibold text-base transition-all hover:bg-white hover:text-[#7C47FF] cursor-pointer p-3 rounded-lg">
                  Contact Us
                </li>
                <li className="text-white font-semibold text-base transition-all hover:bg-white hover:text-[#7C47FF] cursor-pointer p-3 rounded-lg">
                  About Us
                </li>
              </ul>
            </div>
            <div>
              <Button variant={"filled"} label="Book an Appointment" />
            </div>
          </div>

          <div className="flex justify-between items-center h-full flex-wrap lg:hidden">
            <div>
              <img src={Logo} alt="Logo" />
            </div>
            {/* <div>
            <Button variant={"filled"} label="Book an Appointment" />
          </div> */}
            <div>
              <button onClick={() => setMobileMenuVisible(true)}>
                <GiHamburgerMenu color="#fff" size="28" />
              </button>
            </div>
          </div>
        </Container>
      </div>
      <div
        style={{
          transform: !mobileMenuVisible ? "translateX(-100%)" : "translateX(0)",
        }}
        className="bg-[#6c47ff] fixed left-0 top-0 w-full h-full z-[99999] transition-all"
      >
        <ul className="flex flex-col items-center gap-[10px] flex-wrap justify-center h-full relative">
          <button
            onClick={() => setMobileMenuVisible(false)}
            className="absolute right-3 top-3"
          >
            <RxCross1 color="#fff" size="40" />
          </button>
          <li className="text-white font-semibold text-[24px] transition-all hover:bg-white hover:text-[#7C47FF] cursor-pointer p-3 rounded-lg">
            Inventories
          </li>
          <li className="text-white font-semibold text-[24px] transition-all hover:bg-white hover:text-[#7C47FF] cursor-pointer p-3 rounded-lg">
            Meet Our Team
          </li>
          <li className="text-white font-semibold text-[24px] transition-all hover:bg-white hover:text-[#7C47FF] cursor-pointer p-3 rounded-lg">
            Contact Us
          </li>
          <li className="text-white font-semibold text-[24px] transition-all hover:bg-white hover:text-[#7C47FF] cursor-pointer p-3 rounded-lg">
            About Us
          </li>
          <li>
            <Button variant={"filled"} label="Book an Appointment" />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
