import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";

interface NavBarProps {
  title: string;
  loginLabel: string;
  onLoginClick?: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ title, loginLabel, onLoginClick }) => {
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);

  // Open the menu
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMenuAnchor(event.currentTarget);
  };

  // Close the menu
  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  return (
    <AppBar position="static" className="navbar">
      <Toolbar>
        {/* App Title */}
        <Typography variant="h6" className="app-title">
          <Link to="/" className="nav-link">
            {title}
          </Link>
        </Typography>

        {/* Menu Icon */}
        <IconButton
          color="inherit"
          edge="end"
          aria-controls="nav-menu"
          aria-haspopup="true"
          onClick={handleMenuOpen}
          className="menu-icon"
        >
          <MenuIcon />
        </IconButton>

        {/* Dropdown Menu */}
        {/* Dropdown Menu */}
<Menu
  id="nav-menu"
  anchorEl={menuAnchor}
  keepMounted
  open={Boolean(menuAnchor)}
  onClose={handleMenuClose}
>
  <MenuItem onClick={handleMenuClose}>
    <Link to="/" className="nav-link">Home</Link>
  </MenuItem>
  <MenuItem onClick={handleMenuClose}>
    <Link to="/profile" className="nav-link">Profile</Link>
  </MenuItem>
  <MenuItem onClick={handleMenuClose}>
    <Link to="/send-receive" className="nav-link">Send & Receive</Link>
  </MenuItem>
  <MenuItem onClick={handleMenuClose}>
    <Link to="/statements" className="nav-link">Statements</Link>
  </MenuItem>
  <MenuItem onClick={handleMenuClose}>
    <Link to="/balance" className="nav-link">Balance</Link>
  </MenuItem>
  <MenuItem onClick={handleMenuClose}>
    <Link to="/add-card" className="nav-link">Add Card</Link>
  </MenuItem>
</Menu>

        {/* Login/Logout Button */}
        <Button color="secondary" variant="contained" className="login-button" onClick={onLoginClick}>
          {loginLabel}
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;