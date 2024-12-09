interface DataType {
  children: React.ReactNode;
}
const SectionWrapper = ({ children }: DataType) => {
  return (
    <div className="bg-green-100 bg-opacity-15 p-6 rounded-[15px] mb-6 w-full">
      {children}
    </div>
  );
};

export default SectionWrapper;
