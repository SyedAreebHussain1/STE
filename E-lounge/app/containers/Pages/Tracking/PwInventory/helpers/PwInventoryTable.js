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
  Tooltip,
} from "@material-ui/core";
import allPwInventoryColumns from "../../../../../utils/columns/allPwInventoryColumns";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { saleUserInventoriesByELoungeAction } from "../../../../../redux/modules/Tracking/action";
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

const PwInventoryTable = ({
  fullName,
  dateValue,
  renderAgain,
  setRenderAgain,
}) => {
  const history = useHistory();
  const classes = useStyles();
  const [dataSource, setDataSource] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const dispatch = useDispatch();
  const getPwInventory = useSelector((state) =>
    state.getIn(["saleUserInventoriesByELounge"])
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
    if (fullName || dateValue) {
      setPageLimit((prev) => {
        return {
          ...prev,
          page: 1,
        };
      });
    }
  }, [fullName, dateValue]);
  useEffect(() => {
    saleUserInventoriesByELoungeAction(
      dispatch,
      pageLimit,
      fullName,
      dateValue ? moment(dateValue).format("YYYY-MM-DD HH:mm:ss.SSS") : null
    );
    setRenderAgain(false);
  }, [pageLimit, renderAgain]);
  useEffect(() => {
    if (getPwInventory?.data) {
      if (getPwInventory?.data?.data?.items?.length > 0) {
        const data = getPwInventory?.data?.data?.items?.map((item, i) => {
          return [
            item?.createdByUser?.profile?.agency?.agencyName,
            item?.createdByUser?.profile?.agency?.eloungeSaleUser?.eloungeUser
              ?.fullName,
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
      } else {
        setDataSource([]);
      }
    }
  }, [getPwInventory?.data]);
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
