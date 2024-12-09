import ViewPlanChild from "./ViewPlanChild";

const ViewNestedChild = ({ pushObject, setPushObject, index, headingNumber, heading }: any) => {
  return (
    <div className="mt-4 mb-4">
      {pushObject?.[index]?.length > 0 &&
        pushObject?.[index]?.map((items: any, key: number) =>
          items == "loading" ? null : items?.type === "Sub Title" ? null : (
            <ViewPlanChild
              item={items}
              heading={heading}
              headingNumber={headingNumber}
              key={key}
              innerIndex={key}
              pushObject={pushObject}
              setPushObject={setPushObject}
              index={index}
              isLastChild={pushObject.length === index + 1}
            />
          )
        )}
    </div>
  );
};

export default ViewNestedChild;
