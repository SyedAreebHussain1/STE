import { chatbotdefaultImage } from "../../../assets/checkOutAssets";

const EmptyChat = () => {
  return (
    <div className="h-max p-4 flex flex-col justify-center items-center w-full">
      <div className="relative h-[130px] w-[130px]">
        <img
          src={chatbotdefaultImage}
          alt=""
          className="h-[150px] absolute  block"
        />
      </div>

      <div className=" flex flex-col gap-2 items-center  max-w-[500px]">
        <h1 className="sm:text-3xl xl:text-4xl font-bold whitespace-nowrap text-center">
          Hi there!
        </h1>

        <p className="body-s font-bold text-para text-center">
          I'm your personal business consultant. Ask me anything related to
          business!
        </p>
      </div>
    </div>
  );
};

export default EmptyChat;
