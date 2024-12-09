import React, { useState } from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import { withStyles } from "@material-ui/core/styles";
import brand from "dan-api/dummy/brand";
import { RegisterFormV2 } from "dan-components";
import styles from "dan-components/Forms/user-jss";
import background from "../../../api/images/bannernew31.jpg";

function RegisterV2(props) {
  const [valueForm, setValueForm] = useState(null);

  const submitForm = (values) => {
    setTimeout(() => {
      setValueForm(values);
      console.log(`You submitted:\n\n${valueForm}`);
      window.location.href = "/app";
    }, 500); // simulate server latency
  };

  const title = brand.name + " - Register Version 2";
  const description = brand.desc;
  const { classes } = props;
  return (
    <div className={classes.rootFull}>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Helmet>
      <div className={classes.containerSide}>
        <Hidden smDown>
          <img src={background} style={{ width: "100%", height: "100vh" }} />
        </Hidden>
        <div
          className={classes.sideFormWrap}
          style={{ height: "100vh", background: "white" }}
        >
          <RegisterFormV2 onSubmit={(values) => submitForm(values)} />
        </div>
      </div>
    </div>
  );
}

RegisterV2.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RegisterV2);
