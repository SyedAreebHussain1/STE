import { Rate, Tooltip } from "antd";

type ReviewProp = {
  rate: number;
  comment: string;
  name: string;
  email: string;
  checkbox?: React.ReactNode
};

const ReviewCard = (props: ReviewProp) => {
  return (
    <div className="p-6 bg-[#F9FAFB] rounded-lg mb-8">
      <div className="my-3">
        <Rate value={props.rate} disabled={true} />
      </div>
      <div className="  text-[#344054] text-base mb-[1.375rem]  overflow-hidden w-[100%] ">
        <Tooltip
          placement="top"
          color={"white"}
          title={
            props.comment.length > 30 && (
              <span style={{ color: "black" }}>{props.comment}</span>
            )
          }
        >
          <p className="text-[#667085] text-base font-medium  mb-6 break-words ">
            {props.comment.length > 30
              ? `${props.comment.substring(0, 30)}...`
              : props.comment || "-"}
          </p>
        </Tooltip>
      </div>
      <div className="flex justify-end">
        <div className="flex flex-col items-end">
          <h3 className="text-[#475467] text-base font-medium">
            {props.name || "-"}
          </h3>
          <p className="text-[#475467] text-base font-medium">
            {props?.email || "-"}
          </p>
        </div>
      </div>
      {props.checkbox && props.checkbox}
    </div>
  );
};

export default ReviewCard;
