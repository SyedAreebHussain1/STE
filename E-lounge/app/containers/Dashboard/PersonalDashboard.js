import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import brand from "dan-api/dummy/brand";
import { Helmet } from "react-helmet";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Loading from "dan-components/Loading";
import {
  SliderWidget,
  CounterIconsWidget,
  PerformanceChartWidget,
  DateWidget,
  TaskWidget,
  WeatherWidget,
  ContactWidget,
  TimelineWidget,
  FilesWidget,
} from "dan-components";
import styles from "./dashboard-jss";
import { useDispatch, useSelector } from "react-redux";
import SalesOrderTable from "./SalesOrderTable";
import {
  CircularProgress,
  Fab,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Typography,
} from "@material-ui/core";
// import { getAllLoungesForOwnerAction } from "../../redux/modules/Lounges/actions";
import SelectFieldCustom from "../../utils/components/SelectFieldCustom";
import {
  useHistory,
  useLocation,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";

function PersonalDashboard(props) {
  const location = useLocation();
  const history = useHistory();
  const params = useParams();
  const title = brand.name + " - Personal Dashboard";
  const description = brand.desc;
  const { classes } = props;
  const dispatch = useDispatch();
  const [selectedId, setSelectedId] = useState(null);
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 111,
  });
  const getAllLoungesForOwner = useSelector((state) =>
    state.getIn(["getAllLoungesForOwner"])
  );
  useEffect(() => {
    // getAllLoungesForOwnerAction(dispatch, pageLimit);
  }, [dispatch]);

  const selectStyle = (theme) => ({
    demo: {
      height: "auto",
    },
    divider: {
      margin: `${theme.spacing(3)}px 0`,
    },
    field: {
      margin: `${theme.spacing(3)}px 5px`,
    },
    root: {
      display: "flex",
      flexWrap: "wrap",
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  });

  const newMakeeStyle = makeStyles(selectStyle);
  const newClasses = newMakeeStyle();

  useEffect(() => {
    if (params?.id) {
      setSelectedId(params?.id);
    }
  }, [params]);

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
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Fab
          onClick={() => {
            history.goBack();
          }}
          color="white"
          aria-label="back"
          className={classes.button}
        >
          <i style={{ fontSize: "24px" }} className="ion-ios-arrow-back" />
        </Fab>
        <Typography
          variant="h6"
          style={{ color: "white" }}
          component="h2"
          className={classes.title}
        >
          {location?.state?.data?.name}
        </Typography>
      </div>
      <br />
      <Grid container spacing={3} className={classes.root}>
        <Grid item md={9} xs={12}>
          <CounterIconsWidget loungeId={selectedId} />
        </Grid>
        <Grid item md={3} sm={12} xs={12}>
          {/* <Paper style={{ height: "100%", padding: 10 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Select Lounge
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Select Lounge"
                onChange={(e) => setSelectedId(e.target.value)}
                value={selectedId || 0}
                MenuProps={{
                  anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'left',
                  },
                  transformOrigin: {
                    vertical: 'top',
                    horizontal: 'left',
                  },
                  getContentAnchorEl: null,
                }}
              >
                {getAllLoungesForOwner.data &&
                  getAllLoungesForOwner.data.data.items.map((item) => {
                    return (
                      <MenuItem key={item.id} value={item.id}>
                        {item.name}
                      </MenuItem>
                    );
                  })}
              </Select>
            </FormControl>
          </Paper> */}
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
      <Grid container spacing={2} className={classes.root}>
        <Grid item xs={12}>
          <SalesOrderTable loungeId={selectedId} />
        </Grid>
      </Grid>
      <Grid container spacing={2} className={classes.root}>
        <Grid item xs={12}>
          <PerformanceChartWidget loungeId={selectedId} />
        </Grid>
      </Grid>
    </div>
  );
}

PersonalDashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PersonalDashboard);
