import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
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
  Tooltip,
} from "@material-ui/core";
import { getAllVisitsAction } from "./../../../../redux/modules/Visit/action";
import allVisitColumns from "../../../../utils/columns/allVisitColumns";
import moment from "moment";
import EditOutlined from "@material-ui/icons/EditOutlined";
import EditVisitModal from "./EditVisitModal";
import VoiceVisitModal from "./VoiceVisitModal";
import { RecordVoiceOver } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    overflowX: "auto", // Enable horizontal scrolling
  },
  table: {
    minWidth: 650, // Adjust this value as needed
  },
}));

const VisitTable = ({ flVisit }) => {
  const addNewVisit = useSelector((state) => state.getIn(["addNewVisit"]));
  const editVisit = useSelector((state) => state.getIn(["editVisit"]));
  const [voiceModal, setVoiceModal] = useState({
    visible: false,
    data: null,
  });

  const [editModal, setEditModal] = useState({
    visible: false,
    data: null,
  });
  const classes = useStyles();
  const [dataSource, setDataSource] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const dispatch = useDispatch();
  const getAllVisits = useSelector((state) => state.getIn(["getAllVisits"]));
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
    getAllVisitsAction(dispatch, pageLimit, flVisit);
  }, [pageLimit, addNewVisit.data, editVisit.data]);
  useEffect(() => {
    if (getAllVisits?.data) {
      if (getAllVisits?.data?.data?.items?.length > 0) {
        const data = getAllVisits?.data?.data?.items?.map((item, i) => {
          const { createdAt } = item;

          return [
            i + 1,
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
            moment(createdAt).format("YYYY-MM-DD hh:mm a"),
            <div>
              <Button
                onClick={() => {
                  setEditData(item);
                  toggleEditModal();
                }}
              >
                <EditOutlined />
              </Button>
            </div>,
          ];
        });
        setDataSource(data);
      }
    }
  }, [getAllVisits.data]);

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

  return (
    <Grid container spacing={2}>
      {editModal.visible && (
        <EditVisitModal
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
      <Grid item xs={12} md={12}>
        <Paper>
          <TableContainer>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  {allVisitColumns.map((column) => (
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
              getAllVisits.data ? getAllVisits.data.data.meta.totalItems : 0
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

export default VisitTable;
