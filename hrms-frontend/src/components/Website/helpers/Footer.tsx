import logo from "../../../assets/daftarPlusWebsiteLogo.svg";
import facebookIcon from "../../../assets/footerFacbookIcon.svg";
import instagramIcon from "../../../assets/footerInstagramIcon.svg";
import twitterIcon from "../../../assets/footerTwitterIcon.svg";

const Footer = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div>
          <img src={logo} alt="companylogo " className="w-[300px]" />
        </div>
        <div className="flex justify-center gap-[40px] text-[#FAFAFA]">
          <div>
            <h2 className=" text-[1.291rem]">Services</h2>
            <div className="text-[.904rem] mt-[15px] font-light">
              <h3 className="mb-[10px] cursor-pointer hover:text-[#3ED0D6] opacity-[70%]">
                HR Plus
              </h3>
              <h3 className="mb-[10px] cursor-pointer hover:text-[#3ED0D6] opacity-[70%]">
                Sales Plus
              </h3>
              <h3 className="mb-[10px] cursor-pointer hover:text-[#3ED0D6] opacity-[70%]">
                Venture
              </h3>
            </div>
          </div>
          <div>
            <h2 className=" text-[1.291rem]">Services</h2>
            <div className="text-[.904rem] mt-[15px] font-light flex gap-[30px] ">
              <div>
                <h3 className="mb-[10px] opacity-[70%]">Reservation:</h3>
                <h3 className="mb-[10px] opacity-[70%]">Head Office:</h3>
              </div>
              <div>
                <h4 className="mb-[10px] cursor-pointer hover:text-[#3ED0D6]">
                  123-456-7890
                </h4>
                <h4 className="mb-[10px] cursor-pointer hover:text-[#3ED0D6]">
                  123-456-7890
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-center gap-[15px]">
            <button className="w-[122.88px] text-center py-[9px] bg-white rounded-3xl text-[.98rem] font-semibold">
              Apply Now
            </button>
            <button className="w-[122.88px] text-center py-[9px] bg-white rounded-3xl text-[.98rem] font-semibold">
              Sign up
            </button>
          </div>
          <div className="flex justify-center gap-[15px] mt-[50px]">
            <img
              src={facebookIcon}
              alt="facebook"
              className="w-[22.54px] h-[18.31px]"
            />
            <img
              src={instagramIcon}
              alt="instagram"
              className="w-[22.54px] h-[18.31px]"
            />
            <img
              src={twitterIcon}
              alt="twitter"
              className="w-[22.54px] h-[18.31px]"
            />
          </div>
        </div>
      </div>
      <div className="w-[full] border-t-[1.15px] border-t-[#FAFAFA] opacity-[20%] mt-[50px] pt-[50px] text-center text-white">
        © 2024 Daftar Plus
      </div>
    </div>
  );
};

export default Footer;
