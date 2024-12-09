import { Rnd } from "react-rnd";

type Props = {
  slideContent: any;
  index: number;
  children: JSX.Element;
};

const StaticComponentForPdf = ({ slideContent, index, children }: Props) => {
  const resizeDirections = {
    bottom: false,
    bottomLeft: false,
    bottomRight: false,
    left: false,
    right: false,
    top: false,
    topLeft: false,
    topRight: false,
  };
  return (
    <Rnd
      enableResizing={resizeDirections}
      size={{
        width: slideContent?.dimensions?.width,
        height: slideContent?.dimensions?.height,
      }}
      position={{
        x: slideContent?.position?.x,
        y: slideContent?.position?.y,
      }}
      disableDragging={true}
      bounds="parent"
      className="rounded-lg overflow-hidden"
    >
      {children}
    </Rnd>
  );
};

export default StaticComponentForPdf;
