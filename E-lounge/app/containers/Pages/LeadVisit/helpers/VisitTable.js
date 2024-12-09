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
import allVisitColumns from "../../../../utils/columns/leadVisitColumn";
import moment from "moment";
import { getVisitedSalesUserForLeadApi } from "../../../../redux/modules/LeadVisit/action";
import ViewLocationModal from "../../VisitManager/helpers/ViewLocationModal";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    overflowX: "auto", // Enable horizontal scrolling
  },
  table: {
    minWidth: 650, // Adjust this value as needed
  },
}));

const VisitTable = () => {
  const classes = useStyles();
  const [dataSource, setDataSource] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const dispatch = useDispatch();
  const [editModal, setEditModal] = useState({
    visible: false,
    data: null,
  });
  const getAllVisits = useSelector((state) =>
    state.getIn(["getVisitedSalesUserForLead"])
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

  useEffect(() => {
    getVisitedSalesUserForLeadApi(dispatch, pageLimit);
  }, [pageLimit]);
  useEffect(() => {
    if (getAllVisits?.data) {
      if (getAllVisits?.data?.data?.items?.length > 0) {
        const data = getAllVisits?.data?.data?.items?.map((item, i) => {
          return [
            i + 1,
            item?.eloungeUser?.eloungeUser?.fullName,
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
        });
        setDataSource(data);
      }
    }
  }, [getAllVisits?.data]);

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
  return (
    <>
      {editModal.visible && (
        <ViewLocationModal
          open={editModal.visible}
          close={toggleEditModal}
          data={editModal.data}
        />
      )}
      <Grid container spacing={2}>
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
                getAllVisits?.data
                  ? getAllVisits?.data?.data?.meta?.totalItems
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
    </>
  );
};

export default VisitTable;
