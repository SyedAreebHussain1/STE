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
  Tooltip,
} from "@material-ui/core";
import allSignUpsColumn from "../../../../utils/columns/signupsColumns";

import moment from "moment";
import ViewLocationForSignUpsModal from "../../Tracking/SignUps/helpers/ViewLocationForSignUpsModal";
import { getAllAssignedAgenciesAction } from "../../../../redux/modules/AssignedAgencies/action";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    overflowX: "auto", // Enable horizontal scrolling
  },
  table: {
    minWidth: 650, // Adjust this value as needed
  },
}));

const AgenciesTable = () => {
  const classes = useStyles();
  const [dataSource, setDataSource] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const dispatch = useDispatch();
  const [editModal, setEditModal] = useState({
    visible: false,
    data: null,
  });
  const getAllAssignedAgencies = useSelector((state) => state.getIn(["getAllAssignedAgencies"]));
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
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPageLimit((prev) => ({
      ...prev,
      limit: event.target.value,
    }));
  };

  useEffect(() => {
    getAllAssignedAgenciesAction(dispatch, pageLimit);
  }, [pageLimit]);
  useEffect(() => {
    if (getAllAssignedAgencies?.data) {
      if (getAllAssignedAgencies?.data?.data?.items?.length > 0) {
        const data = getAllAssignedAgencies?.data?.data?.items?.map((item, i) => {
          return [
            i + 1,
            item?.profile?.fullName,
            item?.email,
            item?.phone,
            item?.profile?.agency?.agencyName,
            <div>
              <span>
                <Chip
                  onClick={() => {
                    setEditData(item);
                    toggleEditModal();
                  }}
                  label={"View Location"}
                  color="primary"
                  disabled={!item?.profile?.agency}
                  style={{ cursor: "pointer" }}
                />
              </span>
            </div>,
            moment(item?.updatedAt).format("YYYY-MM-DD hh:mm a"),
          ];
        });
        setDataSource(data);
      }
    }
  }, [getAllAssignedAgencies.data]);
  return (
    <>
      {editModal.visible && (
        <ViewLocationForSignUpsModal
          open={editModal.visible}
          close={toggleEditModal}
          data={editModal?.data?.profile?.agency}
        />
      )}
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Paper>
            <TableContainer>
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    {allSignUpsColumn.map((column) => (
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
                getAllAssignedAgencies.data ? getAllAssignedAgencies.data.data.meta.totalItems : 0
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

export default AgenciesTable;
