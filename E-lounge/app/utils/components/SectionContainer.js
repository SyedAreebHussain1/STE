import React from "react";
import { Divider, Grid, Typography } from "@material-ui/core";

const SectionContainer = ({
  title,
  subtitle,
  extras,
  children,
  optional = false,
}) => {
  return (
    <>
      <Grid container spacing={3} style={{ marginBottom: 20, marginTop: 20 }}>
        <Grid item lg={3} xs={12}>
          <Typography
            variant="subtitle1"
            style={{ color: "#292D35", fontWeight: "bold", fontSize: "18px" }}
          >
            {title}

            {optional && (
              <span style={{ fontSize: 12, color: "#858D9D" }}>(Optional)</span>
            )}
          </Typography>
          <Typography
            variant="body2"
            style={{ color: "#667085", fontWeight: "500", fontSize: "12px" }}
          >
            {subtitle}
          </Typography>
          {extras}
        </Grid>
        <Grid item lg={9} xs={12}>
          {children}
        </Grid>
      </Grid>
      <Divider />
    </>
  );
};

export default SectionContainer;
