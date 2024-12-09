import { useDispatch, useSelector } from "react-redux";
import { Button } from "antd";
import uploadIcon from "../../../../assets/Profile/upload.png";
import { RootState } from "../../../../store/store";
import { useRef } from "react";
import {
  affilateUserProfileApi,
  affilateUserProfileUpdateApi,
} from "../../../../services/api/Dashboard/Profile";
import { infoMessage } from "../../../../utils/message";

const ProfileHead = () => {
  const ref = useRef<HTMLInputElement>(null);
  const formData = new FormData();
  const dispatch = useDispatch();
  const affilateUserProfile = useSelector(
    (state: RootState) => state?.affilateUserProfile
  );
  const changeHandler = (e: any) => {
    const { files } = e.target;
    if (
      files[0]?.name.includes(".png") ||
      files[0]?.name.includes(".jpg") ||
      files[0]?.name.includes(".jpeg")
    ) {
      if (files.length === 0) return;
      formData.append("file", files[0]);
      affilateUserProfileUpdateApi(dispatch, formData, () =>
        affilateUserProfileApi(dispatch)
      );
      return;
    }
    infoMessage("File Not Support");
  };

  return (
    <div className="bg-[#ffffff] rounded-lg p-[20px]">
      <div className="flex gap-5 items-center">
        <div className="flex gap-2">
          <img
            className="rounded-full object-contain w-[40px] h-[30px]"
            src={affilateUserProfile?.data?.profilePhoto}
            alt=""
          />
          <span className="text-[#212838] font-semibold text-[1.4375rem]">
            {affilateUserProfile?.data?.name}
          </span>
        </div>
        <div>
          <Button
            disabled={affilateUserProfile?.loading}
            loading={affilateUserProfile?.loading}
            onClick={() => ref?.current?.click()}
            className="text-[#01555A] font-semibold text-[.9375rem]"
          >
            <img src={uploadIcon} alt="" /> Upload
            <input
              type="file"
              ref={ref}
              onChange={changeHandler}
              className="hidden w-0"
              accept=".png,.jpg,.jpeg"
            ></input>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileHead;
