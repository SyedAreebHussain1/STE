import Temp1Slide1 from "./helpers/Temp1Slide1";
import Temp1Slide10 from "./helpers/Temp1Slide10";
import Temp1Slide2 from "./helpers/Temp1Slide2";
import Temp1Slide3 from "./helpers/Temp1Slide3";
import Temp1Slide4 from "./helpers/Temp1Slide4";
import Temp1Slide5 from "./helpers/Temp1Slide5";
import Temp1Slide6 from "./helpers/Temp1Slide6";
import Temp1Slide7 from "./helpers/Temp1Slide7";
import Temp1Slide8 from "./helpers/Temp1Slide8";
import Temp1Slide9 from "./helpers/Temp1Slide9";

type Props = {
  slideContent: any[];
  setSlideContent: any;
};

const Temp1Editor = ({ slideContent, setSlideContent }: Props) => {
  return (
    <div className="flex flex-col w-full gap-4">
      <Temp1Slide1
        slideContent={slideContent?.[0]?.slide_1}
        setSlideContent={setSlideContent}
      />
      <Temp1Slide2
        slideContent={slideContent?.[1]?.slide_2}
        setSlideContent={setSlideContent}
      />
      <Temp1Slide3
        slideContent={slideContent?.[2]?.slide_3}
        setSlideContent={setSlideContent}
      />
      <Temp1Slide4
        slideContent={slideContent?.[3]?.slide_4}
        setSlideContent={setSlideContent}
      />
      <Temp1Slide5
        slideContent={slideContent?.[4]?.slide_5}
        setSlideContent={setSlideContent}
      />
      <Temp1Slide6
        slideContent={slideContent?.[5]?.slide_6}
        setSlideContent={setSlideContent}
      />
      <Temp1Slide7
        slideContent={slideContent?.[6]?.slide_7}
        setSlideContent={setSlideContent}
      />
      <Temp1Slide8
        slideContent={slideContent?.[7]?.slide_8}
        setSlideContent={setSlideContent}
      />
      <Temp1Slide9
        slideContent={slideContent?.[8]?.slide_9}
        setSlideContent={setSlideContent}
      />
      <Temp1Slide10
        slideContent={slideContent?.[9]?.slide_10}
        setSlideContent={setSlideContent}
      />
    </div>
  );
};

export default Temp1Editor;
