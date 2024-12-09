import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import { Link, Route } from "react-router-dom";
import styles from "./breadCrumb-jss";

const Breadcrumbs = (props) => {
  const { classes, theme, separator, location } = props;
  return <></>;
};

Breadcrumbs.propTypes = {
  classes: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  theme: PropTypes.string.isRequired,
  separator: PropTypes.string.isRequired,
};

export default withStyles(styles)(Breadcrumbs);
