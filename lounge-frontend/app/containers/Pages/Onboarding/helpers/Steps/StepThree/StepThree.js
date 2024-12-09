import { Button, Grid } from "@material-ui/core";
import { Call, WhatsApp } from "@material-ui/icons";
import React from "react";

const StepThree = () => {
  return (
    <Grid
      container
      spacing={2}
      style={{ paddingLeft: "1%", paddingTop: "2%", paddingRight: "1%" }}
    >
      <Grid item md={12} sm={12} xs={12}>
        <div className="support-cards-container" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <WhatsApp  style={{ backgroundColor: '#26a3a3', fontSize: 50, fill: '#fff', borderRadius: 50, padding: '5px 6px' }} />
          <div style={{ marginLeft: "1.8%", marginTop: "2.4%" }}>
            <Button
              variant="contained"
              component="label"
              color="primary"
              fullWidth
              // onClick={sendEmail}
              style={{ borderRadius: "5px", marginTop: "2%", backgroundColor: '#26a3a3' }}
            >
              Join WhatsApp Group
            </Button>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default StepThree;
