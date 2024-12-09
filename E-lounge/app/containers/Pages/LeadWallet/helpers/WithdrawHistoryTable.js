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
import withdrawHistoryColumns from "../../../../utils/columns/withdrawHistoryColumns";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    overflowX: "auto", // Enable horizontal scrolling
  },
  table: {
    minWidth: 650, // Adjust this value as needed
  },
}));

const WithDraw = () => {
  const classes = useStyles();
  const [dataSource, setDataSource] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const dispatch = useDispatch();
  //   const walletList = useSelector((state) => state.getIn(["walletList"]));
  const withDraw = [
    {
      invoiceNo: "#454545",
      bank: "Dubai Islamic Bank",
      accountNo: "234234234234",
      accountTitle: "muhammad umair",
      withDrawDate: "16-10-2023",
      amount: "20000",
    },
    {
      invoiceNo: "#234235",
      bank: "Dubai Islamic Bank",
      accountNo: "4587847562",
      accountTitle: "muhammadfaizan",
      withDrawDate: "16-10-2023",
      amount: "100000",
    },
    {
      invoiceNo: "#3278428379",
      bank: "Dubai Islamic Bank",
      accountNo: "0342903498",
      accountTitle: "muhammad irfan",
      withDrawDate: "16-10-2023",
      amount: "8000",
    },
    {
      invoiceNo: "#8934895",
      bank: "Dubai Islamic Bank",
      accountNo: "9999999999",
      accountTitle: "iman khan",
      withDrawDate: "16-10-2023",
      amount: "982300",
    },
  ];
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

  //   useEffect(() => {
  // getAllWalletListAction(dispatch, pageLimit);
  //   }, [pageLimit]);

  useEffect(() => {
    if (withDraw) {
      if (withDraw.length > 0) {
        const data = withDraw.map((item, i) => {
          return [
            item.invoiceNo,
            item.bank,
            item.accountNo,
            item.accountTitle,
            item.withDrawDate,
            item.amount,
          ];
        });
        setDataSource(data);
      }
    }
  }, []);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={12}>
        <Paper>
          <TableContainer>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  {withdrawHistoryColumns.map((column) => (
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
            count={withDraw.length > 0 ? withDraw.length : 0}
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

export default WithDraw;
