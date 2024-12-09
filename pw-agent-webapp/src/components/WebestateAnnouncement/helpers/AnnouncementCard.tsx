import { Button, ButtonProps, Col, Tooltip } from "antd";
type Props = {
  title: string;
  description: string;
  editButtonProps: ButtonProps;
  deleteButtonProps: ButtonProps;
  index: number;
  isLoadingKey: any;
  loadingForDelete: any;
  loadingForEdit: any
};

const AnnouncementCard = (props: Props) => {
  return (
    <Col xs={24} lg={12} xxl={6} key={props.index}>
      <div className="bg-white rounded-lg p-6 mt-4 ">
        <h4 className="text-[#475467] font-medium text-[1.2rem] mb-1">
          {props.title}
        </h4>
        <Tooltip className="cursor-pointer"
          color={"white"} placement="topLeft" title={props.description.length > 30 && <span style={{ color: "black" }}>{props.description}</span>} >
          <p className="text-[#667085] font-medium text-[.8125rem] mb-[1.125rem]">
            {props.description.length > 30 ? `${props.description.substring(0, 30)}...` : props.description}
          </p>
        </Tooltip>
        <div className="flex items-center gap-[1.125rem]">
          <Button
            className="text-[#3D4350] font-medium text-lg h-[40px]  flex-1 border border-borderColor"
            {...props.editButtonProps}
            loading={props.isLoadingKey === props.index && props.loadingForEdit}
          >
            Edit
          </Button>
          <Button
            className="text-[#E23442] font-medium text-lg h-[40px]  flex-1 border border-[#E23442]"
            {...props.deleteButtonProps}
            loading={props.isLoadingKey === props.index && props.loadingForDelete}
          >
            Delete
          </Button>
        </div>
      </div>
    </Col >
  );
};

export default AnnouncementCard;
