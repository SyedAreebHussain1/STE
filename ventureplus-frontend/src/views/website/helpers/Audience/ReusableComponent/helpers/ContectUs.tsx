import { Input } from "antd";
import { CiMail } from "react-icons/ci";
import TextArea from "antd/es/input/TextArea";
import RoundedButton from "../../../../../../components/button/RoundedButton";
import { ContactUsImage } from "../../../../../../assets/website";

const ContactUs = () => {
  return (
    <div className="flex w-full justify-center mt-[50px]">
      <div className="flex xs:w-full lg:w-[1200px] justify-center h-[520px]">
        <div className="w-full h-full xs:hidden lg:block">
          <img src={ContactUsImage} className="w-[500px] h-[500px]" />
        </div>
        <div className="w-full h-full flex flex-col justify-center xs:px-[40px] lg:px-[0] ">
          <h1 className="heading-xs text-[#040615] font-semibold">
            Get in Touch with Us
          </h1>
          <p className="text-[15px] text-[#4A5366]">
            Have questions or need assistance? We're here to help!
          </p>
          <div className="flex flex-col gap-2 mt-[20px]">
            <div className="flex gap-2">
              <Input
                className="w-full h-[48px] border-[1px] border-[#E3E7EF] bg-[#F8FAFC] rounded-lg"
                placeholder="First Name"
              />
              <Input
                className="w-full h-[48px] border-[1px] border-[#E3E7EF] bg-[#F8FAFC] rounded-lg"
                placeholder="Last Name"
              />
            </div>
            <Input
              prefix={
                <CiMail className="text-[20px] mr-[8px] text-[#ababac]" />
              }
              className="w-full h-[48px] border-[1px] border-[#E3E7EF] bg-[#F8FAFC] rounded-lg"
              placeholder="Your Email"
            />
            <Input
              className="w-full h-[48px] border-[1px] border-[#E3E7EF] bg-[#F8FAFC] rounded-lg"
              placeholder="Phone Number"
            />
            <TextArea
              placeholder="How can we help?"
              className="w-full !min-h-[100px] border-[1px] border-[#E3E7EF] bg-[#F8FAFC] rounded-lg"
            />
            <div className="flex justify-end mt-[8px]">
              <RoundedButton title={"Send a Message"} sm type="primary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;
