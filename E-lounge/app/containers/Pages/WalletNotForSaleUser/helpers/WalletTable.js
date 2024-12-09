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
import walletColumns from "../../../../utils/columns/walletColumns";
import moment from "moment";
import { getAllWalletNotForSaleUserListAction } from "../../../../redux/modules/WalletNotForSaleUser/actions";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    overflowX: "auto", // Enable horizontal scrolling
  },
  table: {
    minWidth: 650, // Adjust this value as needed
  },
}));

const WalletTable = () => {
  const classes = useStyles();
  const [dataSource, setDataSource] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const dispatch = useDispatch();
  const walletList = useSelector((state) =>
    state.getIn(["walletListNotForSaleUser"])
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
    getAllWalletNotForSaleUserListAction(dispatch, pageLimit);
  }, [pageLimit]);
  useEffect(() => {
    if (walletList?.data) {
      if (walletList?.data?.data?.items?.length > 0) {
        const data = walletList?.data?.data?.items?.map((item, i) => {
          const { createdAt, status } = item;
          console.log();
          return [
            i + 1,
            item?.amount,
            <div style={{ display: "flex", gap: 10 }}>
              {status === "Approved" ? (
                <Chip label="Approved" color="secondary" />
              ) : status === "Pending" ? (
                <Chip label="Pending" color="primary" />
              ) : (
                <Chip
                  label="Rejected"
                  color="primary"
                  style={{ backgroundColor: "red", color: "#fff" }}
                />
              )}
              {status === "Rejected" && (
                <Tooltip title={item?.statusRemarks || "N/A"}>
                  <Chip
                    label={item?.statusRemarks && item?.statusRemarks}
                    color="default"
                    style={{ cursor: "pointer" }}
                  />
                </Tooltip>
              )}
            </div>,
            item?.accountTitleName,
            item?.accountNo,
            item?.bankName,
            moment(createdAt).format("YYYY-MM-DD hh:mm a"),
          ];
        });
        setDataSource(data);
      }
    }
  }, [walletList.data]);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={12}>
        <Paper>
          <TableContainer>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  {walletColumns.map((column) => (
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
            count={walletList.data ? walletList.data.data.meta.totalItems : 0}
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

export default WalletTable;
