import logolight from "../../../assets/light-logo.svg";
import logodark from "../../../assets/dark-logo.svg";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import loginGif from '../../../assets/Log in gif.gif'
import SignupGif from '../../../assets/Signup gif.gif'
import { useNavigate } from "react-router-dom";
interface Props {
  isFlipped: boolean;
}
const Sidetab = ({ isFlipped }: Props) => {
  const path: any = useNavigate();
  return (
    <div className="h-[100vh]">
      <div className={`flex ${isFlipped ? "justify-start" : "justify-end"} `}>
        {!isFlipped ? (
          <div className="flex justify-center items-center ">
            {" "}
            <img width={150} height={150} src={logolight} alt="" />
            <BsArrowRight
              onClick={() => path("/website")}
              color="black"
              className="inline cursor-pointer"
              size={30}
            />
          </div>
        ) : (
          <>
            {" "}
            <BsArrowLeft
              color="white"
              onClick={() => path("/website")}
              className="inline cursor-pointer"
              size={30}
            />
            <img width={150} height={150} src={logodark} alt="Logo" />
          </>
        )}
      </div>

      <div className="flex flex-col mt-4 w-96">
        <h1 className="text-5xl font-normal">Decide faster</h1>
        <p className="text-5xl font-bold">so you can do more</p>
      </div>
      <div className="flex justify-center items-center mt-2">
        <img height={400} width={400} src={!isFlipped?loginGif:SignupGif}/>
      </div>
    </div>
  );
};

export default Sidetab;
