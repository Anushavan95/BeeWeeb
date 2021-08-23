import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import { useDispatch } from "react-redux";
import { openMenu } from "../../redux/dashbordSlice";
import { useHistory } from "react-router-dom";
import Main from "../Main/Main";
import "./header.scss";

export default function Header() {
  const history = useHistory();
  const dispatch = useDispatch();
  let data = localStorage.getItem("data");
  const myData = JSON.parse(data);
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  function signOut() {
    history.push("/");
    localStorage.clear("data");
  }

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={signOut}>Log Out</MenuItem>
    </Menu>
  );

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="open drawer">
            <MenuIcon onClick={() => dispatch(openMenu())} />
          </IconButton>
          <Typography variant="h1" noWrap>
            {myData.displayName}
          </Typography>

          <div />
          <div>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <img src={myData.photoURL} alt="Photo-url" className="avatar" />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Main />
      {renderMenu}
    </div>
  );
}
