import React from "react";
import { noContent } from "../../../assets";

const NoContent = () => {
  return (
    <div className="flex items-center justify-center flex-col my-5 gap-2">
      <img src={noContent} alt="" />
      <p className="text-paraLight font-medium paragraph text-center">
        It looks like you haven’t started yet. Let’s get your business ideas
        polished and ready to impress.
      </p>
    </div>
  );
};

export default NoContent;
