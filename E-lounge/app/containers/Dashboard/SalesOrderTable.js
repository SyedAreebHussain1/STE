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
import { Avatar, Button, Chip } from "@material-ui/core";
import { Edit } from "@material-ui/icons";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import salesOrderColumn from "../../utils/columns/salesOrderColumn";
import { getSaleOrderAction } from "../../redux/modules/Dashboard/action";
import moment from "moment";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    overflowX: "auto", // Enable horizontal scrolling
  },
  table: {
    minWidth: 650, // Adjust this value as needed
  },
  tableCell: {
    minWidth: 100, // Adjust this value as needed
    wordWrap: "break-word",
  },
}));

export default function SalesOrderTable({ loungeId }) {
  const history = useHistory();
  const classes = useStyles();
  const [dataSource, setDataSource] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const dispatch = useDispatch();
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
  const getSaleOrder = useSelector((state) => state.getIn(["getSaleOrder"]));
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPageLimit((prev) => ({
      ...prev,
      limit: event.target.value,
    }));
  };

  useEffect(() => {
    if (loungeId) {
      getSaleOrderAction(dispatch, pageLimit, loungeId);
    }
  }, [loungeId]);

  useEffect(() => {
    if (getSaleOrder?.data) {
      const data = getSaleOrder?.data?.data?.items?.map((item) => {
        return [
          item?.propertyWalletInventorySaleQuotation
            ?.propertyWalletInventoryPlot?.plotNo || "-",
          item?.createdByUser?.profile?.agency?.agencyName || "-",
          item?.createdByUser?.profile?.fullName || "-",
          item?.totalAmount || "-",
          item?.createdByUser?.staffAssignedLounge !== null
            ? item?.createdByUser?.staffAssignedLounge?.loungeUser?.fullName
            : "-",
          item?.propertyWalletInventorySaleQuotation?.dealType || "-",

          moment(item?.createdAt).format("DD-MM-YYYY"),
        ];
      });
      setDataSource(data);
    }
  }, [getSaleOrder?.data]);

  return (
    <div className={classes.root}>
      <Paper>
        <TableContainer>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                {salesOrderColumn.map((column) => (
                  <TableCell key={column.id} className={classes.tableCell}>
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {dataSource.map((row) => (
                <TableRow>
                  {row.map((column) => (
                    <TableCell className={classes.tableCell}>
                      {column}
                    </TableCell>
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
            getSaleOrder?.data ? getSaleOrder?.data?.data?.meta?.totalItems : 0
          }
          rowsPerPage={pageLimit.limit}
          page={pageLimit.page - 1}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}
