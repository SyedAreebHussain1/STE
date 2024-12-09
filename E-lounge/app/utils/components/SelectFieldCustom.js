import {
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  withStyles,
} from "@material-ui/core";
import React, { useEffect, useRef } from "react";
import styles from "../../components/Forms/user-jss";

const SelectFieldCustom = ({
  onChange,
  value,
  label,
  name,
  options,
  setPageLimit,
  loading,
  classes,
  loadMore = true,
  ...rest
}) => {
  function handleLoadMore(e) {
    e.preventDefault();
    e.stopPropagation();
    setPageLimit((prev) => {
      return {
        ...prev,
        page: prev.page + 1,
      };
    });
  }
  return (
    <FormControl fullWidth sx={{ width: "100%" }} style={{ width: "100%" }}>
      <InputLabel id="demo-multiple-name-label">{label}</InputLabel>
      <Select
        inputProps={{
          name: name,
          id: `${name}-simple`,
        }}
        onChange={onChange}
        value={value}
        required
        margin="dense"
        {...rest}
        fullWidth
        MenuProps={{
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "left",
          },
          transformOrigin: {
            vertical: "top",
            horizontal: "left",
          },
          getContentAnchorEl: null,
          style: {
            maxHeight: 400,
          },
        }}
      >
        {options?.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.name}
          </MenuItem>
        ))}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            pointerEvents: "none",
          }}
        >
          {loadMore && (
            <Button
              variant="contained"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "0.8rem",
                pointerEvents: "all", //added for fixing for null value selected
              }}
              onClick={handleLoadMore}
            >
              {loading ? (
                <CircularProgress
                  className={classes.progress}
                  size={15}
                  color="white"
                />
              ) : (
                <>Load More</>
              )}
            </Button>
          )}
        </div>
      </Select>
    </FormControl>
  );
};

export default withStyles(styles)(SelectFieldCustom);
