import React from "react";
import AuthSidebar from "../../helpers/Auth/AuthSidebar";
import CreateAgencyForm from "../../components/OnBoarding/CreateAgency/CreateAgencyForm";

const CreateAgency: React.FC = () => {
  return (
    <AuthSidebar>
      <div className="w-full bg-transparent flex sm:flex justify-center items-center p-[10px]  px-[20px] md:px-[82px]">
        <div className="w-full">
          <div className="flex w-full mt-9 md:mt-0">
            <div>
              <h1 className="font-bold text-[2.4263rem] text-[#1D2939] line-height-[54.35px]">
                Create your Agency
              </h1>
              <p className="text-subHeadingColor text-[1.125rem] max-w-[574px]">
                Effortless Join integration. Instant property management.
              </p>
            </div>
          </div>

          <CreateAgencyForm />
        </div>
      </div>
    </AuthSidebar>
  );
};

export default CreateAgency;
