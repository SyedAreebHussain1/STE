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
// import { getAllSignUpsAction } from "../../../../../redux/modules/EarningHistory/action";
import { getSignUpCountsForLeadAction } from "../../../../../redux/modules/Monitoring/action";
import allSignUpsColumn from "../../../../../utils/columns/allSignUpsColumn";
import moment from "moment";
// import ViewLocationModal from "../../../VisitManager/helpers/ViewLocationModal";
import ViewLocationForSignUpsModal from "../../../Tracking/SignUps/helpers/ViewLocationForSignUpsModal";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    overflowX: "auto", // Enable horizontal scrolling
  },
  table: {
    minWidth: 650, // Adjust this value as needed
  },
}));

const SignUpsTable = ({ fullName, dateValue, renderAgain, setRenderAgain }) => {
  const classes = useStyles();
  const [dataSource, setDataSource] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const dispatch = useDispatch();
  const getAllSignUps = useSelector((state) =>
    state.getIn(["getSignUpCountsForLead"])
  );
  const [editModal, setEditModal] = useState({
    visible: false,
    data: null,
  });
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
    getSignUpCountsForLeadAction(
      dispatch,
      pageLimit,
      fullName,
      dateValue ? moment(dateValue).format("YYYY-MM-DD HH:mm:ss.SSS") : null
    );
    setRenderAgain(false);
  }, [pageLimit, renderAgain]);
  useEffect(() => {
    if (getAllSignUps?.data) {
      if (getAllSignUps?.data?.data?.items?.length > 0) {
        const data = getAllSignUps?.data?.data?.items?.map((item, i) => {
          return [
            i + 1,
            item?.profile?.agency?.eloungeSaleUser?.eloungeUser?.fullName,
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
                  disabled={!item?.profile?.agency}
                  color="primary"
                  style={{ cursor: "pointer" }}
                />
              </span>
            </div>,
            moment(item?.createdAt).format("YYYY-MM-DD hh:mm a"),
          ];
        });
        setDataSource(data);
      } else {
        setDataSource([]);
      }
    }
  }, [getAllSignUps.data]);
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
                getAllSignUps.data ? getAllSignUps.data.data.meta.totalItems : 0
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

export default SignUpsTable;
