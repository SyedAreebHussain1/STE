interface DataType {
  subHeading: string;
  mainHeading: string;
}
const SectionHeading = ({ subHeading, mainHeading }: DataType) => {
  return (
    <div className="flex flex-col">
      <h3 className="text-primary font-bold body-s tracking-widest leading-[16.32px]">
        {" "}
        {subHeading}{" "}
      </h3>
      <h1 className="text-title font-bold heading-l"> {mainHeading} </h1>
    </div>
  );
};

export default SectionHeading;
