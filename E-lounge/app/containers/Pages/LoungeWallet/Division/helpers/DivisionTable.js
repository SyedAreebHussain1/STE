import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import {
  Chip,
  CircularProgress,
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
import divisionColumns from "../../../../../utils/columns/divisionColumns";
import { getPoolDivisionApi } from "../../../../../redux/modules/LoungeWallet/Division/action";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    overflowX: "auto", // Enable horizontal scrolling
  },
  table: {
    minWidth: 650, // Adjust this value as needed
  },
}));

const DivisionTable = () => {
  const classes = useStyles();
  const [dataSource, setDataSource] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const dispatch = useDispatch();
  const getPoolDivision = useSelector((state) =>
    state.getIn(["getPoolDivision"])
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
    getPoolDivisionApi(dispatch, pageLimit);
  }, [pageLimit]);
  useEffect(() => {
    if (getPoolDivision?.data) {
      if (getPoolDivision?.data?.data?.roles?.items?.length > 0) {
        const data = getPoolDivision?.data?.data?.roles?.items?.map(
          (item, i) => {
            const { title, divisionPer } = item;
            return [title, divisionPer];
          }
        );
        setDataSource(data);
      }
    }
  }, [getPoolDivision?.data]);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={12}>
        {getPoolDivision.loading ? (
          <div
            style={{
              height: "200px",
              marginTop: "5%",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress
              className={classes.progress}
              size={20}
              color="secondary"
            />
          </div>
        ) : (
          <Paper>
            <TableContainer>
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    {divisionColumns.map((column) => (
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
                getPoolDivision.data
                  ? getPoolDivision?.data?.data?.roles?.meta?.totalItems
                  : 0
              }
              rowsPerPage={pageLimit.limit}
              page={pageLimit.page - 1}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </Paper>
        )}
      </Grid>
    </Grid>
  );
};

export default DivisionTable;
