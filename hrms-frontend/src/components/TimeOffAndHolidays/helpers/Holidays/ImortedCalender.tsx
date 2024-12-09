import { useState } from "react";

const data: {
  id: number;
  name: string;
  address: string;
}[] = [
  {
    id: 1,
    name: "Imported Calendar (Pakistan) ",
    address: " No assigned people or groups ",
  },
];

const ImortedCalender = () => {
  const [selectedLocation, setSelectedLocation] = useState(1);
  return (
    <>
      {data.map((location) => {
        return (
          <div
            key={location.id}
            className="group py-4 px-7 border-t  cursor-pointer relative hover:bg-[#F1F1F1] border  border-[rgba(0, 0, 0, 0)]"
            onClick={() => setSelectedLocation(location.id)}
          >
            <h4 className="text-primary font-sm font-bold group-hover:text-primary">
              {location.name}
            </h4>
            <p className="text-[rgb(178,178,178)] font-sm group-hover:text-primary italic font-normal mt-3">
              {location.address}
            </p>
            {selectedLocation === location.id && (
              <div className="absolute w-[4px] h-full left-0 dark:bg-dark-primary bg-light-primary rounded-tr-[.5rem] rounded-br-[.5rem] top-0" />
            )}
          </div>
        );
      })}
    </>
  );
};

export default ImortedCalender;
