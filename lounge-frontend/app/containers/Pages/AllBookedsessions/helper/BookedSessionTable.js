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
import bookedSessionsColumns from "../../../../utils/columns/bookedSessionsColumns";
import {
  addSession,
  deleteSession,
  getAllBookedSessions,
} from "../../../../redux/modules/Dashboard/actions";
import Chip from "@material-ui/core/Chip";
import AddIcCall from "@material-ui/icons/AddIcCall";
import Check from "@material-ui/icons/Check";
import moment from "moment";
import { Avatar } from "@material-ui/core";
import { CircularProgress } from "@material-ui/core";
import Loading from "dan-components/Loading";
import { getFromStorage } from "../../../../utils/storage";
import { infoMessage, successMessage } from "../../../../utils/message";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";

import Delete from "@material-ui/icons/Delete";
import ArrowForward from "@material-ui/icons/ArrowForward";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    overflowX: "auto", // Enable horizontal scrolling
  },
  table: {
    minWidth: 650, // Adjust this value as needed
  },
}));

export default function BookedSessionTable() {
  let user = getFromStorage("user");
  const addsession = useSelector((state) => state.getIn(["addSession"]));
  const deletesession = useSelector((state) => state.getIn(["deleteSession"]));

  const classes = useStyles();
  const [dataSource, setDataSource] = useState([]);
  const [loadingRows, setLoadingRows] = useState([]);

  const [successRows, setSuccessRows] = useState([]);
  const dispatch = useDispatch();
  const Bookedsessions = useSelector((state) =>
    state.getIn(["bookedSessions"])
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
    setPageLimit((prev) => ({
      ...prev,
      limit: event.target.value,
    }));
  };

  useEffect(() => {
    getAllBookedSessions(dispatch, pageLimit, user.email);
  }, [pageLimit, deletesession.data, addsession.data]);
  const handleDeleteMeeting = async (index, item) => {
    // Set loading state for the clicked row
    setLoadingRows((prevLoadingRows) => {
      const newLoadingRows = [...prevLoadingRows];
      newLoadingRows[index] = true;
      return newLoadingRows;
    });

    await deleteSession(dispatch, item.id, onSuccess, onFailure, index);
  };
  useEffect(() => {
    if (Bookedsessions.data) {
      if (Bookedsessions.data.data.items.length > 0) {
        const data = Bookedsessions.data.data.items.map((item, i) => {
          return [
            item.meetSession.title,
            <Chip
              label={`${item.meetSession.bookedSlots}/${
                item.meetSession.totalSlots
              }`}
              className={classes.chip}
              color="primary"
            />,
            moment(item.meetSession.startTime).format("DD MMM YYYY"),
            moment(item.meetSession.startTime).format("h:mm a"),
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Tooltip title="Join meeting">
                <IconButton
                  onClick={() => {
                    window.open(item.meetSession.meetingUrl);
                  }}
                  className={classes.blueText}
                  aria-label="Chat"
                >
                  <ArrowForward />
                </IconButton>
              </Tooltip>
              {loadingRows[i] ? (
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
                <Tooltip title="Delete meeting">
                  <IconButton
                    onClick={() => handleDeleteMeeting(i, item)}
                    className={classes.blueText}
                    aria-label="Chat"
                  >
                    <Delete />
                  </IconButton>
                </Tooltip>
              )}
            </div>,
          ];
        });
        setDataSource(data);
      } else {
        setDataSource([]);
      }
    }
  }, [Bookedsessions.data, loadingRows, successRows, addsession.data, ,]);
  const onSuccess = (index) => {
    infoMessage("meeting deleted !");
    setLoadingRows((prevLoadingRows) => {
      const newLoadingRows = [...prevLoadingRows];
      newLoadingRows[index] = false; // Set loading to false on error too
      return newLoadingRows;
    });
    setSuccessRows((prevSuccessRows) => {
      const newSuccessRows = [...prevSuccessRows];
      newSuccessRows[index] = false;
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
      {Bookedsessions.loading || Bookedsessions.data === null ? (
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
                  {bookedSessionsColumns.map((column) => (
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
              Bookedsessions.data ? Bookedsessions.data.data.meta.totalItems : 9
            }
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
