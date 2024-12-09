type Props = { data: any };

const GalleryImages = (props: Props) => {
  return (
    <div className="inventory-images h-[320px] mb-6 overflow-hidden">
      <div className="inventory-img inventory-img-main h-[320px] ">
        <img
          src={props.data?.[0]?.photo}
          alt=""
          className="w-full h-full rounded-md object-cover"
        />
      </div>

      {props?.data?.length > 1 &&
        props?.data?.slice(1).map((item: any, i: any) => (
          <div className="inventory-img rounded-md overflow-hidden" key={i}>
            <img src={item?.photo} alt="" className="w-full h-full" />
          </div>
        ))}
    </div>
  );
};

export default GalleryImages;
