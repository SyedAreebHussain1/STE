import { useState } from "react";
import deleleIcon from "../../../../../assets/delete.png";
import SliderItem from "../../../../../helpers/Slider/SliderItems";
import Slider from "../../../../../helpers/Slider/Slider";
import { useDispatch } from "react-redux";
import { deleteLeadInventoryApi } from "../../../../../redux/api/LeadManagement";
import { AppDispatch } from "../../../../../redux/store";
import AddLeadInventoryDrawer from "./AddLeadInventoryDrawer";
import { MinusCircleOutlined } from '@ant-design/icons';

const InventoriesDetails = ({ data }: any) => {
  const dispatch: AppDispatch = useDispatch();
  const [toggle, setToggle] = useState(false);
  const [generalInventory, setGeneralInventory] = useState(false);
  return (
    <>
      {toggle && (
        <AddLeadInventoryDrawer
          toggle={toggle}
          setToggle={setToggle}
          generalInventory={generalInventory}
        />
      )}
      <div className="mt-4 bg-[#FFFFFF] p-[15px] rounded-xl ">
        <h3 className="text-[#344054] text-[1.2rem] font-medium">
          Inventories
        </h3>
        <div className="mt-3">
          <div className="flex justify-between">
            <div>
              <h4 className="text-[#344054] text-[1rem] font-medium">
                Property wallet inventory
              </h4>
            </div>
            <div>
              <span
                onClick={() => [setToggle(true), setGeneralInventory(false)]}
                className="bg-[#FFFFFF]  text-[.75rem] font-medium p-[5px] rounded-full text-[#292D35] border cursor-pointer"
              >
                + Add inventory
              </span>
            </div>
          </div>
          <div className="mt-[20px]">
            <Slider
              gap={20}
              totalItems={data?.data?.leadInventory?.length}
              itemsPerScreen={1.1}
            >
              {data?.data?.leadInventory
                ?.filter(
                  (val: any) =>
                    val?.propertyWalletInventoryPlot ||
                    val?.propertyWalletProduct
                )
                .map((item: any) => {
                  return (
                    <SliderItem key={item.id}>
                      <div className="p-[10px] rounded-[8px] border border-gray-300 w-[400px]">
                        <div className="flex gap-2">
                          <div>
                            <img
                              src={
                                item?.propertyWalletInventoryPlot
                                  ?.propertyWalletInventory
                                  ?.propertyWalletProject?.BuilderLogo ||
                                item?.propertyWalletProduct
                              }
                              alt="img"
                              className="!w-[70px] !h-[74px] rounded-[8px]"
                            />
                          </div>
                          <div className="w-full">
                            <div className="flex justify-between">
                              <span className="bg-[rgb(242,244,247)]  text-[.75rem] font-medium p-[3px] rounded-full text-[#292D35] border">
                                {item?.propertyWalletInventoryPlot
                                  ? "Project"
                                  : "Single Project"}
                              </span>
                              <span>
                                <MinusCircleOutlined className="text-[red]" onClick={() =>
                                  deleteLeadInventoryApi(dispatch, item?.id)
                                } />
                              </span>
                            </div>
                            <h4 className="text-[1rem] text-[#344054] font-medium">
                              {item?.propertyWalletInventoryPlot
                                ?.propertyWalletInventory?.propertyWalletProject
                                ?.projectName ||
                                item?.propertyWalletProduct?.title}
                            </h4>
                            <p className="text-[#667085] text-[.8125rem] font-medium">
                              {item?.propertyWalletInventoryPlot
                                ?.propertyWalletInventory
                                ? item?.propertyWalletInventoryPlot
                                  ?.propertyWalletInventory
                                  ?.propertyWalletProject?.address.length > 25
                                  ? `${item?.propertyWalletInventoryPlot?.propertyWalletInventory?.propertyWalletProject?.address.substring(
                                    0,
                                    25
                                  )}...`
                                  : item?.propertyWalletInventoryPlot
                                    ?.propertyWalletInventory
                                    ?.propertyWalletProject?.address
                                : item?.propertyWalletProduct?.address.length >
                                  25
                                  ? `${item?.propertyWalletProduct?.address.substring(
                                    0,
                                    25
                                  )}...`
                                  : item?.propertyWalletProduct?.address}
                            </p>
                          </div>
                        </div>
                        <div className="flex mt-2 justify-between">
                          <span>
                            <p className="text-[#667085] font-medium text-[.8125rem]">
                              Plot No
                            </p>
                            <p className="text-[#292D35] font-medium text-[1rem]">
                              {item?.propertyWalletInventoryPlot?.plotNo || "-"}
                            </p>
                          </span>
                          <span>
                            <p className="text-[#667085] font-medium text-[.8125rem]">
                              Plot Size
                            </p>
                            <p className="text-[#292D35] font-medium text-[0.7rem]">
                              {item?.propertyWalletInventoryPlot
                                ?.propertyWalletInventory?.landSize ||
                                item?.propertyWalletProduct?.landSize}{" "}
                              {item?.propertyWalletInventoryPlot
                                ?.propertyWalletInventory?.landArea?.title ||
                                item?.propertyWalletProduct?.landArea?.title}
                            </p>
                          </span>
                          <span>
                            <p className="text-[#667085] font-medium text-[.8125rem]">
                              Property type
                            </p>
                            <p className="text-[#292D35] font-medium text-[1rem]">
                              {item?.propertyWalletInventoryPlot
                                ?.propertyWalletInventory?.projectSubType
                                ?.title ||
                                item?.propertyWalletProduct?.projectSubType
                                  ?.title}
                            </p>
                          </span>
                        </div>
                      </div>
                    </SliderItem>
                  );
                })}
            </Slider>
          </div>
        </div>
        <br />
        <div className="mt-3">
          <div className="flex justify-between">
            <div>
              <h4 className="text-[#344054] text-[1rem] font-medium">
                General Inventory
              </h4>
            </div>
            <div>
              <span
                onClick={() => [setToggle(true), setGeneralInventory(true)]}
                className="bg-[#FFFFFF]  text-[.75rem] font-medium p-[5px] rounded-full text-[#292D35] border"
              >
                + Add inventory
              </span>
            </div>
          </div>
          <div className="mt-[20px]">
            <Slider
              gap={20}
              totalItems={data?.data?.leadInventory.length}
              itemsPerScreen={1.1}
            >
              {data?.data?.leadInventory
                ?.filter((val: any) => val.inventory)
                .map((item: any) => {
                  return (
                    <SliderItem key={item.id}>
                      <div className="p-[10px] rounded-[8px] border border-gray-300 w-[400px]">
                        <div className="flex gap-2">
                          <div>
                            <img
                              src={item?.inventory?.projectType?.logo}
                              alt="img"
                              className="!w-[70px] !h-[74px] rounded-[8px]"
                            />
                          </div>
                          <div className="w-full">
                            <div className="flex justify-between">
                              <span className="bg-[rgb(242,244,247)]  text-[.75rem] font-medium p-[3px] rounded-full text-[#147AD6] border">
                                {item?.status}
                              </span>
                              <span>
                                <MinusCircleOutlined className="text-[red]" onClick={() =>
                                  deleteLeadInventoryApi(dispatch, item?.id)
                                } />
                              </span>
                            </div>
                            <h4 className="text-[1rem] text-[#344054] font-medium">
                              {item?.inventory?.project?.projectName || "-"}
                            </h4>
                          </div>
                        </div>
                        <div className="flex mt-2 justify-between">
                          <span>
                            <p className="text-[#667085] font-medium text-[.8125rem]">
                              Plot No
                            </p>
                            <p className="text-[#292D35] font-medium text-[1rem]">
                              {"-"}
                            </p>
                          </span>
                          <span>
                            <p className="text-[#667085] font-medium text-[.8125rem]">
                              Plot Size
                            </p>
                            <p className="text-[#292D35] font-medium text-[0.7rem]">
                              {item?.inventory?.landSize || "-"}{" "}
                              {item?.inventory?.landArea?.title || "-"}
                            </p>
                          </span>
                          <span>
                            <p className="text-[#667085] font-medium text-[.8125rem]">
                              Inventory type
                            </p>
                            <p className="text-[#292D35] font-medium text-[1rem]">
                              {item?.inventory?.projectSubType?.title}
                            </p>
                          </span>
                        </div>
                      </div>
                    </SliderItem>
                  );
                })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};
export default InventoriesDetails;
