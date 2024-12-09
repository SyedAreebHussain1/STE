import { Button } from "antd";
import { useForm } from "antd/es/form/Form";
import { useEffect, useState } from "react";
import { HiDocumentDuplicate } from "react-icons/hi";
import { SlShareAlt } from "react-icons/sl";
import { useSelector } from "react-redux";
import FormProfile from "./helpers/Form";
import NoProfile from "../../assets/NoProfile.png";
import { successMessage } from "../../utils/message";
import EditProfile from "./helpers/EditProfile";
import dayjs from "dayjs";
import { MdModeEdit } from "react-icons/md";
import { PageContainer } from "../../helpers/PageContainer/PageContainer";
import { PageHeader } from "../../helpers/PageHeader/PageHeader";
const Profile = () => {
  const getProfile = useSelector((state: any) => state?.getProfile);

  const [form] = useForm();
  const {
    profile: {
      agency: { agencyName },
      fullName,
      whatsapp_no,
      dob,
      city,
      country,
      pinCode,
      userCode,
      pastExperience,
      profile_picture_url,
      address,
      shortDescription,
    },
    role: { title },
    cnic,
    email,
    phone,
  } = getProfile?.data;

  useEffect(() => {
    if (getProfile?.data) {
      form.setFields([
        {
          name: "email",

          value: email,
        },
        {
          name: "fullName",
          value: fullName,
        },
        {
          name: "phone",
          value: phone,
        },
        {
          name: "whatsapp_no",
          value: whatsapp_no,
        },
        {
          name: "agencyName",
          value: agencyName,
        },
        {
          name: "cnic",
          value: cnic,
        },
        {
          name: "profile_picture_url",
          value: profile_picture_url,
        },
        {
          name: "dob",
          value: dob ? dayjs(dob) : 0,
        },
        {
          name: "city",
          value: city,
        },
        {
          name: "address",
          value: address,
        },
        {
          name: "country",
          value: country,
        },
        {
          name: "pinCode",
          value: pinCode,
        },
        {
          name: "pastExperience",
          value: pastExperience,
        },
        {
          name: "shortDescription",
          value: shortDescription,
        },
      ]);
    }
  }, [getProfile]);

  const handleCopyText = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        successMessage("Code Copied Successfully");
      })
      .catch((error) => {
        console.error("Error copying text to clipboard:", error);
      });
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const shareText = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Title of the shared content",
          text: `Hey there,
Discover Property Wallet, the ultimate app for real estate agents. It's time to digitize your agency and supercharge your success!
Key Benefits:
- Streamline Your Agency: Say goodbye to paperwork and manual processes.
- Expand Your Inventory: Access a wide range of new properties.
- Boost Your Earnings: Unlock higher commissions on successful deals.
Download Property Wallet using my referral code PW-100784 and experience the future of real estate agency management!
Download here: https://onelink.to/6csa5k
Join me on this exciting journey and revolutionize your real estate business!`,
          url: "https://onelink.to/6csa5k",
        })
        .then(() => console.log("Shared successfully"))
        .catch((error) => console.error("Error sharing:", error));
    } else {
      console.log("Web Share API is not supported.");
    }
  };
  return (
    <PageContainer>
      <PageHeader title={"Profile"} />

      <div className="bg-white mt-4 p-4 flex flex-col  justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-2">
          <img
            className="h-[90px] w-[90px]  border-[#27A3A3] rounded-full border-2 object-cover"
            src={!profile_picture_url ? NoProfile : profile_picture_url}
            alt=""
          />
          <div className="flex flex-col">
            <h2 className="text-bold text-[15px] font-medium group-hover:text-primary ">
              {fullName}
            </h2>
            <h3 className="text-[#667085] text-center font-normal text-[15px] mt-2 group-hover:text-primary ">
              {title ? title?.replace("agent", "") : ""}
            </h3>
          </div>

          <Button onClick={showModal} className="bg-primary text-white">
            Edit Profile <MdModeEdit size={20} className="inline" />
          </Button>

          <p className="text-gray-400 text-[20px]">Referral No</p>
          {userCode ? (
            <div className="flex gap-4">
              <h1 className="font-bold text-[15px]">{userCode}</h1>
              <div className="flex gap-2">
                <HiDocumentDuplicate
                  color="#27A3A3"
                  size={25}
                  className="cursor-pointer"
                  onClick={() => handleCopyText(userCode)}
                />
                <SlShareAlt
                  onClick={shareText}
                  style={{ cursor: "pointer" }}
                  className="inline"
                  color="#27A3A3"
                  size={20}
                />
              </div>
            </div>
          ) : (
            <span>No Referral no !.</span>
          )}
        </div>

        <FormProfile form={form} role={title} pastExperience={pastExperience} />
      </div>
      {isModalOpen && (
        <EditProfile
          setIsModalOpen={setIsModalOpen}
          url={profile_picture_url}
          NoProfile={NoProfile}
          form={form}
          role={title}
          isModalOpen={isModalOpen}
          handleOk={handleOk}
          handleCancel={handleCancel}
        />
      )}
    </PageContainer>
  );
};

export default Profile;
