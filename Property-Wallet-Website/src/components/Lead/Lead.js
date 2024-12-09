import React, { useEffect, useState } from "react";
// import Navbar from "../global-components/navbar-v2";

import Form from "./Form";
import "./Lead.css";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { urlLink } from "../../constant/contact-us-constants";
import CustomSpinner from "../global-components/Loaders/CustomSpinner";
import Error from "../section-components/error";
import NavbarSand from "../global-components/NavbarSand";
const Lead = (props) => {
  const [title, setTitle] = useState("LeadForm | Property Wallet");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [decoded, setDecoded] = useState(null);
  const { search } = useLocation();
  const getInventoryDetails = async (data) => {
    setLoading(true);
    let url = `${urlLink}/V1/lead/getInventoryDetailByPublic/${data?.createdBy}`;
    if (
      data.propertyWalletProductPlotId &&
      data.propertyWalletProductPlotId?.trim().length > 0
    ) {
      url =
        url +
        "?propertyWalletProductPlotId=" +
        data.propertyWalletProductPlotId;
    }
    if (
      data.propertyWalletInventoryPlotId &&
      data.propertyWalletInventoryPlotId?.trim().length > 0
    ) {
      url =
        url +
        "?propertyWalletInventoryPlotId=" +
        data.propertyWalletInventoryPlotId;
    }
    if (data.inventoryId && data.inventoryId?.trim().length > 0) {
      url = url + "?inventoryId=" + data.inventoryId;
    }

    await axios
      .get(url)
      .then((response) => {
        if (response.data.data) {
          setData(response.data.data);
        }

        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log("ERROR", err);
      });
  };
  useEffect(() => {
    if (props.location.pathname == "/lead") {
      setTitle("LeadForm | Property Wallet");
    } else {
      setTitle("LeadForm | Property Wallet");
    }

    const query = new URLSearchParams(search);
    const encodedObj = query.get("obj");
    const decodedString = atob(encodedObj);
    const decodedObj = JSON.parse(decodedString);
    if (decodedObj) {
      // console.log("decodedObj", decodedObj);
      setDecoded(decodedObj);
      getInventoryDetails(decodedObj);
    }
  }, [search]);

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div>
      {/* <Navbar /> */}
      <NavbarSand />
      <div style={{ marginTop: "5%" }}>
        {loading ? (
          <CustomSpinner />
        ) : data !== null ? (
          <Form data={data} decoded={decoded} />
        ) : (
          <Error />
        )}
      </div>
    </div>
  );
};

export default Lead;
