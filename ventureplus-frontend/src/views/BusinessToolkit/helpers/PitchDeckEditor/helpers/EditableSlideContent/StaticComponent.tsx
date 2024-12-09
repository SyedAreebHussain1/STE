import { Rnd } from "react-rnd";

type Props = {
  slideContent: any;
  index: number;
  minWidth: number;
  minHeight: number;
  onResize: (
    e: any,
    data: any,
    ref: any,
    delta: any,
    position: any,
    index: number
  ) => void;
  onDrag: (e: any, data: any, index: number) => void;
  children: JSX.Element;
};

const StaticComponent = ({
  slideContent,
  index,
  onResize,
  onDrag,
  minWidth,
  minHeight,
  children,
}: Props) => {
  return (
    <Rnd
      size={{
        width: slideContent?.[index]?.dimensions?.width,
        height: slideContent?.[index]?.dimensions?.height,
      }}
      position={{
        x: slideContent?.[index]?.position?.x,
        y: slideContent?.[index]?.position?.y,
      }}
      disableDragging={false}
      onDragStop={(e, data) => onDrag(e, data, index)}
      onResizeStop={(e, data, ref, delta, position) =>
        onResize(e, data, ref, delta, position, index)
      }
      minWidth={minWidth}
      minHeight={minHeight}
      bounds="parent"
      className="hover:border hover:border-primary rounded-lg overflow-hidden"
    >
      {children}
    </Rnd>
  );
};

export default StaticComponent;
