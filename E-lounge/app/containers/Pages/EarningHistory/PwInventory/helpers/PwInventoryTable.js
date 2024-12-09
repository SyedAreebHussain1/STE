import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@material-ui/core";
import { getPwInventoryAction } from "../../../../../redux/modules/EarningHistory/action";
import allPwInventoryColumns from "../../../../../utils/columns/pwInventoryColumns";
import moment from "moment";
import Button from "@material-ui/core/Button";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    overflowX: "auto", // Enable horizontal scrolling
  },
  table: {
    minWidth: 650, // Adjust this value as needed
  },
}));

const PwInventoryTable = () => {
  const history = useHistory();
  const classes = useStyles();
  const [dataSource, setDataSource] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const dispatch = useDispatch();
  const getPwInventory = useSelector((state) =>
    state.getIn(["getPwInventory"])
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
    getPwInventoryAction(dispatch, pageLimit);
  }, [pageLimit]);
  useEffect(() => {
    if (getPwInventory?.data) {
      if (getPwInventory?.data?.data?.items?.length > 0) {
        const data = getPwInventory?.data?.data?.items?.map((item, i) => {
          return [
            item?.createdByUser?.profile?.agency?.agencyName,
            item?.propertyWalletInventoryPlot?.propertyWalletInventory
              ?.propertyWalletProject?.projectName,
            `${
              item?.propertyWalletInventoryPlot?.propertyWalletInventory
                ?.landSize
            } ${
              item?.propertyWalletInventoryPlot?.propertyWalletInventory
                ?.landArea?.title
            }`,
            <div
              style={{
                display: "flex",
                gap: 8,
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <Button
                color="primary"
                style={{ border: "1px solid" }}
                onClick={() => {
                  history.push(
                    `/app/pages/pw-inventory/sale-order/${item?.id}`
                  );
                }}
              >
                View Sale Order
              </Button>
              <Button
                color="primary"
                style={{ border: "1px solid" }}
                onClick={() => {
                  history.push(
                    `/app/pages/pw-inventory/sale-quotation/${item?.id}`,
                    { ...item }
                  );
                }}
              >
                View Sale Quotation
              </Button>
              <Button
                color="primary"
                style={{ border: "1px solid" }}
                disabled={item?.tokenLockInventory === null}
                onClick={() => {
                  history.push(`/app/pages/pw-inventory/token/${item?.id}`, {
                    ...item,
                  });
                }}
              >
                View Token
              </Button>
            </div>,
          ];
        });
        setDataSource(data);
      }
    }
  }, [getPwInventory.data]);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={12}>
        <Paper>
          <TableContainer>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  {allPwInventoryColumns.map((column) => (
                    <TableCell key={column.id} style={{ textAlign: "center" }}>
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {dataSource.map((row) => (
                  <TableRow>
                    {row.map((column) => (
                      <TableCell style={{ textAlign: "center" }}>
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
              getPwInventory.data ? getPwInventory.data.data.meta.totalItems : 0
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

export default PwInventoryTable;
