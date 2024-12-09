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
import { getTokenByIdAction } from "../../../../../redux/modules/EarningHistory/action";
import allSignUpsColumn from "../../../../../utils/columns/allSignUpsColumn";
import moment from "moment";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import allTokenColumn from "../../../../../utils/columns/allTokenColumn";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    overflowX: "auto", // Enable horizontal scrolling
  },
  table: {
    minWidth: 650, // Adjust this value as needed
  },
}));

const Token = () => {
  const classes = useStyles();
  const [dataSource, setDataSource] = useState([]);
  const dispatch = useDispatch();
  const params = useParams();
  const getTokenById = useSelector((state) => state.getIn(["getTokenById"]));

  useEffect(() => {
    getTokenByIdAction(dispatch, params?.id);
  }, []);
  useEffect(() => {
    if (getTokenById?.data) {
      const data = [
        [
          1,
          getTokenById?.data?.data?.amount,
          getTokenById?.data?.data?.status,
          getTokenById?.data?.data?.paymentStatus,
          moment(getTokenById?.data?.data?.createdAt).format("DD-MM-YYYY")
        ],
      ];
      setDataSource(data);
    }
  }, [getTokenById.data]);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={12}>
        <Paper>
          <TableContainer>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  {allTokenColumn.map((column) => (
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

export default Token;
