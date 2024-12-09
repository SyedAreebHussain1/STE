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
import { getEarningHistory } from "../../../../redux/modules/Dashboard/actions";
import earningHistoryColumns from "../../../../utils/columns/earningHistoryColumns";
import { Chip } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    overflowX: "auto", // Enable horizontal scrolling
  },
  table: {
    minWidth: 650, // Adjust this value as needed
  },
}));

export default function CurrentSubscriberTable() {
  const classes = useStyles();
  const [dataSource, setDataSource] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const dispatch = useDispatch();
  const { data: earningHistory, loading: earningLoading } = useSelector(
    (state) => state.getIn(["earningHistory"])
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
    getEarningHistory(dispatch, pageLimit);
  }, [pageLimit]);

  useEffect(() => {
    if (earningHistory.data) {
      if (earningHistory.data.items.length > 0) {
        const data = earningHistory.data.items.map((item, i) => {
          return [
            i + 1,
            item.agency.agencyName,
            item.updatedBalance,
            item.amount,
            <Chip
              label={item.type}
              className={classes.chip}
              style={{
                color: "#389e0d",
                background: "#f6ffed",
                borderColor: "#b7eb8f",
              }}
            />,
            item.assignPackage.pwPackage.title,
            item.assignPackage.title,
            item.createdAt.split("T")[0],
          ];
        });
        setDataSource(data);
      }
    }
  }, [earningHistory.data]);

  return (
    <div className={classes.root}>
      <Paper>
        <TableContainer>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                {earningHistoryColumns.map((column) => (
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
          loading={earningLoading}
          count={earningHistory.data ? earningHistory.data.meta.totalItems : 0}
          rowsPerPage={pageLimit.limit}
          page={pageLimit.page - 1}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}
