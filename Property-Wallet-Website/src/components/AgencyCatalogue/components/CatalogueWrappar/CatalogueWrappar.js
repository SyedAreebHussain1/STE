import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { getAgencyDetailsApi } from "../../redux/api/Agency";
import Chat from "../Chat/Chat";
import { clearChatData } from "../../redux/slice/Chat/chatSlice";
import { Helmet } from "react-helmet";

const CatalogueWrappar = ({ children }) => {
  const params = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    if (params?.id) {
      getAgencyDetailsApi(dispatch, params?.id);
    }
  }, [params]);
  const chat = useSelector((state) => state.chat);

  const getAgencyDetails = useSelector((state) => state.getAgencyDetails);
  useEffect(() => {
    return () => {
      dispatch(clearChatData());
    };
  }, []);
  return (
    <>
      <Helmet>
        <title>
          {`${
            getAgencyDetails?.data?.data?.agencyName
              ? getAgencyDetails?.data?.data?.agencyName.substring(0, 42)
              : ""
          } | Property Wallet`}
        </title>
        <meta
          name="description"
          content={
            getAgencyDetails?.data?.data?.agencyDigitalCatalogue?.aboutAgency
              ? getAgencyDetails?.data?.data?.agencyDigitalCatalogue?.aboutAgency.substring(
                  0,
                  160
                )
              : ""
          }
        />
      </Helmet>
      {getAgencyDetails?.error ||
      (getAgencyDetails?.data && !getAgencyDetails?.data?.data?.pageStatus) ? (
        "This Website not Available"
      ) : getAgencyDetails?.data && getAgencyDetails?.data?.data?.pageStatus ? (
        <>
          {children}
          {chat.available && <Chat />}
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default CatalogueWrappar;
