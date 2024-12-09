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
import myTransactionsColumns from "../../../../../utils/columns/myTransactionsColumns";
import { getFromStorage } from "../../../../../utils/storage";
import { getAllMyTransactionApi } from "../../../../../redux/modules/Tracking/action";
import moment from "moment";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    overflowX: "auto", // Enable horizontal scrolling
  },
  table: {
    minWidth: 650, // Adjust this value as needed
  },
}));

const TransactionsTable = () => {
  const classes = useStyles();
  const [dataSource, setDataSource] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const dispatch = useDispatch();
  const getAllTransaction = useSelector((state) =>
    state.getIn(["getAllMyTransactionApi"])
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
    getAllMyTransactionApi(dispatch, pageLimit);
  }, [pageLimit]);

  useEffect(() => {
    if (getAllTransaction?.data) {
      if (getAllTransaction?.data?.data?.items?.length > 0) {
        const data = getAllTransaction?.data?.data?.items?.map((item) => {
          const { createdAt } = item;
          return [
            // item?.eLoungeSaleUserWallet?.eloungeSaleUser?.eloungeUser?.fullName,
            item?.sourceBy,
            item?.paymentFor,
            item?.amount,
            item.transactionReason.length > 30 ? (
              <Tooltip title={item?.transactionReason}>
                <span>{`${item.transactionReason.substr(0, 30)}...`}</span>
              </Tooltip>
            ) : (
              item.transactionReason
            ),
            moment(createdAt).format("YYYY-MM-DD hh:mm a"),
          ];
        });
        setDataSource(data);
      }
    }
  }, [getAllTransaction.data]);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={12}>
        <Paper>
          <TableContainer>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  {myTransactionsColumns.map((column) => (
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
              getAllTransaction.data
                ? getAllTransaction.data.data.meta.totalItems
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
  );
};

export default TransactionsTable;
