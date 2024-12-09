import GrowBusinessCards from "./GrowBusinessCards";

const GrowBusinessSection = () => {
  return (
    <div className="sm:pl-24 pl-0 w-full sm:pr-8 pr-0 mb-4">
      <div className="rounded-xl bg-background w-full flex flex-col p-4 gap-5">
        <div className="flex sm:justify-between justify-center items-center">
          <div className="flex flex-col gap-1">
            <h1 className="heading-xs font-bold">Buy Add Ons</h1>
          </div>
        </div>

        <GrowBusinessCards />
      </div>
    </div>
  );
};

export default GrowBusinessSection;
