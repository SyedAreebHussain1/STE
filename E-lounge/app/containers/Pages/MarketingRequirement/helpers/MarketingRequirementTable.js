import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
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
import allMarketingRequirementForSale from "../../../../utils/columns/allMarketingRequirementForSale";
import moment from "moment";
import EditOutlined from "@material-ui/icons/EditOutlined";
import UpdateMarketingRequirement from "./UpdateMarketingRequirement";
import { getRequirementFormApi } from "../../../../redux/modules/MarketingRequirement/action";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    overflowX: "auto",
  },
  table: {
    minWidth: 650,
  },
}));

const MarketingRequirementTable = () => {
  const requirementForm = useSelector((state) =>
    state.getIn(["requirementForm"])
  );
  const updateRequirementForm = useSelector((state) =>
    state.getIn(["updateRequirementForm"])
  );
  const [editModal, setEditModal] = useState({
    visible: false,
    data: null,
  });
  const classes = useStyles();
  const [dataSource, setDataSource] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const dispatch = useDispatch();
  const getRequirementForm = useSelector((state) =>
    state.getIn(["getRequirementForm"])
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
    getRequirementFormApi(dispatch, pageLimit);
  }, [pageLimit, requirementForm.data, updateRequirementForm.data]);
  useEffect(() => {
    if (getRequirementForm?.data) {
      if (getRequirementForm?.data?.data?.items?.length > 0) {
        const data = getRequirementForm?.data?.data?.items?.map((item, i) => {
          const { createdAt } = item;
          return [
            i + 1,
            item?.subject,
            item.description.length > 30 ? (
              <Tooltip style={{ cursor: "pointer" }} title={item?.description}>
                <span>{`${item.description.substr(0, 30)}...`}</span>
              </Tooltip>
            ) : (
              item.description
            ),
            moment(createdAt).format("YYYY-MM-DD hh:mm a"),
            <div>
              <Button
                onClick={() => {
                  setEditData(item);
                  toggleEditModal();
                }}
              >
                <EditOutlined />
              </Button>
            </div>,
          ];
        });
        setDataSource(data);
      }
    }
  }, [getRequirementForm?.data]);

  function toggleEditModal() {
    setEditModal((prev) => {
      return {
        ...prev,
        visible: !prev.visible,
      };
    });
  }
  function setEditData(data) {
    setEditModal((prev) => {
      return {
        ...prev,
        data: data,
      };
    });
  }
  return (
    <Grid container spacing={2}>
      {editModal.visible && (
        <UpdateMarketingRequirement
          open={editModal.visible}
          close={toggleEditModal}
          data={editModal.data}
        />
      )}
      <Grid item xs={12} md={12}>
        <Paper>
          <TableContainer>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  {allMarketingRequirementForSale.map((column) => (
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
              getRequirementForm.data
                ? getRequirementForm.data.data.meta.totalItems
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

export default MarketingRequirementTable;
