import TimeEntriesAccordian from "./TimeEntriesAccordian";

const TimeEntriesFooter = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full">
      <TimeEntriesAccordian
        key={1}
        title="TRACKED HOURS"
        count="18h 36m"
        content="Include worked hours, break hours and any auto deductions."
      />
    </div>
  );
};

export default TimeEntriesFooter;
