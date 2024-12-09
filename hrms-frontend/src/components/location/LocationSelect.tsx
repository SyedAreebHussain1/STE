import { useState } from "react";

const data: {
  id: number;
  name: string;
  address: string;
}[] = [
  {
    id: 1,
    name: "Property Wallet",
    address:
      "Machs, B-6(C Miran Mohammed Shah Rd, Mohammad Ali Society Muhammad Ali Chs (Machs), Karachi, Karachi City, Sindh 75350, Pakistan",
  },
  {
    id: 2,
    name: "Property Wallet",
    address: "Karachi, Miran Muhammad Shah Road, 55320, Pakistan",
  },
];

const LocationSelect = () => {
  const [selectedLocation, setSelectedLocation] = useState(1);
  return (
    <>
      {data.map((location) => {
        return (
          <div
            key={location.id}
            className="group py-4 px-7 border-t border-borderColor cursor-pointer relative hover:bg-[#F1F1F1]"
            onClick={() => setSelectedLocation(location.id)}
          >
            <h4 className="text-[#1a1a1a] font-sm font-bold group-hover:text-primary">
              {location.name}
            </h4>
            <p className="text-[#808080] font-sm group-hover:text-primary">
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

export default LocationSelect;
