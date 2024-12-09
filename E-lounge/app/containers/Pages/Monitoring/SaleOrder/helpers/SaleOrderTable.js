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
import { getSaleOrderByIdAction } from "../../../../../redux/modules/EarningHistory/action";
import allSaleOrderColumns from "../../../../../utils/columns/allSaleOrderColumns";
import moment from "moment";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    overflowX: "auto", // Enable horizontal scrolling
  },
  table: {
    minWidth: 650, // Adjust this value as needed
  },
}));

const SaleOrderTable = () => {
  const classes = useStyles();
  const [dataSource, setDataSource] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const dispatch = useDispatch();
  const params = useParams();
  const getSaleOrderById = useSelector((state) =>
    state.getIn(["getSaleOrderById"])
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
    getSaleOrderByIdAction(dispatch, params?.id);
  }, []);
  useEffect(() => {
    if (getSaleOrderById?.data) {
      const data = [
        [
          getSaleOrderById?.data?.data?.name,
          getSaleOrderById?.data?.data?.mobile,
          getSaleOrderById?.data?.data?.invoiceNo,
          getSaleOrderById?.data?.data?.downpayment,
          getSaleOrderById?.data?.data?.totalAmount,
          getSaleOrderById?.data?.data?.cnic,
          getSaleOrderById?.data?.data?.status,
          moment(getSaleOrderById?.data?.data?.createdAt).format(
            "YYYY-MM-DD hh:mm a"
          ),
        ],
      ];
      setDataSource(data);
    }
  }, [getSaleOrderById.data]);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={12}>
        <Paper>
          <TableContainer>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  {allSaleOrderColumns.map((column) => (
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
        </Paper>
      </Grid>
    </Grid>
  );
};

export default SaleOrderTable;
