import StopHistoryTable from "./StopHistoryTable";

type Props = {
  id: any;
};

const StopHistory = ({ id }: Props) => {
  return (
    <div className="px-[20px] pt-[30px]">
      <StopHistoryTable id={id} />
    </div>
  );
};

export default StopHistory;
