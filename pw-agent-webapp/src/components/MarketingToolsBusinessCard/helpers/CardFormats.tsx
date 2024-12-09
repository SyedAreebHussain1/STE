import { BiPlus } from "react-icons/bi";
import logo from "./../../../assets/logo.png";
import { FaLocationDot } from "react-icons/fa6";
import { RiContactsFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { Divider } from "antd";

export const CardFormatList = (
  formValues: any,
  previewImg: any,
  primaryColor: any,
  secondaryColor: any
) => {
  return [
    {
      front: (
        <div className="border h-[200px] rounded-xl flex overflow-hidden">
          <div
            style={{
              backgroundColor: secondaryColor
                ? "#" + secondaryColor
                : "#1e6b6b",
            }}
            className={`h-full w-[40%] flex flex-col justify-center items-center text-center relative`}
          >
            {/* image */}
            <div className="mb-8">
              {previewImg ? (
                <img
                  src={`${previewImg}?timestamp=${Date.now()}`}
                  alt="preview"
                  className="rounded-full object-fill w-[75px] h-[75px]"
                />
              ) : (
                <div
                  style={{
                    color: secondaryColor ? "#" + secondaryColor : "#1e6b6b",
                  }}
                  className="rounded-full w-[75px] h-[75px] bg-white flex justify-center items-center gap-1 flex-col"
                >
                  <BiPlus />
                  <p className="text-xs leading-tighter">Your Agency Logo</p>
                </div>
              )}
            </div>
            {/* logo */}
            <div className="mt-3">
              <img src={logo} alt="" className="w-[130px] p-2" />
            </div>
            {/* contact info */}
            <div className="bg-white rounded-full p-1 max-h-[100px] min-h-[100px] absolute flex flex-col justify-evenly px-1 right-[-18px] bottom-3 text-md">
              <div
                style={{
                  backgroundColor: secondaryColor
                    ? "#" + secondaryColor
                    : "#1e6b6b",
                }}
                className="rounded-full p-1 flex justify-center items-center text-white"
              >
                <FaLocationDot />
              </div>
              <div
                style={{
                  backgroundColor: secondaryColor
                    ? "#" + secondaryColor
                    : "#1e6b6b",
                }}
                className="rounded-full p-1 flex justify-center items-center text-white"
              >
                <RiContactsFill />
              </div>
              <div
                style={{
                  backgroundColor: secondaryColor
                    ? "#" + secondaryColor
                    : "#1e6b6b",
                }}
                className="rounded-full p-1 flex justify-center items-center text-white"
              >
                <MdEmail />
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundColor: primaryColor ? "#" + primaryColor : "#27a3a3",
            }}
            className={`h-full w-[60%] flex-col p-2 text-white`}
          >
            <h1 className="font-bold">
              {formValues?.agentName ? (
                formValues?.agentName
              ) : (
                <span className="text-white opacity-[.4]">Agent Name</span>
              )}
            </h1>
            <p>
              {" "}
              {formValues?.agencyName ? (
                formValues?.agencyName
              ) : (
                <span className="text-white opacity-[.4]">Agency Name</span>
              )}
            </p>
            <div className="ml-4 mt-10 flex flex-col gap-2">
              <p className="text-xs">
                {formValues?.agencyAddress ? (
                  formValues?.agencyAddress
                ) : (
                  <span className="text-white opacity-[.4]">
                    Agency Address
                  </span>
                )}
              </p>
              <p className="text-xs">
                {formValues?.number ? (
                  formValues?.number
                ) : (
                  <span className="text-white opacity-[.4]">Number</span>
                )}
              </p>{" "}
              <p className="text-xs">
                {formValues?.email ? (
                  formValues?.email
                ) : (
                  <span className="text-white opacity-[.4]">Email</span>
                )}
              </p>
            </div>
          </div>
        </div>
      ),
      back: (
        <div className="border h-[200px] rounded-xl flex flex-col absolute top-0 w-[400px] overflow-hidden">
          <div
            style={{
              backgroundColor: secondaryColor
                ? "#" + secondaryColor
                : "#1e6b6b",
            }}
            className={`w-full h-[70%] flex justify-center items-center`}
          >
            {previewImg ? (
              <img
                src={`${previewImg}?timestamp=${Date.now()}`}
                alt="preview"
                className="rounded-full object-cover w-[90px] h-[90px]"
              />
            ) : (
              <div
                style={{
                  color: secondaryColor ? "#" + secondaryColor : "#1e6b6b",
                }}
                className="rounded-full w-[90px] h-[90px] bg-white flex justify-center items-center gap-1 flex-col"
              >
                <BiPlus />

                <p className="text-xs leading-tighter text-center ">
                  Your Agency Logo
                </p>
              </div>
            )}
          </div>
          <div
            style={{
              backgroundColor: primaryColor ? "#" + primaryColor : "#27a3a3",
            }}
            className={`w-full h-[30%]`}
          ></div>
        </div>
      ),
    },
    {
      front: (
        <div className="border h-[200px] rounded-xl flex overflow-hidden">
          <div className=" bg-white h-full w-[40%] flex flex-col justify-center items-center text-center gap-3">
            {/* image */}
            <div>
              {previewImg ? (
                <img
                  src={previewImg}
                  alt=""
                  className="rounded-full object-fill w-[75px] h-[75px] "
                />
              ) : (
                <div
                  style={{
                    borderColor: secondaryColor
                      ? "#" + secondaryColor
                      : "#1e6b6b",
                    color: secondaryColor ? "#" + secondaryColor : "#1e6b6b",
                  }}
                  className="border-solid border rounded-full w-[75px] h-[75px] bg-white flex justify-center items-center gap-1 flex-col"
                >
                  <BiPlus />
                  <p className="text-xs leading-tighter">Your Agency Logo</p>
                </div>
              )}
            </div>
            {/* agent info */}
            <div>
              <h1 className="font-bold">
                {formValues?.agentName ? (
                  formValues?.agentName
                ) : (
                  <span className="opacity-[.4]">Agent Name</span>
                )}
              </h1>
              <p className="text-xs">
                {" "}
                {formValues?.agencyName ? (
                  formValues?.agencyName
                ) : (
                  <span className="opacity-[.4]">Agency Name</span>
                )}
              </p>
            </div>
            {/* contact info */}
            <img src={logo} alt="" className="w-[130px] p-2" />
          </div>

          <div
            style={{
              backgroundColor: primaryColor ? "#" + primaryColor : "#27a3a3",
            }}
            className={`h-full w-[60%] flex flex-col gap-2 justify-center items-center`}
          >
            <div className="bg-white w-full p-2 flex items-center text-xs">
              <div className="text-white bg-gray-400 p-2 rounded-full h-[24px] w-[24px] flex justify-center items-center ">
                <FaLocationDot />
              </div>
              <Divider type="vertical" className="bg-gray-400" />
              <p>
                {" "}
                {formValues?.agencyAddress ? (
                  formValues?.agencyAddress
                ) : (
                  <span className=" text-black opacity-[.4]">
                    Agency Address
                  </span>
                )}
              </p>
            </div>
            <div className="bg-white w-full p-2 flex items-center text-xs">
              <div className="text-white bg-gray-400 p-2 rounded-full h-[24px] w-[24px] flex justify-center items-center ">
                <RiContactsFill />
              </div>
              <Divider type="vertical" className="bg-gray-400" />
              <p>
                {" "}
                {formValues?.number ? (
                  formValues?.number
                ) : (
                  <span className=" text-black opacity-[.4]">Number</span>
                )}
              </p>
            </div>
            <div className="bg-white w-full p-2 flex items-center text-xs">
              <div className="text-white bg-gray-400 p-2 rounded-full h-[24px] w-[24px] flex justify-center items-center ">
                <MdEmail />
              </div>
              <Divider type="vertical" className="bg-gray-400" />
              <p>
                {" "}
                {formValues?.email ? (
                  formValues?.email
                ) : (
                  <span className=" text-black opacity-[.4]">Email</span>
                )}
              </p>
            </div>
          </div>
        </div>
      ),
      back: (
        <div className="border h-[200px] rounded-xl flex flex-col absolute top-0 w-[400px] overflow-hidden">
          <div className="w-full h-[70%] bg-white flex justify-center items-center">
            {previewImg ? (
              <img
                src={previewImg}
                alt=""
                className="rounded-full object-cover w-[90px] h-[90px]"
              />
            ) : (
              <div
                style={{
                  borderColor: secondaryColor
                    ? "#" + secondaryColor
                    : "#1e6b6b",
                  color: secondaryColor ? "#" + secondaryColor : "#1e6b6b",
                }}
                className="border-solid border rounded-full w-[90px] h-[90px] bg-white flex justify-center items-center gap-1 flex-col"
              >
                <BiPlus />

                <p className="text-xs leading-tighter text-center ">
                  Your Agency Logo
                </p>
              </div>
            )}
          </div>
          <div
            style={{
              backgroundColor: primaryColor ? "#" + primaryColor : "#27a3a3",
            }}
            className={`w-full h-[30%]`}
          ></div>
        </div>
      ),
    },
    {
      front: (
        <div className="border h-[200px] rounded-xl flex flex-col overflow-hidden bg-white relative">
          <div
            style={{
              backgroundColor: primaryColor ? "#" + primaryColor : "#27a3a3",
            }}
            className={`h-full absolute w-[70px] left-0`}
          ></div>
          <div
            style={{
              backgroundColor: primaryColor ? "#" + primaryColor : "#27a3a3",
            }}
            className={`rounded-full p-3 max-h-[90px] min-h-[90px] absolute text-white flex flex-col justify-evenly gap-3 left-12 bottom-5 text-md`}
          >
            <FaLocationDot />
            <RiContactsFill />
            <MdEmail />
          </div>
          <div className="w-full mt-2 flex justify-evenly z-10 h-[60px]">
            <div
              style={{
                backgroundColor: secondaryColor
                  ? "#" + secondaryColor
                  : "#1e6b6b",
              }}
              className={`w-full`}
            ></div>
            <div
              style={{
                color: primaryColor ? "#" + primaryColor : "#1e6b6b",
              }}
              className="bg-white flex flex-col gap-1 p-2 w-full"
            >
              <h1 className="font-bold">
                {formValues?.agentName ? (
                  formValues?.agentName
                ) : (
                  <span className="opacity-[.4]">Agent Name</span>
                )}
              </h1>
              <p className="text-xs">
                {" "}
                {formValues?.agencyName ? (
                  formValues?.agencyName
                ) : (
                  <span className="opacity-[.4]">Agency Name</span>
                )}
              </p>
            </div>
            <div
              style={{
                backgroundColor: secondaryColor
                  ? "#" + secondaryColor
                  : "#1e6b6b",
              }}
              className={`w-full`}
            ></div>
          </div>
          <div className="flex items-center justify-center mt-6 ">
            <div className="flex flex-col gap-2 text-xs w-[200px]">
              <p>
                {formValues?.agencyAddress ? (
                  formValues?.agencyAddress
                ) : (
                  <span className="opacity-[.4]">Agency Address</span>
                )}
              </p>
              <p>
                {formValues?.number ? (
                  formValues?.number
                ) : (
                  <span className="opacity-[.4]">Number</span>
                )}
              </p>{" "}
              <p>
                {formValues?.email ? (
                  formValues?.email
                ) : (
                  <span className="opacity-[.4]">Email</span>
                )}
              </p>
            </div>
          </div>
          <img
            src={logo}
            alt=""
            className="absolute bottom-0 right-0 w-[130px] p-2"
          />
        </div>
      ),
      back: (
        <div className="border h-[200px] rounded-xl flex flex-col absolute w-[400px] top-0 overflow-hidden">
          <div className="w-full h-[70%] bg-white flex justify-center items-center">
            {previewImg ? (
              <img
                src={previewImg}
                alt=""
                className="rounded-full object-cover w-[90px] h-[90px]"
              />
            ) : (
              <div
                style={{
                  borderColor: secondaryColor
                    ? "#" + secondaryColor
                    : "#1e6b6b",
                  color: secondaryColor ? "#" + secondaryColor : "#1e6b6b",
                }}
                className="border-solid border rounded-full w-[90px] h-[90px] bg-white flex justify-center items-center gap-1 flex-col"
              >
                <BiPlus />

                <p className="text-xs leading-tighter text-center ">
                  Your Agency Logo
                </p>
              </div>
            )}
          </div>
          <div
            style={{
              backgroundColor: primaryColor ? "#" + primaryColor : "#27a3a3",
            }}
            className={`w-full h-[30%]`}
          ></div>
        </div>
      ),
    },
  ];
};
