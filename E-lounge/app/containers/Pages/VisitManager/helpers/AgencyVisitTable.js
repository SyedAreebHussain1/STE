import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Chip,
  CircularProgress,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Tooltip,
} from "@material-ui/core";
import { getAllEloungeVisitForManagementApi } from "../../../../redux/modules/VisitManager/action";
import visitManagerColumns from "../../../../utils/columns/visitManagerColumns";
import moment from "moment";
import { RecordVoiceOver } from "@material-ui/icons";
import ViewLocationModal from "./ViewLocationModal";
import VoiceVisitModal from "../../Visit/helpers/VoiceVisitModal";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    overflowX: "auto", // Enable horizontal scrolling
  },
  table: {
    minWidth: 650, // Adjust this value as needed
  },
}));

const AgencyVisitTable = ({
  idSearch,
  dateValue,
  flVisit,
  renderAgain,
  setRenderAgain,
}) => {
  const classes = useStyles();
  const [dataSource, setDataSource] = useState([]);
  const [editModal, setEditModal] = useState({
    visible: false,
    data: null,
  });
  const [voiceModal, setVoiceModal] = useState({
    visible: false,
    data: null,
  });

  const [rowsPerPage, setRowsPerPage] = useState(5);
  const dispatch = useDispatch();
  const getAllEloungeVisitForManagement = useSelector((state) =>
    state.getIn(["getAllEloungeVisitForManagement"])
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
    if (idSearch || dateValue) {
      setPageLimit((prev) => {
        return {
          ...prev,
          page: 1,
        };
      });
    }
  }, [idSearch, dateValue]);
  useEffect(() => {
    getAllEloungeVisitForManagementApi(
      dispatch,
      pageLimit,
      idSearch,
      dateValue ? moment(dateValue).format("YYYY-MM-DD HH:mm:ss.SSS") : null,
      flVisit
    );
    setRenderAgain(false);
  }, [pageLimit, renderAgain]);

  function toggleEditModal() {
    setEditModal((prev) => {
      return {
        ...prev,
        visible: !prev.visible,
      };
    });
  }

  function setEditData(data) {
    setEditModal((prev) => {
      return {
        ...prev,
        data: data,
      };
    });
  }
  function toggleVoiceModal() {
    setVoiceModal((prev) => {
      return {
        ...prev,
        visible: !prev.visible,
      };
    });
  }
  function setVoiceData(data) {
    setVoiceModal((prev) => {
      return {
        ...prev,
        data: data,
      };
    });
  }
  useEffect(() => {
    if (getAllEloungeVisitForManagement?.data) {
      if (getAllEloungeVisitForManagement?.data?.data?.items?.length > 0) {
        const data = getAllEloungeVisitForManagement?.data?.data?.items?.map(
          (item, i) => {
            console.log();
            return [
              i + 1,
              item?.eloungeUser?.eloungeUser?.fullName || "-",
              item?.name,
              item?.agencyPhone,
              item.shortNote.length > 30 ? (
                <Tooltip title={item?.shortNote}>
                  <span>{`${item.shortNote.substr(0, 30)}...`}</span>
                </Tooltip>
              ) : (
                item.shortNote
              ),
              item?.attachmentUrl ? (
                <a href={item?.attachmentUrl} target="_blank">
                  <Chip
                    label={"Download"}
                    color="primary"
                    style={{ cursor: "pointer" }}
                  />
                </a>
              ) : (
                "N/A"
              ),
              item?.voiceUrl ? (
                <Button
                  onClick={() => {
                    setVoiceData(item);
                    toggleVoiceModal();
                  }}
                >
                  <RecordVoiceOver />
                </Button>
              ) : (
                "-"
              ),
              moment(item?.createdAt).format("YYYY-MM-DD hh:mm a"),
              <div>
                <span
                  onClick={() => {
                    setEditData(item);
                    toggleEditModal();
                  }}
                >
                  <Chip
                    label={"View Location"}
                    color="primary"
                    style={{ cursor: "pointer" }}
                  />
                </span>
              </div>,
            ];
          }
        );
        setDataSource(data);
      } else {
        setDataSource([]);
      }
    }
  }, [getAllEloungeVisitForManagement?.data]);

  return (
    <>
      {editModal.visible && (
        <ViewLocationModal
          open={editModal.visible}
          close={toggleEditModal}
          data={editModal.data}
        />
      )}
      {voiceModal.visible && (
        <VoiceVisitModal
          open={voiceModal.visible}
          close={toggleVoiceModal}
          data={voiceModal.data}
        />
      )}
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          {getAllEloungeVisitForManagement.loading ? (
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
                      {visitManagerColumns.map((column) => (
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
                  getAllEloungeVisitForManagement?.data
                    ? getAllEloungeVisitForManagement?.data?.data?.meta
                        ?.totalItems
                    : 0
                }
                rowsPerPage={pageLimit.limit}
                page={pageLimit.page - 1}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
              />
            </Paper>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default AgencyVisitTable;
