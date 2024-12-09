import React, { useEffect, useState } from "react";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@material-ui/core/TablePagination";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { getAllSubscribersAction } from "../../../../redux/modules/CurrentSubscriber/actions";
import { useDispatch, useSelector } from "react-redux";
import LoungeTableColumns from "../../../../utils/columns/LoungeTableColumns";



const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    overflowX: "auto", // Enable horizontal scrolling
  },
  table: {
    minWidth: 650, // Adjust this value as needed
  },
  tableCell: {
    minWidth: 100, // Adjust this value as needed
    wordWrap: "break-word",
  },
}));

export default function LoungeTable() {

  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  const classes = useStyles();
  const [dataSource, setDataSource] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const dispatch = useDispatch();
  const getAllSubscribers = useSelector((state) =>
    state.getIn(["subscribers"])
  );
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  });
  const handleChangePage = (event, newPage) => {
    setPageLimit(prev => ({
        ...prev,
        page: newPage + 1
    }))
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPageLimit(prev => ({
        ...prev,
        limit: event.target.value
    }))
  };

  useEffect(() => {
    getAllSubscribersAction(dispatch, pageLimit);
  }, [pageLimit]);

  useEffect(() => {
    if (getAllSubscribers.data) {
        if(getAllSubscribers.data.data.items.length > 0){
            const data = getAllSubscribers.data.data.items.map((item, i) => {
                return [
                  i + 1,
                  item.agency.createdByUser.profile.fullName,
                  item.agency.city,
                  item.agency.agencyName,
                  item.agency.createdByUser.phone,
                  item.agency.createdByUser.email,
                  item.pwSubPackage.pwPackage.title,
                  <span
                    style={{
                      backgroundColor: "#F0F1F3",
                      borderRadius: "67px",
                      color: "#3D4350",
                      padding: "3px 8px",
                      textWrap: 'nowrap'
                    }}
                  >
                    {item.pwSubPackage.title}
                  </span>,
                  item.subscribeDate.split('T')[0] || '-'
                ];
              });
              setDataSource(data)
        }
      
    }
  }, [getAllSubscribers.data]);
  return (
    <div className={classes.root}>
      <Paper>
        <TableContainer>
          <Table className={classes.table}>
            <TableHead>
              <StyledTableRow>
                {LoungeTableColumns.map((column) => (
                  <TableCell key={column.id}  className={classes.tableCell}>{column.label}</TableCell>
                ))}
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {dataSource.map((row) => (
                <TableRow>
                  {row.map((column) => (
                    <TableCell  className={classes.tableCell}>{column}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[pageLimit.limit]}
          component="div"
          count={getAllSubscribers.data ? getAllSubscribers.data.data.meta.totalItems : 0}
          rowsPerPage={pageLimit.limit}
          page={pageLimit.page - 1}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}
