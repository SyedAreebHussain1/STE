import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Avatar from "@material-ui/core/Avatar";
import brand from "dan-api/dummy/brand";
import dummy from "dan-api/dummy/dummyContents";
import logo from "dan-images/logo.svg";
import MainMenu from "./MainMenu";
import styles from "./sidebar-jss";
import { useSelector } from "react-redux";
import { FileCopy, Share } from "@material-ui/icons";
import { successMessage } from "../../utils/message";
import { getFromStorage } from "../../utils/storage";
import { Tooltip } from "@material-ui/core";

function SidebarContent(props) {
  function copyTextToClipboard() {
    const textField = document.createElement("textarea");
    textField.innerText = user.refCode;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
    successMessage("Reference number Copied");
  }
  const [transform, setTransform] = useState(0);
  const reducer = "auth";
  const { userData } = useSelector((state) => state.getIn([reducer]));

  const handleScroll = (event) => {
    const scroll = event.target.scrollTop;
    setTransform(scroll);
  };
  let user = getFromStorage("user");
  useEffect(() => {
    const mainContent = document.getElementById("sidebar");
    mainContent.addEventListener("scroll", handleScroll);
    return () => {
      mainContent.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const {
    classes,
    turnDarker,
    drawerPaper,
    toggleDrawerOpen,
    loadTransition,
    leftSidebar,
    dataMenu,
    status,
    anchorEl,
    openMenuStatus,
    closeMenuStatus,
    changeStatus,
    isLogin,
  } = props;

  const setStatus = (st) => {
    switch (st) {
      case "online":
        return classes.online;
      case "idle":
        return classes.idle;
      case "bussy":
        return classes.bussy;
      default:
        return classes.offline;
    }
  };

  return (
    <div
      className={classNames(
        classes.drawerInner,
        !drawerPaper ? classes.drawerPaperClose : ""
      )}
    >
      <div className={classes.drawerHeader}>
        <NavLink
          to="/app"
          className={classNames(
            classes.brand,
            classes.brandBar,
            turnDarker && classes.darker
          )}
        >
          <img
            src={require("../../../public/favicons/logo.png")}
            alt={userData.name}
          />
          {userData.role.length > 16 ? (
            <Tooltip title={userData.role}>
              <span>{`${userData.role.substr(0, 16)}...`}</span>
            </Tooltip>
          ) : (
            userData.role || "Guest"
          )}
        </NavLink>
        {isLogin && (
          <div
            className={classNames(classes.profile, classes.user)}
            style={{
              opacity: 1 - transform / 100,
              marginTop: transform * -0.3,
            }}
          >
            <Avatar
              alt={userData.name}
              src={userData.profilePic}
              className={classNames(classes.avatar, classes.bigAvatar)}
            />
            <div>
              <h4>{userData.name || userData.email}</h4>
            </div>
            <div>
              {user?.roleType === "sale" && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row-reverse",
                    alignItems: "center",
                    gap: 4,
                    marginTop: "10px",
                  }}
                >
                  <h5 style={{ fontWeight: "normal", fontSize: "14px" }}>
                    {user?.refCode}
                  </h5>{" "}
                  <FileCopy
                    onClick={copyTextToClipboard}
                    color="secondary"
                    style={{
                      marginRight: 5,
                      cursor: "pointer",
                      fontSize: "25px",
                      marginTop: "-10px",
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      <div
        id="sidebar"
        className={classNames(
          classes.menuContainer,
          leftSidebar && classes.rounded,
          isLogin && classes.withProfile
        )}
      >
        <MainMenu
          loadTransition={loadTransition}
          dataMenu={dataMenu}
          toggleDrawerOpen={toggleDrawerOpen}
        />
      </div>
    </div>
  );
}

SidebarContent.propTypes = {
  classes: PropTypes.object.isRequired,
  drawerPaper: PropTypes.bool.isRequired,
  turnDarker: PropTypes.bool,
  toggleDrawerOpen: PropTypes.func,
  loadTransition: PropTypes.func,
  leftSidebar: PropTypes.bool.isRequired,
  dataMenu: PropTypes.array.isRequired,
  status: PropTypes.string.isRequired,
  anchorEl: PropTypes.object,
  openMenuStatus: PropTypes.func.isRequired,
  closeMenuStatus: PropTypes.func.isRequired,
  changeStatus: PropTypes.func.isRequired,
  isLogin: PropTypes.bool,
};

SidebarContent.defaultProps = {
  turnDarker: false,
  toggleDrawerOpen: () => {},
  loadTransition: () => {},
  anchorEl: null,
  isLogin: true,
};

export default withStyles(styles)(SidebarContent);
