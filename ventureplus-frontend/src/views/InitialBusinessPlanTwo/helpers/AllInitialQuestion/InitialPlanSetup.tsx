import React from "react";
import { InitialQuestionsContainer } from "./../InitialQuestionsContainer";
import { Button } from "antd";
import initialObject from "../../../../assets/question/initialObject.png";
import YourBusiness from "./YourBusiness";
import { useNavigate } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";

interface InitialPlanSetupProps {
  title: string;
  next: any;
  prev: any;
  current: number;
  handleSelectProduct: any;
  handleSelectService: any;
  selectedServiceItems: any[];
  selectedProductItems: any[];
  setSelected: any;
  selected: string;
  handleAddTextServiceClick: any;
  handleAddTextProductClick: any;
  pleaseSpecifyForProduct: any;
  setPleaseSpecifyForProduct: any;
  pleaseSpecifyForService: any;
  setPleaseSpecifyForService: any;
  textProduct: string;
  setTextProduct: any;
  textService: string;
  setTextService: any;
  chooseForProduct: any;
  chooseForServices: any;
}
const InitialPlanSetup = ({
  title,
  next,
  prev,
  handleSelectProduct,
  handleSelectService,
  current,
  selectedServiceItems,
  selectedProductItems,
  selected,
  setSelected,
  handleAddTextServiceClick,
  handleAddTextProductClick,
  pleaseSpecifyForProduct,
  setPleaseSpecifyForProduct,
  pleaseSpecifyForService,
  setPleaseSpecifyForService,
  textProduct,
  setTextProduct,
  textService,
  setTextService,
  chooseForProduct,
  chooseForServices,
}: InitialPlanSetupProps) => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div className="bg-[#f0f6f6] !w-full ">
        <div className="mb-4 ml-3 mr-3 p-3 sm:hidden block ">
          <div className="bg-[#ffffff] mt-2 flex justify-between rounded-xl w-full">
            <div className="p-5">
              <h5
                className="cursor-pointer font-semibold text-[#014043] text-[1rem]"
                onClick={() => navigate("/dashboard")}
              >
                <ArrowLeftOutlined /> Back to home
              </h5>
              <h1 className="font-semibold text-[#014043] text-[1.2rem]">
                {title}
              </h1>
            </div>
          </div>
        </div>
        <div className="mb-10 ml-3 mr-3 p-3 sm:block hidden ">
          <div className="bg-[#ffffff] mt-2 flex justify-between rounded-xl w-full">
            <div className="p-5">
              <h5
                className="cursor-pointer font-semibold text-[#014043] text-[1.125rem]"
                onClick={() => navigate("/dashboard")}
              >
                <ArrowLeftOutlined /> Back to home
              </h5>
              <h1 className="font-semibold text-[#014043] text-[1.8125rem]">
                {title}
              </h1>
            </div>
            <img
              src={initialObject}
              className="!object-cover overflow-hidden md:h-[135px] h-[100%]"
              alt=""
            />
          </div>
        </div>
        <InitialQuestionsContainer>
          <div className="items-center flex justify-center w-full">
            <div className="sm:w-[50%] w-full">
              <div className="text-center w-full">
                <h1 className="text-[#212838] font-semibold sm:text-[2.25rem] text-[1.25rem] w-full">
                  Does your business deal in products, <br />
                  Services or both?
                </h1>
              </div>
              <div className="mt-3 gap-5">
                {["Services", "Products", "Both"]?.map((item: string) => {
                  return (
                    <div
                      key={item}
                      className="font-semibold p-3 text-center cursor-pointer "
                    >
                      <div
                        key={item}
                        onClick={() => setSelected(item)}
                        className={
                          selected == item
                            ? "bg-[#016A70] text-[#F8FAFC] font-medium text-[1.0625rem] rounded-md"
                            : "bg-[#FFFFFF] text-[#4A5366] font-medium text-[1.0625rem] rounded-md"
                        }
                      >
                        <span>
                          <h5 className="p-3">{item}</h5>
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
              {selected === "Products" ? (
                <YourBusiness
                  type="product"
                  question={"What are the products of your business?"}
                  selectedItems={selectedProductItems}
                  handleSelect={handleSelectProduct}
                  handleAddTextClick={handleAddTextProductClick}
                  pleaseSpecify={pleaseSpecifyForProduct}
                  setPleaseSpecify={setPleaseSpecifyForProduct}
                  setInputValue={setTextProduct}
                  inputValue={textProduct}
                  choose={chooseForProduct}
                />
              ) : selected === "Services" ? (
                <YourBusiness
                  type="service"
                  question={"What are the services of your business?"}
                  selectedItems={selectedServiceItems}
                  handleSelect={handleSelectService}
                  handleAddTextClick={handleAddTextServiceClick}
                  pleaseSpecify={pleaseSpecifyForService}
                  setPleaseSpecify={setPleaseSpecifyForService}
                  inputValue={textService}
                  setInputValue={setTextService}
                  choose={chooseForServices}
                />
              ) : selected === "Both" ? (
                <>
                  <YourBusiness
                    type="product"
                    question={"What are the products of your business?"}
                    selectedItems={selectedProductItems}
                    handleSelect={handleSelectProduct}
                    handleAddTextClick={handleAddTextProductClick}
                    pleaseSpecify={pleaseSpecifyForProduct}
                    setPleaseSpecify={setPleaseSpecifyForProduct}
                    inputValue={textProduct}
                    setInputValue={setTextProduct}
                    choose={chooseForProduct}
                  />
                  <YourBusiness
                    type="service"
                    question={"What are the services of your business?"}
                    selectedItems={selectedServiceItems}
                    handleSelect={handleSelectService}
                    handleAddTextClick={handleAddTextServiceClick}
                    pleaseSpecify={pleaseSpecifyForService}
                    setPleaseSpecify={setPleaseSpecifyForService}
                    inputValue={textService}
                    setInputValue={setTextService}
                    choose={chooseForServices}
                  />
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
        </InitialQuestionsContainer>
        <div className="w-full flex justify-between sm:z-0 z-50 sm:p-8 p-3 fixed bottom-0 sm:right-6">
          <div>
            {current !== 0 && (
              <Button
                onClick={prev}
                disabled={current === 0}
                className="bg-[#FFFFFF] text-[#4A5366] font-semibold"
                shape="round"
                size="large"
              >
                <span className="text-xl">&#x2190;</span>{" "}
                <span>
                  <h5>Previous</h5>
                </span>
              </Button>
            )}
          </div>
          <div className="z-50">
            <Button
              className="bg-[#016A70] text-[#FFFFFF] font-semibold"
              shape="round"
              size="large"
              onClick={next}
            >
              <span>Next</span>
              <span className="text-xl">&#x2192;</span>
            </Button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default InitialPlanSetup;
