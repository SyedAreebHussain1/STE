import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import PackagesMain from "./helpers/PackagesMain";
import { getAllCustomPackagesAcion } from "../../../redux/modules/PackageNew/actions";
const Packages = () => {
  const title = "Packages";
  const description = "Packages";

  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Helmet>
      <br />
      <Paper>
        <PackagesMain />
      </Paper>
    </div>
  );
};

export default Packages;
