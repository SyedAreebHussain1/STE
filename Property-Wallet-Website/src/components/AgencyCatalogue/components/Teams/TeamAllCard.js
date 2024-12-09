import React from "react";
import { Popover, Rate, Badge, Tooltip } from "antd";
import { useModal } from "../../hooks/useModal";
import BookAppointment from "../BookAppointment/BookAppointment";
import { useDispatch } from "react-redux";
import { removeChatData, setChatData } from "../../redux/slice/Chat/chatSlice";
import AgentReview from "../AgentReview/AgentReview";
import Button from "../Buttons/Button";

const TeamAllCard = ({
  image,
  rating,
  name,
  experience,
  desc,
  id,
  designation,
  disabled,
}) => {
  const [visible, toggle] = useModal();
  const dispatch = useDispatch();
  const [visibleReview, toggleReview] = useModal();
  function addSpaceBeforeCapital(str) {
    return str.replace(/([A-Z])/g, " $1").trim();
  }
  return (
    <>
      {visible && <BookAppointment visible={visible} toggle={toggle} id={id} />}
      {visibleReview && (
        <AgentReview visible={visibleReview} toggle={toggleReview} id={id} />
      )}
      <Badge.Ribbon
        text="In Active"
        color="red"
        style={{ opacity: disabled ? 1 : 0 }}
      >
        <div
          className="px-[1.625rem] py-6 fancy_card mt-3"
          style={{
            boxShadow: "2px 8px 29.100000381469727px 2px #C9C9C940",
            backgroundColor: disabled ? "#C0BEC4" : "white",
          }}
        >
          <div className="flex justify-center py-3">
            <div
              className="rounded-full w-[107px] h-[107px] overflow-hidden bg-center bg-cover"
              style={{
                backgroundImage: `url(${image})`,
              }}
            />
          </div>
          <div className="flex justify-center my-3">
            <Rate value={rating} disabled={true} />
          </div>
          <div className="mb-1 mt-1">
            <h3 className="text-[#344054] text-xl text-center font-bold mb-[0.125rem]">
              {name}
            </h3>
            <p className="text-[#667085] text-lg font-medium text-center cardExpLength">
              {experience > 0 ? `${experience} Years of experience` : "-"}
            </p>
          </div>
          <div className="max-h-9 overflow-hidden w-[100%] ">
            {/* {designation?.length > 30 ? (
              <Popover
                placement="top"
                title={
                  <p className="max-w-[100%] md:max-w-[400px]">
                    {designation &&
                      `${addSpaceBeforeCapital(
                        designation
                      )[0].toUpperCase()}${addSpaceBeforeCapital(
                        designation
                      ).substring(
                        1,
                        addSpaceBeforeCapital(designation).length
                      )}`}
                  </p>
                }
              >
                <p className="text-[#667085] text-base leading-[1.635rem] font-medium mb-5 text-center break-words line-clamp-2 cardDesLength">
                  {designation &&
                    `${addSpaceBeforeCapital(
                      designation
                    )[0].toUpperCase()}${addSpaceBeforeCapital(
                      designation
                    ).substring(1, addSpaceBeforeCapital(designation).length)}`}
                </p>
              </Popover>
            ) : (
              <p className="text-[#667085] text-base leading-[1.635rem] font-medium mb-6 text-center break-words line-clamp-2 cardDesLength">
                {designation &&
                  `${addSpaceBeforeCapital(
                    designation
                  )[0].toUpperCase()}${addSpaceBeforeCapital(
                    designation
                  ).substring(1, addSpaceBeforeCapital(designation).length)}`}
              </p>
            )} */}
            <p className="text-[#667085] text-base leading-[1.635rem] font-medium mb-6 text-center break-words line-clamp-2 cardDesLength">
              {designation === "agentOwner"
                ? "Agency Owner"
                : designation === "agentManager"
                ? "Agency Manager"
                : "Agent"}
            </p>
          </div>
          <div className="max-h-16 overflow-hidden">
            {/* {desc?.length > 80 ? (
              <Popover
                placement="top"
                title={<p className="max-w-[100%] md:max-w-[400px]">{desc}</p>}
              >
                <p className="text-[#667085] text-base leading-[1.635rem] font-medium mb-6 text-center break-words line-clamp-2 cardDesLength">
                  {desc}
                </p>
              </Popover>
            ) : (
              <p className="text-[#667085] text-base leading-[1.635rem] font-medium mb-6 text-center break-words line-clamp-2 cardDesLength">
                {desc || "-"}
              </p>
            )} */}
            <Tooltip
              placement="top"
              color="white"
              title={
                desc?.length > 80 && (
                  <span style={{ color: "black" }}>{desc}</span>
                )
              }
            >
              <p className="text-[#667085] text-base leading-[1.635rem] font-medium mb-6 text-center break-words line-clamp-2 cardDesLength">
                {desc?.length > 80
                  ? `${desc.substring(0, 79)}...`
                  : desc || "-"}
              </p>
            </Tooltip>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col sm:flex-row justify-between gap-2">
              <Button
                label={"Book Appointment"}
                variant={"filled-inverse"}
                className={
                  "!px-4 !py-3 !text-base font-medium w-full sm:w-[65%] "
                }
                onClick={toggle}
                disabled={disabled}
              />
              <Button
                label={"Live Chat"}
                disabled={disabled}
                variant={"outlined"}
                className={
                  "!px-4 !py-3 !text-base font-medium w-full sm:w-[35%] "
                }
                onClick={() => {
                  dispatch(removeChatData());
                  setTimeout(() => {
                    dispatch(
                      setChatData({
                        image,
                        rating,
                        name,
                        experience,
                        desc,
                        id,
                        by: "click",
                      })
                    );
                  }, 300);
                }}
              />
            </div>
            <div className="flex justify-center mt-[10px]">
              <Button
                label={"Leave a Review"}
                disabled={disabled}
                variant={"outlined"}
                className={"!px-4 !py-3 !text-base font-medium  w-[100%] "}
                onClick={toggleReview}
              />
            </div>
          </div>
        </div>
      </Badge.Ribbon>
    </>
  );
};

export default TeamAllCard;
