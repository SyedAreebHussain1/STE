import React, { useEffect, useState } from "react";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@material-ui/core/TablePagination";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import allSessionsColumns from "../../../../utils/columns/allSessionsColumns";
import {
  addSession,
  getAllSessions,
} from "../../../../redux/modules/Dashboard/actions";
import Chip from "@material-ui/core/Chip";
import AddIcCall from "@material-ui/icons/AddIcCall";
import Check from "@material-ui/icons/Check";
import moment from "moment";
import { Avatar } from "@material-ui/core";
import { CircularProgress } from "@material-ui/core";
import Loading from "dan-components/Loading";
import { getFromStorage } from "../../../../utils/storage";
import { successMessage } from "../../../../utils/message";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    overflowX: "auto", // Enable horizontal scrolling
  },
  table: {
    minWidth: 650, // Adjust this value as needed
  },
}));

export default function AllSessionTable() {
  let user = getFromStorage("user");

  const classes = useStyles();
  const [dataSource, setDataSource] = useState([]);
  const [loadingRows, setLoadingRows] = useState([]);

  const [successRows, setSuccessRows] = useState([]);
  const dispatch = useDispatch();
  const AllSessions = useSelector((state) => state.getIn(["allSessions"]));
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
    setPageLimit((prev) => ({
      ...prev,
      limit: event.target.value,
    }));
  };

  useEffect(() => {
    getAllSessions(dispatch, pageLimit);
  }, [pageLimit]);
  const handleBookNowClick = async (index, item) => {
    // Set loading state for the clicked row
    setLoadingRows((prevLoadingRows) => {
      const newLoadingRows = [...prevLoadingRows];
      newLoadingRows[index] = true;
      return newLoadingRows;
    });
    let body = {
      name: user.name,
      email: user.email,
      phone: user.phone,
      meetingId: item.id,
    };
    await addSession(dispatch, body, onSuccess, onFailure, index);
  };
  useEffect(() => {
    if (AllSessions.data) {
      if (AllSessions.data.data.items.length > 0) {
        const data = AllSessions.data.data.items.map((item, i) => {
          return [
            item.title,
            <Chip
              label={`${item.bookedSlots}/${item.totalSlots}`}
              className={classes.chip}
              color="primary"
            />,
            moment(item.startTime).format("DD MMM YYYY"),
            moment(item.startTime).format("h:mm a"),
            loadingRows[i] ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CircularProgress
                  className={classes.progress}
                  size={20}
                  color="secondary"
                />
              </div>
            ) : successRows[i] ? ( // Show a tick mark icon if the API call was successful
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Check color="secondary" />
              </div>
            ) : (
              <Chip
                avatar={
                  <Avatar>
                    <AddIcCall />
                  </Avatar>
                }
                label="Book now"
                className={classes.chip}
                color="secondary"
                clickable
                onClick={() => handleBookNowClick(i, item)} // Pass the index of the clicked row
              />
            ),
          ];
        });
        setDataSource(data);
      } else {
        setDataSource([]);
      }
    }
  }, [AllSessions.data, loadingRows, successRows]);
  const onSuccess = (index) => {
    successMessage("meeting booked !");
    setLoadingRows((prevLoadingRows) => {
      const newLoadingRows = [...prevLoadingRows];
      newLoadingRows[index] = false; // Set loading to false on error too
      return newLoadingRows;
    });
    setSuccessRows((prevSuccessRows) => {
      const newSuccessRows = [...prevSuccessRows];
      newSuccessRows[index] = true;
      return newSuccessRows;
    });
  };
  const onFailure = (index) => {
    setLoadingRows((prevLoadingRows) => {
      const newLoadingRows = [...prevLoadingRows];
      newLoadingRows[index] = false;
      return newLoadingRows;
    });
  };
  return (
    <div className={classes.root}>
      {AllSessions.loading || AllSessions.data === null ? (
        <div
          style={{
            height: "200px",
            marginTop: "5%",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress
            className={classes.progress}
            size={20}
            color="secondary"
          />
        </div>
      ) : (
        <Paper>
          <TableContainer>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  {allSessionsColumns.map((column) => (
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
            count={AllSessions.data ? AllSessions.data.data.meta.totalItems : 9}
            rowsPerPage={pageLimit.limit}
            page={pageLimit.page - 1}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>
      )}
    </div>
  );
}
