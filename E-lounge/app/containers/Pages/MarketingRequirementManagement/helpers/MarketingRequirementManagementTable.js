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
import allMarketingRequirementForManagment from "../../../../utils/columns/allMarketingRequirementForManagment";
import moment from "moment";
import { getAllRequirementFormsApi } from "../../../../redux/modules/MarketingRequirementManagement/action";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    overflowX: "auto",
  },
  table: {
    minWidth: 650,
  },
}));
const MarketingRequirementManagementTable = () => {
  const getAllRequirementForms = useSelector((state) =>
    state.getIn(["getAllRequirementForms"])
  );
  const classes = useStyles();
  const [dataSource, setDataSource] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const dispatch = useDispatch();
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
    getAllRequirementFormsApi(dispatch, pageLimit);
  }, [pageLimit, dispatch]);
  useEffect(() => {
    if (getAllRequirementForms?.data) {
      if (getAllRequirementForms?.data?.data?.items?.length > 0) {
        const data = getAllRequirementForms?.data?.data?.items?.map(
          (item, i) => {
            const { createdAt } = item;
            return [
              i + 1,
              item?.eloungeUser?.eloungeUser?.fullName,
              item?.subject,
              item.description.length > 30 ? (
                <Tooltip
                  style={{ cursor: "pointer" }}
                  title={item?.description}
                >
                  <span>{`${item.description.substr(0, 30)}...`}</span>
                </Tooltip>
              ) : (
                item.description
              ),
              moment(createdAt).format("YYYY-MM-DD hh:mm a"),
            ];
          }
        );
        setDataSource(data);
      }
    }
  }, [getAllRequirementForms?.data]);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={12}>
        <Paper>
          <TableContainer>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  {allMarketingRequirementForManagment.map((column) => (
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
              getAllRequirementForms.data
                ? getAllRequirementForms.data.data.meta.totalItems
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

export default MarketingRequirementManagementTable;
