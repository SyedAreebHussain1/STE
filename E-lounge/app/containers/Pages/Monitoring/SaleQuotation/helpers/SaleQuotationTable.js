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
import allSaleQuotationColumns from "../../../../../utils/columns/allSaleQuotationColumns";
import moment from "moment";
import {
  useLocation,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";

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
  const dispatch = useDispatch();
  const location = useLocation();
  const getSaleQuotationById = location?.state;
  useEffect(() => {
    if (getSaleQuotationById) {
      const data = [
        [
          getSaleQuotationById?.clientName,
          getSaleQuotationById?.clientEmail,
          getSaleQuotationById?.phone,
          getSaleQuotationById?.discount,
          getSaleQuotationById?.formNo,
          getSaleQuotationById?.sellingPrice,
          getSaleQuotationById?.status,
          getSaleQuotationById?.dealType,
          getSaleQuotationById?.quotationNo,
          moment(getSaleQuotationById?.createdAt).format("YYYY-MM-DD hh:mm a"),
        ],
      ];
      setDataSource(data);
    }
  }, [getSaleQuotationById]);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={12}>
        <Paper>
          <TableContainer>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  {allSaleQuotationColumns.map((column) => (
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
