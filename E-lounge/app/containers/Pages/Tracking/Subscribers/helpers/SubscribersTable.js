import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import {
  Chip,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@material-ui/core";
import allSubscribersColumn from "../../../../../utils/columns/allSubscribersColumn";
import moment from "moment";
import { subscriberCountsApi } from "../../../../../redux/modules/Tracking/action";
import { getFromStorage } from "../../../../../utils/storage";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    overflowX: "auto", // Enable horizontal scrolling
  },
  table: {
    minWidth: 650, // Adjust this value as needed
  },
}));

const SubscribersTable = ({
  fullName,
  dateValue,
  renderAgain,
  setRenderAgain,
}) => {
  const classes = useStyles();
  const [dataSource, setDataSource] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const dispatch = useDispatch();
  const getAllSubscribers = useSelector((state) =>
    state.getIn(["subscriberCounts"])
  );
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  });
  const handleChangePage = (event, newPage) => {
    setPageLimit((prev) => ({
      ...prev,
      page: newPage + 1,
    }));
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPageLimit((prev) => ({
      ...prev,
      limit: event.target.value,
    }));
  };
  useEffect(() => {
    if (fullName || dateValue) {
      setPageLimit((prev) => {
        return {
          ...prev,
          page: 1,
        };
      });
    }
  }, [fullName, dateValue]);
  useEffect(() => {
    subscriberCountsApi(
      dispatch,
      pageLimit,
      fullName,
      dateValue ? moment(dateValue).format("YYYY-MM-DD HH:mm:ss.SSS") : null,
      getFromStorage("user")?.elounge?.id
    );
    setRenderAgain(false);
  }, [pageLimit, renderAgain]);
  useEffect(() => {
    if (getAllSubscribers?.data) {
      if (getAllSubscribers?.data?.data?.items?.length > 0) {
        const data = getAllSubscribers?.data?.data?.items
          ?.filter(
            (item) =>
              item?.pwAssignPackage?.pwSubPackage?.pwPackage?.title !== "Free"
          )
          .map((item, i) => {
            return [
              i + 1,
              item?.eloungeSaleUser?.eloungeUser?.fullName,
              item?.createdByUser?.profile?.fullName,
              item?.createdByUser?.profile?.city || "-",
              item?.agencyName,
              <Chip
                label={item?.pwAssignPackage?.pwSubPackage?.pwPackage?.title}
                color="primary"
              />,
              item?.createdByUser?.phone,
              item?.createdByUser?.email,
              <Chip label={item?.pwAssignPackage?.charges} color="primary" />,
              item?.pwAssignPackage?.subscribeDate
                ? moment(item?.pwAssignPackage?.subscribeDate).format(
                    "YYYY-MM-DD hh:mm a"
                  )
                : "-",
            ];
          });
        setDataSource(data);
      } else {
        setDataSource([]);
      }
    }
  }, [getAllSubscribers.data]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={12}>
        <Paper>
          <TableContainer>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  {allSubscribersColumn.map((column) => (
                    <TableCell key={column.id}>{column.label}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {dataSource.map((row) => (
                  <TableRow>
                    {row.map((column) => (
                      <TableCell>{column}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[pageLimit.limit]}
            component="div"
            count={
              getAllSubscribers.data
                ? getAllSubscribers.data.data.meta.totalItems
                : 0
            }
            rowsPerPage={pageLimit.limit}
            page={pageLimit.page - 1}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default SubscribersTable;
